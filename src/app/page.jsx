"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import styles from "./homepage.module.css";

const Home = () => {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <div className={styles.txtContainer}>
        <h1 className={styles.title}>Você está a um sopro da clareza.</h1>
        <p className={styles.desc}>
          Insight é uma ferramenta para auxiliar seus estudos e te ajudar a
          esclarecer conceitos apresentados em aula.
        </p>
        <div className={styles.buttons}>
          <button
            className={styles.button}
            onClick={() => router.push("/practice")}
          >
            Comece Já
          </button>
          <button
            className={styles.button}
            onClick={() => router.push("/about")}
          >
            Saiba Mais
          </button>
        </div>
        <div className={styles.brands}>
          <a
            href="https://www.linkedin.com/in/lucas-guerhardt-7a558a237/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/linkedin.png"
              alt="LinkedIn"
              width={25}
              height={25}
              className={styles.inImg}
            />
          </a>
          <a
            href="https://github.com/lucas-guerhardt"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/github.png"
              alt="GitHub"
              width={25}
              height={25}
              className={styles.ghImg}
            />
          </a>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image
          unoptimized
          src="/hero.gif"
          alt=""
          fill
          className={styles.heroImg}
          sizes="(max-width: 1280px)"
          priority={false}
        />
      </div>
    </div>
  );
};

export default Home;
