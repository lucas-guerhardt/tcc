import Image from "next/image";
import styles from "./about.module.css";

export const metadata = {
  title: "Sobre",
  description:
    "Aqui você encontra informações sobre o projeto, o que ele é, o que ele faz, e como ele pode te ajudar!",
};

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.title}>Sobre o projeto</h2>
        <h1 className={styles.biggerTitle}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt quisquam
          illum error repellendus nemo impedit deserunt numquam ratione maiores
          enim, rerum aut asperiores quas! Reiciendis maxime repellendus
          veritatis officiis placeat.
        </p>
      </div>
      <div className={styles.imgContainer}>
        <Image
          src="/about.png"
          alt="About Image"
          fill
          sizes="max-width: 100%"
          priority={true}
          className={styles.aboutImg}
        />
      </div>
    </div>
  );
};

export default AboutPage;
