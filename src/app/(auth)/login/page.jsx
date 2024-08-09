import { handleGoogleLogin } from "@/lib/action";
import styles from "./login.module.css";
import Image from "next/image";
const LoginPage = async () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="/Login-rafiki.png" alt="" fill className={styles.img} />
      </div>
      <div className={styles.txtContainer}>
        <h1 className={styles.title}>Entre sem cadastro!</h1>
        <div className={styles.connectBtn}>
          <form action={handleGoogleLogin}>
            <button className={styles.google}>Entrar com Google</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
