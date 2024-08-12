"use client";
import { createPost } from "@/lib/data";
import styles from "./adminPostForm.module.css";
import { useFormState } from "react-dom";

const AdminPostForm = async () => {
  const [state, formAction] = useFormState(createPost, undefined);
  return (
    <form action={formAction} className={styles.container}>
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
      <button>Adicionar</button>
      {state && state.error}
    </form>
  );
};

export default AdminPostForm;
