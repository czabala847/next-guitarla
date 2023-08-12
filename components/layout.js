import Head from "next/head";
import React from "react";

export const Layout = ({ children, title = "", description = "" }) => {
  return (
    <>
      <Head>
        <title>{`GuitarLA - ${title}`}</title>
        <meta name="description" content={description} />
      </Head>
      {children}
    </>
  );
};
