import Head from "next/head";
import { INextHead } from "./INextHead";

const description =
  "Fisayo is a Software Engineer that just can't get over the beauty of building products...";

export const NextHead = (props: INextHead) => {
  const title = `${props.pageTitle} | Software Engineer`;
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={props.previewImage ?? "/og_image.png"} />

      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};
