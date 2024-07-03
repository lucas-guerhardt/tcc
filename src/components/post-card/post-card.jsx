import Image from "next/image";
import styles from "./postCard.module.css";
import Link from "next/link";

const PostCard = ({ post }) => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          <Image
            src="https://images.pexels.com/photos/5905611/pexels-photo-5905611.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            fill
            className={styles.img}
          />
        </div>
        <span className={styles.date}>{post.id}</span>
      </div>
      <div className={styles.bottom}>
        <h3 className={styles.title}>{post.title}</h3>
        <p className={styles.desc}>{post.body}</p>
        <Link className={styles.link} href={`/practice/${post.id}`}>
          Ver Mais
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
