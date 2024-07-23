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
        <form action="" className={styles.form}>
          <input type="text" placeholder="Nome e Sobrenome" />
          <input type="email" placeholder="Endereço de Email" />
          <input type="text" placeholder="Número de Telefone (Opcional)" />
          <textarea
            name=""
            id=""
            placeholder="Dê Sua Opinião Sobre o Site"
          ></textarea>
          <button>Enviar</button>
        </form>
      </div>
    </div>
  );
};

export default RatePage;
