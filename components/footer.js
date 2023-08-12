import Link from "next/link";
import React from "react";

import Styles from "../styles/footer.module.css";

export const Footer = () => {
  return (
    <footer className={Styles.footer}>
      <div className={`contenedor ${Styles.contenido}`}>
        <nav className={Styles.navigation}>
          <Link href="/">Inicio</Link>
          <Link href="/about">Acerca de</Link>
          <Link href="/store">Tienda</Link>
          <Link href="/blog">Blog</Link>
        </nav>

        <p className={Styles.copyright}>
          Todos los derechos reservados {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};
