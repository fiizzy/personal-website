import Head from "next/head";
import { INextHead } from "./INextHead";

const description =
  "Fisayo Obilaja is a full-stack software engineer in Manchester, UK, building mobile, web and backend products, increasingly with AI at their core.";

export const NextHead = (props: INextHead) => {
  const title = `${props.pageTitle} | Full-stack Software Engineer`;
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta
        property="og:image"
        content={props.previewImage ?? "/og_image.png"}
      />

      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};
