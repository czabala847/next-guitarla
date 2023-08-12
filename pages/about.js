import Link from "next/link";
import React from "react";
import { Layout } from "../components/layout";

const About = () => {
  return (
    <Layout
      title="About"
      description="Sobre nosotros Guitar LA, tienda de musica"
    >
      <h1>About</h1>
      <Link href="/">Ir al home</Link>
    </Layout>
  );
};

export default About;
