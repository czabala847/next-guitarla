import React from "react";
import { Layout } from "../components/layout";
import { Post } from "../components/post";
import Styles from "../styles/grid.module.css";

const Blog = ({ posts }) => {
  console.log({ posts });

  return (
    <Layout title="Blog" description="Blog de musiquita">
      <main className="contenedor">
        <h1 className="heading">Blog</h1>
        <div className={Styles.grid}>
          {posts?.map((post) => (
            <Post key={post.id} post={post.attributes} />
          ))}
        </div>
      </main>
    </Layout>
  );
};

export default Blog;

export async function getStaticProps() {
  try {
    const response = await fetch(`${process.env.API_URL}/posts?populate=*`);
    const { data } = await response.json();

    return {
      props: {
        posts: data,
      },
    };
  } catch (error) {
    return {
      props: {
        posts: [],
      },
    };
  }
}
