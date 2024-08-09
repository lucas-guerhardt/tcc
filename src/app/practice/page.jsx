import { getPosts } from "@/lib/data";
import styles from "./practice.module.css";
import PostCard from "@/components/post-card/post-card";

export const metadata = {
  title: "Pratique",
  description:
    "Agora que você já aprendeu, é hora de praticar! Aqui você encontra exercícios para fixar o conteúdo aprendido!",
};

const PracticePage = async () => {
  const posts = await getPosts();
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
