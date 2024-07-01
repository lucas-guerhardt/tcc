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
        <span className={styles.date}>post.date</span>
      </div>
      <div className={styles.bottom}>
        <h3 className={styles.title}>post.title</h3>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi officia
          minima a mollitia nam assumenda architecto, sed dolorum?
          Necessitatibus incidunt nobis doloremque similique enim eligendi sit
          neque asperiores blanditiis non.
        </p>
        <Link className={styles.link} href="/practice/post">
          Ver Mais
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
