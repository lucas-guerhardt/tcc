import { connectToDatabase } from "./utils";
import { User } from "./models";
import { unstable_noStore as noStore } from "next/cache";

export const getUsers = async () => {
  try {
    connectToDatabase();
    const posts = await User.find();
    return posts;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch users");
  }
};

export const getUser = async (id) => {
  noStore();
  try {
    connectToDatabase();
    const user = await User.findById(id);
    return user;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch user!");
  }
};

export const getPosts = async () => {
  noStore();
  return [
    {
      id: 0,
      slug: "permutation",
      last_modified: "2024",
      title: "Permutação",
      description:
        "Aqui você pode praticar exercícios de permutação e aprender mais sobre o assunto",
      img: "https://images.unsplash.com/photo-1573694279179-764ff2597b5b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
};

export const getPost = async (slug) => {
  noStore();
  const posts = await getPosts();
  return posts.find((post) => post.slug === slug);
};
