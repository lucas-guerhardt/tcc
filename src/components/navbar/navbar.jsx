import Link from "next/link";
import Links from "./links/links";
import styles from "./navbar.module.css";
import { getAuth } from "@/lib/data";

const Navbar = async () => {
  const user = await getAuth();
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>
        insight
      </Link>
      <div>
        <Links user={user} />
      </div>
    </div>
  );
};

export default Navbar;
