"use client";
import { deletePost, getPosts } from "@/lib/data";
import styles from "./adminPosts.module.css";
import Image from "next/image";
import { useEffect, useState } from "react";

const AdminPosts = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    getPosts().then((data) => setPosts(data));
  }, []);

  const atualizaPagina = () => {
    window.location.reload();
  };

  return (
    <div className={styles.container}>
      <h1>Atividades</h1>
      {posts.map((post) => (
        <div className={styles.post} key={post.id}>
          <div className={styles.detail}>
            <Image
              src={post.img || "/PadraoIA.webp"}
              alt=""
              width={50}
              height={50}
            />
            <span className={styles.postTitle}>{post.title}</span>
          </div>
          <form action={deletePost}>
            <input type="hidden" name="id" value={post.id} />
            <button className={styles.postButton} onClick={atualizaPagina}>
              Remover
            </button>
          </form>
        </div>
      ))}
    </div>
  );
};

export default AdminPosts;
