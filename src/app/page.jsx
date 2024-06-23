import Image from "next/image";
import styles from "./homepage.module.css";

const Home = () => {
  return <div className={styles.container}>
    <div className={styles.txtContainer}>
      <h1 className={styles.title}>Você está a um sopro da clareza.</h1>
      <p className={styles.desc}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis harum, aliquid laboriosam explicabo dolor odit soluta?
      </p>
      <div className={styles.buttons}>
        <button className={styles.button}>Comece Já</button>
        <button className={styles.button}>Saiba Mais</button>
      </div>
      <div className={styles.brands}>
        <a href="https://www.linkedin.com/in/lucas-guerhardt-7a558a237/" target="_blank" rel="noopener noreferrer">
          <Image src="/linkedin.png" alt="LinkedIn" width={25} height={25} className={styles.inImg}/>
        </a>
        <a href="https://github.com/pinheiroo" target="_blank" rel="noopener noreferrer">
          <Image src="/github.png" alt="GitHub" width={25} height={25} className={styles.ghImg}/>
        </a>
      </div>
    </div>
    <div className={styles.imgContainer}>
      <Image src="/hero.gif" alt="" fill className={styles.heroImg}/>
    </div>
  </div>;
};

export default Home;