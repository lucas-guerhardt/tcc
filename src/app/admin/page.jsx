"use client";
import { getAuth } from "@/lib/data";
import { useRouter } from "next/navigation";
import styles from "./admin.module.css";
import { Suspense, useEffect, useState } from "react";
import AdminPosts from "@/components/adminPosts/adminPosts";
import AdminPostForm from "@/components/adminPostForm/adminPostForm";
import AdminUsers from "@/components/adminUsers/adminUsers";

const AdminPage = () => {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    getAuth().then((data) => setUser(data));
  }, []);

  useEffect(() => {
    document.title = "Admin | INSIGHT";
  }, []);

  useEffect(() => {
    if (user && !user.isAdmin) {
      router.push("/");
    }
  }, [user, router]);

  if (user === null) {
    return <p>Loading...</p>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <div className={styles.col}>
          <Suspense fallback={<div>Loading...</div>}>
            <AdminPosts />
          </Suspense>
        </div>
        <div className={styles.col}>
          <AdminPostForm />
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.col}>
          <Suspense fallback={<div>Loading...</div>}>
            <AdminUsers />
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
