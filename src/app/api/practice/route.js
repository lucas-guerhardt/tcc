import { Post } from "@/lib/models";
import { connectToDatabase } from "@/lib/utils";
import { NextResponse } from "next/server";

export const GET = async (request) => {
  try {
    connectToDatabase();
    const posts = await Post.find();
    return NextResponse.json(posts);
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch posts");
  }
};
