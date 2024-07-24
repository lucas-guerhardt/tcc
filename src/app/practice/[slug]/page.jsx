import Image from "next/image";
import { getPost } from "@/lib/data";
import styles from "./single-exercise.module.css";

export const generateMetadata = async ({ params }) => {
  const { slug } = params;
  const post = await getPost(slug);
  return {
    title: post.title,
    description: post.desc,
  };
};

const SingleExcercisePage = async ({ params }) => {
  const { slug } = params;
  const post = await getPost(slug);
  return (
    <div className={styles.container}>
      {post.img && (
        <div className={styles.imgContainer}>
          <Image src={post.img} alt="" fill className={styles.img} />
        </div>
      )}
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post.title}</h1>
        <p className={styles.desc}>{post.desc}</p>
        {(post.slug == "permutation" && (
          <div className={styles.exampleContainer}>
            <h2 className={styles.exampleTitle}>Exemplo</h2>
            <p className={styles.exampleDesc}>
              Imagine que você tem 3 camisetas: uma azul, uma vermelha e uma
              verde. Quantas maneiras diferentes você pode vestir essas
              camisetas?
            </p>
            <p className={styles.exampleAnswer}>Resposta: 6 maneiras</p>
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
