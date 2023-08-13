import { Layout } from "../components/layout";
import { Guitar } from "../components/guitar";

import Styles from "../styles/grid.module.css";
import { Post } from "../components/post";

export default function Home({ guitars, posts }) {
  return (
    <>
      <Layout
        title="Inicio"
        description="Blog de música, venta de guitarras y más"
      >
        <main className="contenedor">
          <h1 className="heading">Nuestra colección</h1>
          <div className={Styles.grid}>
            {guitars?.map((guitar) => (
              <Guitar key={guitar.id} guitar={guitar.attributes} />
            ))}
          </div>
        </main>

        <section className="contenedor">
          <h2 className="heading">Blog</h2>
          <div className={Styles.grid}>
            {posts?.map((post) => (
              <Post key={post.id} post={post.attributes} />
            ))}
          </div>
        </section>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const urlGuitars = `${process.env.API_URL}/guitarras?populate=*`;
  const urlPost = `${process.env.API_URL}/posts?populate=*`;

  try {
    const [resGuitars, resPosts] = await Promise.all([
      fetch(urlGuitars),
      fetch(urlPost),
    ]);

    const [{ data: guitars }, { data: posts }] = await Promise.all([
      resGuitars.json(),
      resPosts.json(),
    ]);

    return {
      props: {
        guitars,
        posts,
      },
    };
  } catch (error) {
    return {
      props: {
        guitars: [],
        posts: [],
      },
    };
  }
}
