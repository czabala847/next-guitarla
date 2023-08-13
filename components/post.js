import React from "react";
import Image from "next/image";
import Link from "next/link";
import Styles from "../styles/blog.module.css";
import { formatDate } from "../utils/helpers";

export const Post = ({ post }) => {
  const { contenido, imagen, titulo, url, publishedAt } = post;

  return (
    <article>
      <Image
        src={imagen.data.attributes.formats.medium.url}
        width={600}
        height={400}
        alt={`Post - ${titulo}`}
      />
      <div className={Styles.contenido}>
        <h3>{titulo}</h3>
        <p className={Styles.fecha}>{formatDate(publishedAt)}</p>
        <p className={Styles.resumen}>{contenido}</p>
        <Link className={Styles.enlace} href={`/blog/${url}`}>
          Leer post
        </Link>
      </div>
    </article>
  );
};
