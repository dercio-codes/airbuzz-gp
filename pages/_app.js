import "../styles/globals.css";
import AOS from "aos";
import * as React from "react";
import "aos/dist/aos.css";

function MyApp({ Component, pageProps }) {
  React.useEffect(() => {
    AOS.init();
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
