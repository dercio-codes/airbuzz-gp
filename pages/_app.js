import "../styles/globals.css";
import AOS from "aos";
import * as React from "react";
import "aos/dist/aos.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

export const CartContext = React.createContext([]);

function MyApp({ Component, pageProps }) {
  const [cart, setCart] = React.useState([]);

  React.useEffect(() => {
    AOS.init();
  }, []);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      <Component {...pageProps} />;
      <ToastContainer toastStyle={{ backgroundColor: "#eee", color: "#111" }} />
    </CartContext.Provider>
  );
}

export default MyApp;
