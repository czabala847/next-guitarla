import Image from "next/image";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import Styles from "../styles/header.module.css";

export const Header = () => {
  const router = useRouter();

  return (
    <header className={Styles.header}>
      <div className={`contenedor ${Styles.barra}`}>
        <Link href="/">
          <Image src="img/logo.svg" width={300} height={40} alt="Logo" />
        </Link>

        <nav className={Styles.navigation}>
          <Link
            className={router.pathname === "/" ? Styles.active : ""}
            href="/"
          >
            Inicio
          </Link>
          <Link
            className={router.pathname === "/about" ? Styles.active : ""}
            href="/about"
          >
            Acerca de
          </Link>
          <Link
            className={router.pathname === "/store" ? Styles.active : ""}
            href="/store"
          >
            Tienda
          </Link>
          <Link
            className={router.pathname === "/blog" ? Styles.active : ""}
            href="/blog"
          >
            Blog
          </Link>
        </nav>
      </div>
    </header>
  );
};
