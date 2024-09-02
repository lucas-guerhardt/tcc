"use client";
import { getAuth, getPosts } from "@/lib/data";
import styles from "./practice.module.css";
import PostCard from "@/components/post-card/post-card";
import { useEffect, useState } from "react";

const PracticePage = () => {
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getAuth().then((data) => setUser(data));
  }, []);

  useEffect(() => {
    getPosts().then((data) => setPosts(data));
  }, []);

  useEffect(() => {
    document.title = "Pratique | INSIGHT";
  }, []);

  if (user === null) {
    return <p>Loading...</p>;
  }

  if (!user.isStudent) {
    return (
      <div className={styles.error}>
        <h1 className={styles.title}>
          Você não tem permissão para acessar essa página!
        </h1>
        <p className={styles.text}>
          Peça para algum administrador te inscrever
        </p>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      {posts.map((post) => (
        <div key={post.id} className={styles.post}>
          <PostCard post={post} />
        </div>
      ))}
    </div>
  );
};

export default PracticePage;
