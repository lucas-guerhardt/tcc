"use server";

import { connectToDatabase } from "./utils";
import { Post, User } from "./models";
import { unstable_noStore as noStore, revalidatePath } from "next/cache";

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

export const getUser = async ({ id }) => {
  noStore();
  try {
    connectToDatabase();
    const user = await User.findById({ id });
    return user;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch user!");
  }
};

export const updateUser = async ({ id }, formData) => {
  const { name, email, password, role } = Object.fromEntries(formData);

  try {
    connectToDatabase();
    const user = await User.findByIdAndUpdate(
      { id },
      { name, email, password, role },
      { new: true }
    );
    return user;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to update user");
  }
};

export const deleteUser = async ({ id }) => {
  try {
    connectToDatabase();
    const user = await User.findByIdAndDelete({ id });
    return user;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to delete user");
  }
};
