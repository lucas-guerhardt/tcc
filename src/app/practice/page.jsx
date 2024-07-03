import styles from "./practice.module.css";
import PostCard from "@/components/post-card/post-card";

const getData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: { revalidade: 3600 },
  });
  if (!res.ok) {
    throw new Error("Something went wrong");
  }

  return res.json();
};

const PracticePage = async () => {
  const posts = await getData();
  return (
    <div className={styles.container}>
      {posts.map((post) => (
        <div className={styles.post}>
          <PostCard key={post.id} post={post} />
        </div>
      ))}
    </div>
  );
};

export default PracticePage;
