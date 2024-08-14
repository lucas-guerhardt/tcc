"use client";
import { deleteUser, setStudent } from "@/lib/data";
import styles from "./userCard.module.css";
import Image from "next/image";
import { useState } from "react";

const UserCard = ({ user }) => {
  const [isStudent, setIsStudent] = useState(user.isStudent);

  const handleSetStudent = async () => {
    const updatedUser = await setStudent(user.id, !isStudent);
    setIsStudent(updatedUser.isStudent);
  };

  return (
    <div className={styles.user}>
      <div className={styles.detail}>
        <Image src="/noavatar.png" alt="" width={50} height={50} />
        <span className={styles.userUsername}>{user.username}</span>
      </div>
      <div className={styles.buttons}>
        <button
          className={`${isStudent ? styles.isStudent : styles.active}`}
          onClick={handleSetStudent}
        >
          {isStudent ? "Desinscrever" : "Inscrever"}
        </button>
        <form action={deleteUser}>
          <input type="hidden" name="id" value={user.id} />
          <button className={styles.userButton}>Remover</button>
        </form>
      </div>
    </div>
  );
};

export default UserCard;
