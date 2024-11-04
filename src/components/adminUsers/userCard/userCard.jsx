"use client";
import { deleteUser, setStudent, setAdmin } from "@/lib/data";
import styles from "./userCard.module.css";
import Image from "next/image";
import { useState } from "react";

const UserCard = ({ user }) => {
  const [isStudent, setIsStudent] = useState(user.isStudent);
  const [isAdmin, setIsAdmin] = useState(user.isAdmin);

  const handleSetStudent = async () => {
    const updatedUser = await setStudent(user.id, !isStudent);
    setIsStudent(updatedUser.isStudent);
  };

  const handleSetAdmin = async () => {
    const updatedUser = await setAdmin(user.id, !isAdmin);
    setIsAdmin(updatedUser.isAdmin);
  };

  const atualizaPagina = () => {
    window.location.reload();
  };

  return (
    <div className={styles.user}>
      <div className={styles.detail}>
        {user.img ? (
          <Image src={user.img} alt="" width={50} height={50} />
        ) : (
          <Image src="/noavatar.png" alt="" width={50} height={50} />
        )}
        <span className={styles.userUsername}>{user.username}</span>
        <span className={styles.userUsername}>{user.rankPoints}</span>
      </div>
      <div className={styles.buttons}>
        <button
          className={`${isAdmin ? styles.isAdmin : styles.active}`}
          onClick={handleSetAdmin}
        >
          {isAdmin ? "Admin" : "Tornar Admin"}
        </button>
        <button
          className={`${isStudent ? styles.isStudent : styles.active}`}
          onClick={handleSetStudent}
        >
          {isStudent ? "Inscrito" : "Inscrever"}
        </button>
        <form action={deleteUser}>
          <input type="hidden" name="id" value={user.id} />
          <button className={styles.userButton} onClick={atualizaPagina}>
            Remover
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserCard;
