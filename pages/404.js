import React from "react";
import { Layout } from "../components/layout";
import Link from "next/link";

const PageNotFound = () => {
  return (
    <Layout title="Página no encontrada">
      <div className="contenedor">
        <p className="error">Página no encontrada</p>
        <Link className="error-enlace" href="/">
          Ir a inicio
        </Link>
      </div>
    </Layout>
  );
};

export default PageNotFound;
