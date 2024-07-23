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
  console.log(slug);
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
      </div>
    </div>
  );
};

export default SingleExcercisePage;
