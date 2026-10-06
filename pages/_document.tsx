import { Head, Html, Main, NextScript } from "next/document";

// Runs before paint so the saved or system theme applies without a flash
const themeScript = `(function(){try{var t=localStorage.getItem("theme");if(t!=="light"&&t!=="dark"){t=window.matchMedia("(prefers-color-scheme: light)").matches?"light":"dark"}document.documentElement.dataset.theme=t}catch(e){}})()`;

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta
          name="theme-color"
          media="(prefers-color-scheme: dark)"
          content="#0d0d0d"
        />
        <meta
          name="theme-color"
          media="(prefers-color-scheme: light)"
          content="#faf9fc"
        />
      </Head>
      <body>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
