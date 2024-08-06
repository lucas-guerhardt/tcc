import { getPosts } from "@/lib/data";
import styles from "./practice.module.css";
import PostCard from "@/components/post-card/post-card";

export const metadata = {
  title: "Pratique",
  description:
    "Agora que você já aprendeu, é hora de praticar! Aqui você encontra exercícios para fixar o conteúdo aprendido!",
};

export const getData = async () => {
  const res = await fetch("http://localhost:3000/api/practice");
  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }
  return res.json();
};

const PracticePage = async () => {
  const posts = await getData();
  return (
    <div className={styles.container}>
      {posts.map((post) => (
        <div className={styles.post}>
          <PostCard key={post.id} post={post} />
        </div>
      ))}
    </div>
  );
};

export default PracticePage;
