"use client";

import { getUsers } from "@/lib/data";
import styles from "./rankUsers.module.css";
import RankCard from "./rankCard/rankCard";
import { useEffect, useState } from "react";

const RankUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    document.title = "Ranking | INSIGHT";
  }, []);

  useEffect(() => {
    getUsers().then((data) => setUsers(data));
  }, []);

  useEffect(() => {
    if (users.length > 0) {
      const fbar = document.querySelector(`.${styles.fbar}`);
      const sbar = document.querySelector(`.${styles.sbar}`);
      const tbar = document.querySelector(`.${styles.tbar}`);

      if (fbar) fbar.style.width = "100%";
      if (sbar) sbar.style.width = "75%";
      if (tbar) tbar.style.width = "50%";
    }
  }, [users]);

  if (users.length === 0) {
    return <div className={styles.container}>Loading...</div>;
  }

  const subscribers = users.filter((user) => user.isStudent);
  const sortedUsers = subscribers.sort((a, b) => b.rankPoints - a.rankPoints);
  const first = sortedUsers[0];
  const second = sortedUsers[1];
  const third = sortedUsers[2];

  return (
    <div className={styles.container}>
      <div className={styles.first}>
        {first && (
          <>
            <span className={styles.fnumber}>1°</span>
            <RankCard user={first} />
            <div className={styles.fbar}></div>
          </>
        )}
      </div>
      <div className={styles.second}>
        {second && (
          <>
            <span className={styles.snumber}>2°</span>
            <RankCard user={second} />
            <div className={styles.sbar}></div>
          </>
        )}
      </div>
      <div className={styles.third}>
        {third && (
          <>
            <span className={styles.tnumber}>3°</span>
            <RankCard user={third} />
            <div className={styles.tbar}></div>
          </>
        )}
      </div>
      {sortedUsers.slice(3).map((user, index) => (
        <RankCard key={user.id} user={user} rank={index + 4} />
      ))}
    </div>
  );
};

export default RankUsers;
