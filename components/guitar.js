import Image from "next/image";
import Link from "next/link";
import React from "react";

import Styles from "../styles/guitarras.module.css";

export const Guitar = ({ guitar }) => {
  const { descripcion, imagen, nombre, precio, url } = guitar;

  return (
    <div className={Styles.guitarra}>
      <Image
        src={imagen.data.attributes.formats.medium.url}
        alt={`Imagen guitarra ${nombre}`}
        width={600}
        height={400}
      />
      <div className={Styles.contenido}>
        <h3>{nombre}</h3>
        <p className={Styles.descripcion}>{descripcion}</p>
        <p className={Styles.precio}>${precio}</p>
        <Link className={Styles.enlace} href={`/guitarras/${url}`}>
          Ver detalle
        </Link>
      </div>
    </div>
  );
};
