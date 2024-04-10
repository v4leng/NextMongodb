// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import connectDB from "../../../libs/dbConnect";
import { userModel } from "../../../models/users";

export default async function handler(req, res) {
  if (req.method === "POST") {
    await connectDB();
    try {
      const body = req.body;
      const newUser = await userModel.create(body);
      return res.status(200).json({ data: newUser });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
  if (req.method === "GET") {
    await connectDB();
    try {
      const users = await userModel.find({});
      return res.status(200).json({ data: users });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  } else {
    // Handle any other HTTP method
    return res.status(405).end();
  }
}
