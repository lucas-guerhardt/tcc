import Link from "next/link";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>lucas_guerhardt</div>
      <div className={styles.text}>
        Desenvolvido com ♥ por Lucas Guerhardt Pinheiro. Agradecimentos à
        <Link href="https://www.youtube.com/@LamaDev">{" LamaDev"}</Link>© All
        rights reserved.
      </div>
    </div>
  );
};

export default Footer;
