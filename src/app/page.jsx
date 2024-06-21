import Image from "next/image";
import styles from "./homepage.module.css";

const Home = () => {
  return <div className={styles.container}>
    <div className={styles.txtContainer}>
      <h1 className={styles.title}>Você está a um sopro da clareza.</h1>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis harum, aliquid laboriosam explicabo dolor odit soluta?
        Illum excepturi ex rerum dolores? Aut asperiores ad porro adipisci? Ipsa dolor veniam rerum?
      </p>
      <div>
        <button className={styles.btn}>Saiba Mais</button>
        <button className={styles.btn}>Contato</button>
      </div>
      <div className={styles.brands}>
        <Image src="/linkedin.png" alt="" fill className={styles.brandsImg}/>
      </div>
    </div>
    <div className={styles.imgContainer}>
      <Image src="/hero.gif" alt="" fill className={styles.heroImg}/>
    </div>
  </div>;
};

export default Home;