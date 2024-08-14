import { getAuth, getPosts } from "@/lib/data";
import styles from "./practice.module.css";
import PostCard from "@/components/post-card/post-card";

export const metadata = {
  title: "Pratique",
  description:
    "Agora que você já aprendeu, é hora de praticar! Aqui você encontra exercícios para fixar o conteúdo aprendido!",
};

const PracticePage = async () => {
  const posts = await getPosts();
  const user = await getAuth();

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
