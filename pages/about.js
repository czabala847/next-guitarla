import Image from "next/image";
import React from "react";
import { Layout } from "../components/layout";

import Style from "../styles/about.module.css";

const About = () => {
  return (
    <Layout
      title="About"
      description="Sobre nosotros Guitar LA, tienda de musica"
    >
      <main className="contenedor">
        <h2 className="heading">Nosotros</h2>

        <div className={Style.content}>
          <Image
            alt="sobre nosotros"
            src="/img/nosotros.jpg"
            width={1000}
            height={800}
          />
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
              assumenda dolores neque molestias ipsum sint velit harum vel,
              nostrum possimus ducimus, mollitia veritatis placeat consectetur
              accusantium quibusdam reiciendis esse eaque?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
              sapiente numquam ab, delectus perspiciatis aliquam distinctio
              autem odit odio obcaecati libero repellat quidem consectetur
              eligendi laborum? Consequatur enim facere voluptates?
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default About;
