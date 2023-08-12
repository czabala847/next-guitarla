import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";

import { Layout } from "../../components/layout";

import Styles from "../../styles/guitarras.module.css";

const Product = ({ guitarra }) => {
  const router = useRouter();
  console.log("en el cliente", router.query.url);

  const { descripcion, imagen, nombre, precio, url } = guitarra[0].attributes;

  return (
    <Layout title={`Guitarra ${nombre}`}>
      <div className={Styles.guitarra}>
        <Image
          src={imagen.data.attributes.url}
          alt={`Imagen guitarra ${nombre}`}
          width={600}
          height={400}
        />
        <div className={Styles.contenido}>
          <h3>{nombre}</h3>
          <p className={Styles.descripcion}>{descripcion}</p>
          <p className={Styles.precio}>${precio}</p>
        </div>
      </div>
    </Layout>
  );
};

export default Product;

// export async function getServerSideProps({ query }) {
//   console.log("en el servidor", query);

//   const response = await fetch(
//     `${process.env.API_URL}/guitarras?filters[url]=${query.url}&populate=imagen`
//   );
//   const { data } = await response.json();

//   return {
//     props: {
//       guitarra: data,
//     },
//   };
// }

export async function getStaticPaths() {
  const response = await fetch(`${process.env.API_URL}/guitarras`);
  const { data } = await response.json();

  const paths = data.map((guitar) => ({
    params: {
      url: guitar.attributes.url,
    },
  }));

  return {
    fallback: false, //si no encuentra el path devuelve un 404
    paths,
  };
}

export async function getStaticProps({ params }) {
  console.log("en el servidor", params);

  const response = await fetch(
    `${process.env.API_URL}/guitarras?filters[url]=${params.url}&populate=imagen`
  );
  const { data } = await response.json();

  return {
    props: {
      guitarra: data,
    },
  };
}
