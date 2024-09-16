import RankUsers from "@/components/rankUsers/rankUsers";
import styles from "./ranking.module.css";
import { Suspense } from "react";
import Image from "next/image";

const RankingPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.users}>
        <h1 className={styles.title}>Ranking Insight</h1>
        <Suspense fallback={<div>Loading...</div>}>
          <RankUsers />
        </Suspense>
      </div>
      <div className={styles.img}>
        <Image
          src="/rankImg.png"
          alt="Ranking"
          fill
          className={styles.rankImg}
        />
      </div>
    </div>
  );
};

export default RankingPage;
