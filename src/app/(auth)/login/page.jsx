import { handleGoogleLogin } from "@/lib/action";
import styles from "./login.module.css";
import Image from "next/image";
const LoginPage = async () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="/contact.png"
          alt=""
          fill
          className={styles.img}
          sizes="(max-width: 540px)"
        />
      </div>
      <div className={styles.txtContainer}>
        <h1 className={styles.title}>Inicie Fazendo o Login</h1>
        <div className={styles.connectBtn}>
          <form action={handleGoogleLogin}>
            <button>Login With Google</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
