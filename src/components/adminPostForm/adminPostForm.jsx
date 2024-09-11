"use client";
import { createPost } from "@/lib/data";
import styles from "./adminPostForm.module.css";

const AdminPostForm = () => {
  const atualizaPagina = () => {
    window.location.reload();
  };

  return (
    <form action={createPost} className={styles.container}>
      <h1>Adicionar Atividade</h1>
      <p>*Falar com desenvolvedor para mais detalhes</p>
      <input type="text" name="title" placeholder="Título" />
      <input type="text" name="slug" placeholder="Marca de Identificação" />
      <input type="text" name="img" placeholder="Imagem" />
      <textarea
        type="text"
        name="description"
        placeholder="Descrição"
        rows={10}
      />
      <button onClick={atualizaPagina}>Adicionar</button>
    </form>
  );
};

export default AdminPostForm;
