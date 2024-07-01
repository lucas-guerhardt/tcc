import Image from "next/image";
import styles from "./single-exercise.module.css";
const SingleExcercisePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/5905611/pexels-photo-5905611.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          fill
          className={styles.img}
        />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Title</h1>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
          esse neque laboriosam accusamus sequi corrupti harum atque ab unde
          sint, hic dolore quisquam, id exercitationem voluptatem tempore
          numquam, accusantium nemo!
        </p>
      </div>
    </div>
  );
};

export default SingleExcercisePage;
