"use client";
import Image from "next/image";
import styles from "./rankCard.module.css";

const RankCard = ({ user, rank }) => {
  const displayName =
    user.username.length > 15
      ? user.username.slice(0, 12) + "..."
      : user.username;

  return (
    <div className={styles.user}>
      <div className={styles.detail}>
        {rank && <span>{rank}°</span>}
        {user.img ? (
          <Image
            className={styles.userImg}
            src={user.img}
            alt=""
            width={50}
            height={50}
          />
        ) : (
          <Image src="/noavatar.png" alt="" width={50} height={50} />
        )}
        <span className={styles.userUsername} title={user.username}>
          {displayName}
        </span>
        <span className={styles.userUsername}>{user.rankPoints} pontos</span>
      </div>
    </div>
  );
};

export default RankCard;
