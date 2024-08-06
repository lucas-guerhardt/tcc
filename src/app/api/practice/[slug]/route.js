import { Post } from "@/lib/models";
import { connectToDatabase } from "@/lib/utils";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
  const { slug } = params;
  try {
    connectToDatabase();
    const post = await Post.findOne({ slug });
    return NextResponse.json(post);
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch posts");
  }
};
