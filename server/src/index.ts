import express from "express";
import type { Request, Response } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import "dotenv/config";
import { connectDB } from "./db/db.js";
import User from "./models/user.js";
import Content from "./models/content.js";
import cookieParser from "cookie-parser";
import { isLoggedIn } from "./middlewares/auth.js";
import Link from "./models/link.js";
import { generateLink } from "./utils.js";

interface Content {
  title: string;
  type: string;
  link: string;
  userId: string;
}

const app = express();
const PORT = process.env.PORT;
const JWT_SECRET = "HNwvQCltgsBeqxWISyYDxi5ulOB4NQoSaaUZKqBDHox";

app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res) => {
  res.json({ success: true, message: "working..." });
});

app.post("/api/v1/signup", async (req, res) => {
  try {
    let { username, password } = req.body;

    if (!username || !password) {
      return res.json({ success: false, message: "Missing credentials." });
    }

    const isExists = await User.findOne({ username: username });

    if (isExists) {
      return res.json({ success: false, message: "Username already exists." });
    }

    password = await bcrypt.hash(password, 5);

    await User.create({ username, password });
    res.json({ success: true, message: "Signup successfully." });
  } catch (err) {
    res.json({ success: false, message: err });
    console.log(err);
  }
});

app.post("/api/v1/signin", async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.json({ success: false, message: "Missing credentials" });
    }

    const user = await User.findOne({ username });
    if (!user) {
      return res.json({ success: false, message: "Username does not exists." });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.json({ success: false, message: "Incorrect credentails." });
    }

    // generate a jwt
    const token = jwt.sign({ userId: user._id }, JWT_SECRET);
    res.cookie("token", token);
    res
      .status(200)
      .json({ success: true, message: `Welcome Back ${username}.` });
  } catch (err) {
    res.json({ success: false, message: err });
    console.log(err);
  }
});

// convert each tag into lowercase
app.post("/api/v1/content", isLoggedIn, async (req: Request, res: Response) => {
  try {
    /* 
{
	"type": "image", "video", "audio", "article",
	"link": "url",
	"title": "Title of doc/video",
	"tags": ["productivity", "politics", ...]
}
   */

    const { type, link, title } = req.body;
    const userId = req.userId;
    if (!type || !link || !title) {
      return res.json({ success: false, message: "Missing fields." });
    }

    if (!userId) {
      return res.json({ success: false, message: "Not logged in" });
    }

    const content = { type, link, title, userId };
    await Content.create(content);

    res.json({ success: true, message: "Content posted." });
  } catch (err) {
    res.json({ success: false, message: err });
    console.log(err);
  }
});

// convert each tag into lowercase
app.get("/api/v1/content", isLoggedIn, async (req: Request, res: Response) => {
  try {
    const userId = req.userId;
    if (!userId) {
      return res.json({ success: false, message: "Not a valid user." });
    }

    const content = await Content.find({ userId }).populate(
      "userId",
      "username",
    );
    res.json({ success: true, content });
  } catch (err) {
    res.json({ success: false, message: err });
    console.log(err);
  }
});

app.delete(
  "/api/v1/content/:contentId",
  isLoggedIn,
  async (req: Request, res: Response) => {
    try {
      const userId = req.userId;
      const { contentId } = req.params;
      console.log("content id: ", contentId);

      if (!userId || !contentId) {
        return res.json({ success: false, message: "Invalid Creds." });
      }

      const content = await Content.deleteOne({ userId: userId, _id: contentId });
      console.log("content", content);
      res.json({ success: true, message: `deleted successfully` });
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Internal server error.";
      res.json({ success: false, message });
      console.log(err);
    }
  },
);

//  shareable link for your second brain
app.post("/api/v1/brain/share", isLoggedIn, async (req, res) => {
  try {
    const {share} = req.body;
    const userId = req.userId;
    if(typeof userId === "undefined"){
      return res.json({success: false, message: "Invalid user id"});
    }
    
    if(share) {
      await Link.create({
        userId: userId,
        hash: generateLink()  // blog.com/share/lasjd#skl%lsdfj
      })
    }
    else {
      await Link.deleteOne({
        userId: userId
      })
    }

    res.json({success: true, message: "Updated shared link."});
    
  } catch (err) {
    res.json({ success: false, message: err });
    console.log(err);
  }
});

// Fetch another user's shared brain content
app.get("/api/v1/brain/:shareLink", async (req, res) => {
  try {
  } catch (err) {
    res.json({ success: false, message: err });
    console.log(err);
  }
});

const initConnection = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => console.log("Listening at " + PORT));
  } catch (err) {
    console.log(err);
  }
};

initConnection();
