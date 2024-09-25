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
          Está difícil visualizar? Tenha um Insight.
        </h1>
        <p className={styles.text}>
          Insight é uma aplicação destinada a auxiliar os professores a lecionar
          o conteúdo de Análise Combinatória de forma mais didática e visual. A
          aplicação foi desenvolvida com o intuito de facilitar o entendimento
          de conteúdos abstratos e de difícil visualização, como é o caso da
          Análise Combinatória. A mesma utiliza conceitos de Design Thinking e
          Design de Interação, com o objetivo de tornar a experiência do usuário
          mais agradável e intuitiva.
        </p>
      </div>
      <div className={styles.imgContainer}>
        <Image
          src="/Lightbulb-rafiki.png"
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
