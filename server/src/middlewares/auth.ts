import jwt, { type JwtPayload } from "jsonwebtoken";
import type { Request, Response, NextFunction } from "express";

interface JWTPayload extends jwt.JwtPayload {
  userId: string
}

export const isLoggedIn = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const JWT_SECRET = "HNwvQCltgsBeqxWISyYDxi5ulOB4NQoSaaUZKqBDHox";

  try {
    if (!req.cookies) {
      return res.json({ success: false, message: "Please Login." });
    }

    const { token } = req.cookies;
    if (!token) {
      return res.json({ success: false, message: "Token missing..." });
    }

    const paylaod = jwt.verify(token, JWT_SECRET) as JWTPayload;
    
    req.userId = paylaod.userId;
    next();
  } catch (err) {
    console.log("Error in auth:", err);
    const message =
      err instanceof Error ? err.message : "Internal Server Error";
    res.status(500).json({ success: false, message });
  }
};
