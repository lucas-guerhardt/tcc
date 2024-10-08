import { getPostBySlug } from "@/lib/data";
import styles from "./single-exercise.module.css";
import PermutationAnimation from "@/components/animations/permutation/permutationAnimation";

export const getData = async (slug) => {
  const res = await fetch(`http://localhost:3000/api/practice/${slug}`);
  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }
  return res.json();
};

const SingleExcercisePage = async ({ params }) => {
  const { slug } = params;
  const post = await getPostBySlug(slug);
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post.title}</h1>
        <p className={styles.desc}>{post.description}</p>
        {(post.slug == "permutation" && (
          <div>
            <PermutationAnimation />
          </div>
        )) ||
          (post.slug == "combination" && (
            <div className={styles.exampleContainer}>
              <h2 className={styles.exampleTitle}>Exemplo</h2>
              <p className={styles.exampleDesc}>
                Imagine que você tem 3 camisetas: uma azul, uma vermelha e uma
                verde. Quantas maneiras diferentes você pode vestir essas
                camisetas?
              </p>
              <p className={styles.exampleAnswer}>Resposta: 1 maneira</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default SingleExcercisePage;
