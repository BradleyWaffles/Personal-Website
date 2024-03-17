import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "../app/globals.css"; // Adjust the path as necessary for your globals.css
import { AppProps } from "next/app";
import Layout from "../components/Layout"; // Adjust the path as necessary

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
