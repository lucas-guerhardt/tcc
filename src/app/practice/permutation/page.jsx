import Image from "next/image";
import styles from "./permutation.module.css";
import { getPost } from "@/lib/data";

export const metadata = {
  title: "Permutação",
  description:
    "Aqui você pode praticar exercícios de permutação e aprender mais sobre o assunto",
};

const PermutationPage = async () => {
  const post = await getPost("permutation");
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
      </div>
    </div>
  );
};

export default PermutationPage;
