import 'bootstrap/dist/css/bootstrap.css';
import '../styles/globals.css'
import '../styles/lps.css'
import '../styles/responsive.css'
import { useEffect } from "react";
import { extend } from 'jquery';
import { Component } from 'react';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);

  return <Component {...pageProps} />;
}

if (typeof window !== "undefined") {
  require("jquery");
}

export default MyApp
