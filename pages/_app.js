import Head from "next/head";
import Layout from "../components/Layout";
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <link rel="stylesheet" href="assets/css/bootstrap.min.css" />
        <link rel="stylesheet" href="assets/css/custom.css" />
        <link rel="stylesheet" href="assets/css/meanmenu.css" />
        <link rel="stylesheet" href="assets/css/navbar.css" />
        <link rel="stylesheet" href="assets/css/footer.css" />
        <link rel="stylesheet" href="assets/css/responsive.css" />
        <title>Hidmona Money Transfer</title>
        <link rel="icon" type="image/png" href="assets/images/favicon.png" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <script src="assets/js/jquery.min.js"></script>
      <script src="assets/js/bootstrap.bundle.min.js"></script>
      <script src="assets/js/jquery.meanmenu.js"></script>
      <script src="assets/js/owl.carousel.min.js"></script>
      <Script src="assets/js/main.js"></Script>
    </>
  );
}

export default MyApp;
