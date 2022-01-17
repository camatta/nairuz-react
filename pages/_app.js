import 'bootstrap/dist/css/bootstrap.css';
import '../styles/globals.css'
import '../styles/responsive.css'
import '../styles/lps.css'
import { useEffect } from "react";
import WebFont from 'webfontloader';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);

  return <Component {...pageProps} />;
}

WebFont.load({
  google: {
    families: ['Montserrat:300,400,500,600,700,800', 'sans-serif']
  }
});

if (typeof window !== "undefined") {
  require("jquery");
}

if (typeof window !== "undefined") {
  // browser code
}


export default MyApp
