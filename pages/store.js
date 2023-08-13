import React from "react";
import { Layout } from "../components/layout";
import { Guitar } from "../components/guitar";

import Styles from "../styles/grid.module.css";

const Store = ({ guitarras }) => {
  return (
    <Layout title="Store" description="Tienda virtual, Venta de guitarras">
      <main className="contenedor">
        <h1 className="heading">Nuestra Colección</h1>

        <div className={Styles.grid}>
          {guitarras?.map((guitar) => (
            <Guitar key={guitar.id} guitar={guitar.attributes} />
          ))}
        </div>
      </main>
    </Layout>
  );
};

export default Store;

// export async function getStaticProps() {
//   const response = await fetch(`${process.env.API_URL}/guitarras?populate=*`);
//   const data = await response.json();

//   return {
//     props: {
//       guitarras: data.data,
//     },
//   };
// }

export async function getServerSideProps() {
  try {
    const response = await fetch(`${process.env.API_URL}/guitarras?populate=*`);
    const data = await response.json();

    return {
      props: {
        guitarras: data.data,
      },
    };
  } catch (error) {
    console.error("error", error);
    return {
      props: {
        guitarras: [],
      },
    };
  }
}
