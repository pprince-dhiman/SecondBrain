import mongoose from "mongoose";

const contentSchema = new mongoose.Schema({
  link: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    enum: ["image", "video", "audio", "article"],
    required: true,
  },
  title: {
    type: String,
    trim: true,
    required: true,
  },
  tags: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: "Tag",
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }
});

const Content = mongoose.model("Content", contentSchema);
export default Content;
