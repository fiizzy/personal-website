import Head from "next/head";
import { INextHead } from "./INextHead";

export const NextHead = (props: INextHead) => {
  return (
    <Head>
      <title>{`${props.pageTitle} | Software Engineer`}</title>
      <meta
        name="description"
        content="Fisayo is a Software Engineer that just can't get over the beauty of building products..."
      />
      <meta property="og:image" content="/og_image.png" />

      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};
