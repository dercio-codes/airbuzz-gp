import {
  Grid,
  Button,
  Box,
  Typography,
  TextField,
  Drawer,
  Stack,
} from "@mui/material";
import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import { PaystackButton, usePaystackPayment } from "react-paystack";
import { CartContext } from "./../../pages/_app";
import { toast } from "react-toastify";

const navitems = ["Home", "Vape", "Smoking", "Accessories", "About Us"];

const Navbar = () => {
  const [openMobile, setOpenMobile] = React.useState(false);
  const [openCart, setOpenCart] = React.useState(false);
  const [total, setTotal] = React.useState(0);
  const { cart, setCart } = React.useContext(CartContext);

  const removeFromCartHandler = (product) => {
    const tempCart = [...cart]; // Clone the existing cart

    // Find the index of the product in the cart
    const index = tempCart.findIndex(
      (tempProduct) =>
        tempProduct.cigarName.toLowerCase().trim() ===
        product.cigarName.toLowerCase().trim(),
    );

    if (index !== -1) {
      // Remove the product from tempCart using splice
      tempCart.splice(index, 1);
      toast.error(`Removed ${product.cigarName} from cart.`, {
        theme: "light",
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
      });
    }

    setCart(tempCart);
    console.log(tempCart);
  };

  const calculateTotalSum = () => {
    const totalSum = cart.reduce(
      (sum, product) => sum + product.price * product.quantity,
      0,
    );

    setTotal(totalSum);
  };

  React.useEffect(() => {
    calculateTotalSum();
  }, [cart]);

  const toggleMobileDrawer = () => {
    setOpenMobile(!openMobile);
  };
  const toggleCartDrawer = () => {
    setOpenCart(!openCart);
  };

  const config = {
    reference: new Date().getTime().toString(),
    email: "user@example.com",
    currency: "ZAR",
    amount: 20000, //Amount is in the country's lowest currency. E.g Kobo, so 20000 kobo = N200
    publicKey: "pk_test_6058257444af9947644858856f5b528456c465eb",
  };

  const initializePayment = usePaystackPayment(config);

  // you can call this function anything
  const handlePaystackSuccessAction = (reference) => {
    // Implementation for whatever you want to do with reference and after success call.
    console.log(reference);
  };

  // you can call this function anything
  const handlePaystackCloseAction = () => {
    // implementation for  whatever you want to do when the Paystack dialog closed.
    console.log("closed");
  };

  const componentProps = {
    ...config,
    text: "Paystack Button Implementation",
    onSuccess: (reference) => handlePaystackSuccessAction(reference),
    onClose: handlePaystackCloseAction,
  };

  return (
    <Box sx={{ background: "white", padding: { xs: "12px 0", lg: "0" } }}>
      <Drawer onClose={toggleMobileDrawer} open={openMobile} anchor={"left"}>
        <Box sx={{ height: "100vh", background: "white", width: "300px" }}>
          {/* <Typography
            className="logo-font"
            sx={{
              fontSize: { xs: "28px", lg: "28px" },
              fontWeight: "600",
              margin: "21px auto",
              color: "black",
              textAlign: "center",
            }}
          >
            {" "}
            AirBuzz{" "}
          </Typography> */}
          <Box
            sx={{
              width: "100px",
              height: "50px",
              backgroundImage: 'url("/logo-transparent.png")',
              backgroundSize: "contain",
              backgroundPosition: "center",
            }}
          />
          <Box
            sx={{
              width: "100%",
              margin: "auto auto",
              display: { xs: "flex", lg: "flex" },
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {navitems.map((item, index) => {
              return (
                <Box
                  key={index}
                  sx={{
                    width: "100%",
                    "&:hover": {
                      background: "rgba(1,1,1,.7)",
                      color: "#BE9C22",
                    },
                  }}
                >
                  <Typography
                    key={index}
                    sx={{
                      fontSize: "16px",
                      padding: "8px 20%",
                      margin: "1px 0",
                      textAlign: "left",
                      width: "100%",
                      color: "black",
                      "&:hover": {
                        background: "rgba(1,1,1,.7)",
                        color: "#BE9C22",
                      },
                    }}
                  >
                    {item}
                  </Typography>
                </Box>
              );
            })}
          </Box>
        </Box>
      </Drawer>

      <Drawer onClose={toggleCartDrawer} open={openCart} anchor={"right"}>
        <Box
          sx={{
            height: "100vh",
            background: "rgba(1,1,1,.1)",
            width: { md: "350px", lg: "500px" },
            position: "relative",
          }}
        >
          <Typography
            className="logo-font"
            sx={{
              fontSize: { xs: "28px", lg: "28px" },
              fontWeight: "600",
              margin: "21px auto",
              color: "black",
              textAlign: "center",
            }}
          >
            {" "}
            CART{" "}
          </Typography>
          <IconButton
            onClick={toggleCartDrawer}
            sx={{
              position: "absolute",
              top: "12px",
              right: "12px",
            }}
          >
            <CloseIcon />
          </IconButton>
          <Box
            sx={{
              width: "100%",
              margin: "auto auto",
              display: { xs: "flex", lg: "flex" },
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {cart &&
              cart.map((item, index) => {
                return (
                  <Box
                    key={index}
                    sx={{
                      width: "100%",
                      minHeight: "100px",
                      padding: "21px 12px",
                      margin: "6px 0",
                      border: "1px solid rgba(1,1,1,.2)",
                      display: "flex",
                      position: "relative",
                      "&:hover": {
                        background: "rgba(1,1,1,.2)",
                        color: "#BE9C22",
                      },
                    }}
                  >
                    <IconButton
                      onClick={() => {
                        removeFromCartHandler(item);
                      }}
                      sx={{
                        position: "absolute",
                        top: "12px",
                        right: "12px",
                      }}
                    >
                      <CloseIcon />
                    </IconButton>
                    <Box
                      sx={{
                        height: "100px",
                        width: "100px",
                        backgroundImage: `url(${item.imageURL})`,
                        backgroundSize: "contain",
                        backgroundPosition: "center",
                      }}
                    />
                    <Stack sx={{ padding: "12px", flex: 1 }}>
                      <Typography
                        sx={{
                          fontSize: { xs: "16px", lg: "16px" },
                          fontWeight: "600",
                          margin: "0px 00",
                          color: "black",
                          textAlign: "left",
                        }}
                      >
                        {" "}
                        {item.cigarName}{" "}
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: { xs: "16px", lg: "16px" },
                          fontWeight: "300",
                          margin: "6px 00",
                          color: "black",
                          textAlign: "left",
                        }}
                      >
                        {" "}
                        {item.company}{" "}
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: { xs: "16px", lg: "16px" },
                          fontWeight: "300",
                          margin: "6px 00",
                          color: "black",
                          textAlign: "left",
                        }}
                      >
                        {"R"}
                        {item.price}{" "}
                      </Typography>
                    </Stack>
                    <Box
                      sx={{
                        width: "100px",
                        height: "120px",
                        display: "flex",
                        alignItems: "center",
                        jusitifyContent: "flex-end",
                      }}
                    >
                      <TextField
                        variant={"outlined"}
                        type={"number"}
                        sx={{
                          width: "80%",
                          margin: "0 auto",
                          border: "1px solid rgba(1,1,1,.7)",
                        }}
                      />
                    </Box>
                  </Box>
                );
              })}
            <Box
              sx={{
                width: "350px",
                height: "400px",
                display: cart.length === 0 ? "flex" : "none",
                alignItems: "center",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Box
                sx={{
                  width: "150px",
                  margin: "0 auto",
                  height: "150px",
                  // backgroundImage: `url("/empty-cart.gif")`,
                  backgroundImage:
                    "url(https://cdn-icons-png.flaticon.com/128/11329/11329060.png)",
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
              ></Box>
              <Typography sx={{ margin: "21px 0" }}>
                Your Cart Is Empty
              </Typography>
              <Button
                onClick={toggleCartDrawer}
                sx={{
                  color: "white",
                  background: "#BE9C22",
                  fontSize: { xs: "10px", lg: "12px" },
                  padding: { xs: "12px 16px", lg: "12px 21px" },
                }}
              >
                {" "}
                Start Shopping{" "}
              </Button>
            </Box>
          </Box>

          <Box
            sx={{
              p: "21px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: "30px" },
                fontWeight: "600",
                margin: "6px 00",
                color: "black",
                textAlign: "left",
              }}
            >
              {"Total"}
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "30px" },
                fontWeight: "300",
                margin: "6px 00",
                color: "black",
                textAlign: "left",
              }}
            >
              {"R"}
              {total}
            </Typography>
          </Box>

          <Box
            sx={{ display: "flex", alignItems: "center", marginBottom: "32px" }}
          >
            <Button
              onClick={() => {
                initializePayment(
                  handlePaystackSuccessAction,
                  handlePaystackCloseAction,
                );
              }}
              sx={{
                background: "rgba(1,1,1,1)",
                "&:hover": {
                  color: "rgba(1,1,1,1)",
                  background: "white",
                },
                color: "white",
                width: "90%",
                margin: "0 auto 32px auto",
                padding: "21px",
              }}
            >
              {"Checkout "}
            </Button>
          </Box>
        </Box>
      </Drawer>
      <Box
        sx={{
          height: { xs: "7vh", lg: "10vh" },
          background: "",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "90%",
          margin: "auto auto",
          padding: "12px 0",
        }}
      >
        <Box
          sx={{
            height: "100%",
            flex: "0.5",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <Button
            className="rastafarian-green"
            sx={{
              color: "white",
              // background: "#BE9C22",
              fontSize: { xs: "10px", lg: "12px" },
              padding: { xs: "6px 16px", lg: "12px 21px" },
            }}
          >
            {" "}
            Call{" "}
          </Button>
        </Box>

        <Box
          sx={{
            height: "100%",
            flex: "2",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
            padding: "0 12px",
          }}
        >
          <Paper
            elevation={0}
            sx={{
              p: "2px 4px",
              display: "flex",
              alignItems: "center",
              width: { xs: "160px", md: "350px", lg: "500px" },
              border: "1px solid rgba(200,200,200,1)",
              borderRadius: "32px",
              margin: "0 auto",
            }}
          >
            <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
              <SearchIcon sx={{ fontSize: { xs: "12px", lg: "21px" } }} />
            </IconButton>
            <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
            <InputBase
              sx={{ ml: 1, flex: 1, fontSize: { xs: "12px" } }}
              placeholder="Search our premium catalog..."
              inputProps={{ "aria-label": "search google maps" }}
            />
          </Paper>
        </Box>

        <Box
          sx={{
            height: "100%",
            flex: "0.5",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
          }}
        >
          <Button
            className="rastafarian-yellow"
            sx={{
              color: "white",
              // background: "#BE9C22",
              fontSize: "12px",
              padding: { xs: "6px 16px", lg: "12px 21px" },
            }}
          >
            {" "}
            Login{" "}
          </Button>
        </Box>
      </Box>
      <Divider sx={{ width: "75%", margin: "12px auto" }} />
      <Box
        sx={{
          background: "white",
          position: "sticky",
          top: "0",
          zIndex: 999,
        }}
      >
        <Box
          sx={{
            height: { xs: "7vh", lg: "10vh" },
            width: "90%",
            margin: "auto auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              height: "100%",
              flex: "0.5",
              background: "",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-evenly",
            }}
          >
            <IconButton
              onClick={toggleMobileDrawer}
              sx={{
                display: { xs: "flex", lg: "none" },
              }}
            >
              <MenuIcon />
            </IconButton>

            {/* <Typography
              className="logo-font"
              sx={{
                display: { xs: "none", lg: "flex" },
                fontSize: { xs: "18px", lg: "28px" },
                fontWeight: "600",
                color: "black",
              }}
            >
              {" "}
              AirBuzz{" "}
            </Typography> */}
            <Box
              sx={{
                width: "150px",
                display: { xs: "none", lg: "flex" },
                height: "80px",
                backgroundImage: 'url("/logo-transparent.png")',
                backgroundSize: "contain",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            />
          </Box>
          <Box
            sx={{
              height: "100%",
              flex: "2",
              background: "",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-evenly",
            }}
          >
            {/* <Typography
              className="logo-font"
              sx={{
                display: { xs: "flex", lg: "none" },
                fontSize: { xs: "18px", lg: "28px" },
                fontWeight: "600",
                color: "black",
                textAlign: "center",
              }}
            >
              {" "}
              AirBuzz{" "}
            </Typography> */}
            <Box
              sx={{
                width: "150px",
                height: "80px",
                backgroundImage: 'url("/logo-transparent.png")',
                display: { xs: "flex", lg: "none" },
                backgroundSize: "contain",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            />
            <Box
              sx={{
                width: "80%",
                height: "100%",
                margin: "auto auto",
                display: { xs: "none", lg: "flex" },
                alignItems: "center",
                justifyContent: "space-evenly",
              }}
            >
              {navitems.map((item, index) => {
                return (
                  <Typography
                    key={index}
                    sx={{
                      fontSize: "1s6px",

                      textAlign: "center",
                      width: "50%",
                      color: "black",
                      "&:hover": {
                        color: "#BE9C22",
                      },
                    }}
                  >
                    {item}
                  </Typography>
                );
              })}
            </Box>
          </Box>
          <Box sx={{ height: "100%", flex: "0.5", background: "" }}>
            <Box
              sx={{
                width: "100%",
                height: { xs: "7vh", lg: "10vh" },
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <IconButton onClick={toggleCartDrawer}>
                <ShoppingCartOutlinedIcon sx={{ color: "rgba(1,1,1,.7)" }} />
              </IconButton>
              <IconButton>
                <Person2OutlinedIcon sx={{ color: "rgba(1,1,1,.7)" }} />
              </IconButton>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

const companies = [
  {
    cigarName: "Padilla Reserva 1932 Robusto",
    company: "Padilla Vape",
    imageURL:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyiP3NuqcQ5dlc_kHmzda1UdviAigNsozqMw&usqp=CAU",
    description:
      "Experience the bold power of espresso, dark chocolate, and spice with a flawlessly constructed, evenly burning Padilla Reserva 1932 Robusto.",
  },
  {
    cigarName: "Davidoff Nicaragua Toro",
    company: "Davidoff",
    imageURL:
      "https://images.unsplash.com/photo-1547652577-b4fe2f34d7ee?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2lnYXJ8ZW58MHx8MHx8fDA%3D",
    description:
      "Unwind with the smooth, creamy delight of a Davidoff Nicaragua Toro. Aged Nicaraguan tobacco delivers notes of cedar, leather, and nuts for a truly complex and flavorful experience.",
  },
  {
    cigarName: "Oliva Serie V Melanio Maduro Robusto",
    company: "Oliva Cigar Company",
    imageURL:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUI5XzlvRaDKB80J17pRILiaMtwrgywvvsfA&usqp=CAU",
    description:
      "Savor the richness of a Maduro wrapper with Oliva Serie V Melanio Robusto. Notes of coffee, cocoa, and earth are enhanced by a touch of spice from the Connecticut Broadleaf wrapper.",
  },
  {
    cigarName: "Arturo Fuente OpusX Perfecxion X",
    company: "Arturo Fuente",
    imageURL:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYi0pgTIKSGgpcEXl6eQtoa7Kc2EPJw319Rg&usqp=CAU",
    description:
      "Indulge in the rare and coveted Arturo Fuente OpusX Perfecxion X. Dominican tobacco aged for at least 10 years bestows a smooth and well-balanced smoke of unparalleled complexity and flavor.",
  },
];

const products = [
  {
    cigarName: "Cohiba Behike 52",
    company: "Habanos S.A.",
    price: 250,
    imageURL:
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSrCxDmrroeF5lkzLz8YaOoQGs3J8ZseNZglGt_LOIp0t18BJu6_wVcEMtI9_KP8rbetsNAiJb6jWeURyXL9ikI9jr7enuuGv0iVJSUM2NlMH9tXEr4Li6GT0E&usqp=CAE",
  },
  {
    cigarName: "Arturo Fuente OpusX",
    company: "Arturo Fuente",
    price: 75,
    imageURL:
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRLSyaasIfpimVb1cZdyfMIDnjupuaubGc5R52gAoR6csXY3d752RcjwgmzXGtGH-QdCuj9gNnSfxtaOlMa55kJnyf9-QVvl_lwpNcEmjaVLkHnJRYNI8gu&usqp=CAE",
  },
  {
    cigarName: "Davidoff Winston Churchill",
    company: "Davidoff",
    price: 45,
    imageURL:
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSAzv4qmYjwmg0lW-0Dyl7TxEL8cNbrkz86TGr_7Nu3Am0izF1PqKcxkr3O52yaO6szJscSoXH1bVg_mzeQo7JUDsl_N_zvcUlhxH-ayec&usqp=CAE",
  },
  {
    cigarName: "Montecristo No. 2",
    company: "Habanos S.A.",
    price: 30,
    imageURL:
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQ4pGztEwk9_W7AcD5g8C4yYTCWda8SLvZy5ElKupm4NB3eX3rRylTkLHEokHl_oyYpI6kj_vAgJHuUq7z-xImWfS-AmSpLjOd5VgYKSlxa7l1yU37hQ63Qlw&usqp=CAE",
  },
];

export default Navbar;
