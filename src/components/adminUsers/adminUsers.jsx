import { getUsers } from "@/lib/data";
import styles from "./adminUsers.module.css";
import UserCard from "./userCard/userCard";

const AdminUsers = async () => {
  const users = await getUsers();

  return (
    <div className={styles.container}>
      <h1>Usuários</h1>
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
};

export default AdminUsers;
