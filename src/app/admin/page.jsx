import { createPost, deletePost, getAuth } from "@/lib/data";

export const metadata = {
  title: "Admin",
  description:
    "Essa é a página de administração do site, onde você pode gerenciar usuários, posts, e outras funcionalidades!",
};

const AdminPage = () => {
  const user = getAuth();

  if (!user || !user.isAdmin) {
    return null;
  }

  return (
    <div>
      <h1>Admin Page</h1>
      <form action={createPost}>
        <input type="text" placeholder="title" name="title" />
        <input type="text" placeholder="description" name="description" />
        <input type="text" placeholder="slug" name="slug" />
        <button type="submit">Create Post</button>
      </form>
      <form action={deletePost}>
        <input type="text" placeholder="slug" name="slug" />
        <button type="submit">Delete Post</button>
      </form>
    </div>
  );
};

export default AdminPage;
