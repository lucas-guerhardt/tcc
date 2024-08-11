"use server";

import { connectToDatabase } from "./utils";
import { Post, User } from "./models";
import { unstable_noStore as noStore, revalidatePath } from "next/cache";
import { auth } from "./auth";

export const createPost = async (formData) => {
  const { title, description, img, slug } = Object.fromEntries(formData);

  try {
    connectToDatabase();
    const newPost = new Post({
      title,
      description,
      img,
      slug,
    });
    await newPost.save();
    revalidatePath("/practice");
    return newPost;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to create post");
  }
};

export const getPost = async (slug) => {
  try {
    connectToDatabase();
    const post = await Post.findOne({ slug });
    return post;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch post");
  }
};

export const getPosts = async () => {
  try {
    connectToDatabase();
    const posts = await Post.find();
    return posts;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch posts");
  }
};

export const updatePost = async (formData) => {
  const { id, title, description, img, slug } = Object.fromEntries(formData);

  try {
    connectToDatabase();
    const post = await Post.findByIdAndUpdate(
      id,
      { title, description, img, slug },
      { new: true }
    );
    return post;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to update post");
  }
};

export const deletePost = async (formData) => {
  const { slug } = Object.fromEntries(formData);
  const { id } = await getPost(slug);
  try {
    connectToDatabase();
    const post = await Post.findByIdAndDelete(id);
    return post;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to delete post");
  }
};

export const getUsers = async () => {
  noStore();
  try {
    connectToDatabase();
    const posts = await User.find();
    return posts;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch users");
  }
};

export const getUser = async (email) => {
  noStore();
  try {
    connectToDatabase();
    const user = await User.findOne({ email });
    return user;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch user!");
  }
};

export const getAuth = async () => {
  const session = await auth();
  if (!session) return null;
  try {
    connectToDatabase();
    const userNotFormatted = await User.findOne({ email: session.user.email });
    const user = {
      id: userNotFormatted._id.toString(),
      username: userNotFormatted.username,
      email: userNotFormatted.email,
      img: userNotFormatted.img,
      isAdmin: userNotFormatted.isAdmin,
      createdAt: userNotFormatted.createdAt,
      updatedAt: userNotFormatted.updatedAt,
    };
    return user;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch user!");
  }
};
