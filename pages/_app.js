import 'bootstrap/dist/css/bootstrap.css';
import '../styles/globals.css'
import '../styles/responsive.css'
import '../styles/lps.css'
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);

  return <Component {...pageProps} />;
}

if (typeof window !== "undefined") {
  require("jquery");
}

if (typeof window !== "undefined") {
}


export default MyApp
