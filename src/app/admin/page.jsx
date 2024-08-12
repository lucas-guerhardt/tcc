import { createPost, deletePost, getAuth } from "@/lib/data";
import { redirect } from "next/navigation";
import styles from "./admin.module.css";
import { Suspense } from "react";
import AdminPosts from "@/components/adminPosts/adminPosts";
import AdminPostForm from "@/components/adminPostForm/adminPostForm";
import AdminUsers from "@/components/adminUsers/adminUsers";

export const metadata = {
  title: "Admin",
  description:
    "Essa é a página de administração do site, onde você pode gerenciar usuários, posts, e outras funcionalidades!",
};

const AdminPage = async () => {
  const user = await getAuth();

  if (!user.isAdmin) {
    redirect("/");
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
