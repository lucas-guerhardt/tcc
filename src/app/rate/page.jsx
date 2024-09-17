import Image from "next/image";
import styles from "./rate.module.css";

export const metadata = {
  title: "Avalie-me",
  description:
    "Aqui você discorre sobre o que achou do site, o que pode ser melhorado, o que gostou, o que não gostou, enfim, sua opinião é muito importante para nós!",
};

const RatePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="/contact.png"
          alt=""
          fill
          className={styles.imgRate}
          priority={true}
          sizes="max-width: 100%"
        />
      </div>
      <div className={styles.formContainer}>
        <h1 className={styles.title}>Avalie-me</h1>
        <p className={styles.desc}>
          Aqui você discorre sobre o que achou do site, o que pode ser
          melhorado, o que gostou, o que não gostou, enfim, sua opinião é muito
          importante para nós!
        </p>
        <form action={process.env.RATE} className={styles.form}>
          <button>Clique para acessar o formulário</button>
        </form>
      </div>
    </div>
  );
};

export default RatePage;
