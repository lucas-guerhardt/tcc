"use server";

import { connectToDatabase } from "./utils";
import { Post, User } from "./models";
import { unstable_noStore as revalidatePath } from "next/cache";
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
    revalidatePath("/admin");
  } catch (error) {
    console.log(error);
    throw new Error("Failed to create post");
  }
};

export const getPost = async (id) => {
  try {
    connectToDatabase();
    let post = await Post.findById({ id });
    post = {
      id: post._id.toString(),
      title: post.title,
      description: post.description,
      img: post.img,
      slug: post.slug,
      createdAt: post.createdAt,
      updatedAt: post.updatedAt,
    };
    return post;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch post");
  }
};

export const getPostBySlug = async (slug) => {
  try {
    connectToDatabase();
    let post = await Post.findOne({ slug });
    post = {
      id: post._id.toString(),
      title: post.title,
      description: post.description,
      img: post.img,
      slug: post.slug,
      createdAt: post.createdAt,
      updatedAt: post.updatedAt,
    };
    return post;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch post");
  }
};

export const getPosts = async () => {
  try {
    connectToDatabase();
    let posts = await Post.find();
    posts = posts.map((post) => ({
      id: post._id.toString(),
      title: post.title,
      description: post.description,
      img: post.img,
      slug: post.slug,
      createdAt: post.createdAt,
      updatedAt: post.updatedAt,
    }));
    return posts;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch posts");
  }
};

export const updatePost = async (prevState, formData) => {
  const { id, title, description, img, slug } = Object.fromEntries(formData);

  try {
    connectToDatabase();
    await Post.findByIdAndUpdate(
      id,
      { title, description, img, slug },
      { new: true }
    );
    revalidatePath("/practice");
    revalidatePath("/admin");
  } catch (error) {
    console.log(error);
    throw new Error("Failed to update post");
  }
};

export const deletePost = async (formData) => {
  const { id } = Object.fromEntries(formData);
  try {
    connectToDatabase();
    await Post.findByIdAndDelete(id);
    revalidatePath("/practice");
    revalidatePath("/admin");
  } catch (error) {
    console.log(error);
    throw new Error("Failed to delete post");
  }
};

export const getUsers = async () => {
  try {
    connectToDatabase();
    let users = await User.find();
    users = users.map((user) => ({
      id: user._id.toString(),
      username: user.username,
      email: user.email,
      img: user.img,
      isAdmin: user.isAdmin,
      isStudent: user.isStudent,
      rankPoints: user.rankPoints,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    }));
    return users;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch users");
  }
};

export const getUserByEmail = async (email) => {
  try {
    connectToDatabase();
    let user = await User.findOne({ email });
    user = {
      id: user._id.toString(),
      username: user.username,
      email: user.email,
      img: user.img,
      isAdmin: user.isAdmin,
      isStudent: user.isStudent,
      rankPoints: user.rankPoints,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    };
    return user;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch user!");
  }
};

export const getUser = async (id) => {
  try {
    connectToDatabase();
    let user = await User.findById(id);
    user = {
      id: user._id.toString(),
      username: user.username,
      email: user.email,
      img: user.img,
      isAdmin: user.isAdmin,
      isStudent: user.isStudent,
      rankPoints: user.rankPoints,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    };
    return user;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch user!");
  }
};

export const getAuth = async () => {
  const session = await auth();
  if (!session) return null;
  const user = await getUserByEmail(session.user.email);
  return user;
};

export const setStudent = async (id, status) => {
  try {
    connectToDatabase();
    await User.findByIdAndUpdate(id, { isStudent: status });
    const user = await getUser(id);
    revalidatePath("/admin");
    revalidatePath("/practice");
    return user;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to set student");
  }
};

export const deleteUser = async (formData) => {
  const { id } = Object.fromEntries(formData);
  try {
    connectToDatabase();
    await User.findByIdAndDelete(id);
    revalidatePath("/admin");
  } catch (error) {
    console.log(error);
    throw new Error("Failed to delete post");
  }
};
