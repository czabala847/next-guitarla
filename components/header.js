import Image from "next/image";
import React from "react";

import Link from "next/link";

export const Header = () => {
  return (
    <header>
      <div className="contenedor">
        <Image src="img/logo.svg" width={300} height={40} alt="Logo" />

        <nav>
          <Link href="/">Inicio</Link>
          <Link href="/about">Acerca de</Link>
          <Link href="/store">Tienda</Link>
          <Link href="/blog">Blog</Link>
        </nav>
      </div>
    </header>
  );
};
