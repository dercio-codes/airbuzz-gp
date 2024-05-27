import {
  Grid,
  Button,
  Box,
  Typography,
  TextField,
  Drawer,
} from "@mui/material";
import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import DirectionsIcon from "@mui/icons-material/Directions";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import { CartContext } from "./../../pages/_app";
import { GooSpinner } from "react-spinners-kit";
import { PropagateLoader } from "react-spinners";
import { toast } from "react-toastify";

const navitems = ["Home", "Vape", "Smoking", "About Us", "Accessories"];

const Hero = () => {
  const { cart, setCart } = React.useContext(CartContext);
  const [processing, setProcessing] = React.useState(false);

  const addToCartHandler = (product) => {
    setProcessing(true);
    const tempCart = [...cart]; // Clone the existing cart

    // Find the index of the product in the cart
    const index = tempCart.findIndex(
      (tempProduct) =>
        tempProduct.cigarName.toLowerCase().trim() ===
        product.cigarName.toLowerCase().trim(),
    );

    if (index !== -1) {
      // If the product already exists in the cart, update its quantity
      tempCart[index] = {
        ...tempCart[index],
        quantity: tempCart[index].quantity + 1,
      };
      toast.success(`Updated Quantity of ${product.cigarName}`, {
        theme: "light",
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
      });
    } else {
      // If the product is not in the cart, add it with a quantity of 1
      tempCart.push({ ...product, quantity: 1 });
      toast.success(`Added ${product.cigarName} to cart.`, {
        theme: "light",
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
      });
    }

    setCart(tempCart);
    setProcessing(false);
    console.log(tempCart);
  };

  return (
    <Box sx={{ background: "white" }}>
      <Box
        sx={{
          backgroundRepeat: "no-repeat",
          backgroundImage:
            "url(https://img.freepik.com/free-photo/vaping-device_144627-25389.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <Box
          sx={{
            background: "rgba(1,1,1,.50)",
            height: "85vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            className="logo-font"
            sx={{ fontSize: "50px", fontWeight: "600", color: "white" }}
          >
            {" "}
            Airbuzz{" "}
          </Typography>
          <Typography
            sx={{
              fontSize: "21px",

              textAlign: "center",
              width: { xs: "75%", lg: "50%" },
              color: "white",
            }}
          >
            {
              "Elevate your smoking experience with Airbuzz, where we blend innovation with tradition to bring you the finest selection of CBD-infused, premium flavoured shisha."
            }
          </Typography>
          <Button
            variant="outlined"
            sx={{
              color: "white",
              border: "1px solid white",
              padding: "12px 34px",
              margin: "12px 0",
            }}
          >
            {" "}
            Shop Now{" "}
          </Button>
        </Box>
      </Box>

      <Box
        sx={{
          width: { xs: "100%", md: "95%", lg: "90%" },
          margin: "21px auto",
        }}
      >
        <Typography
          sx={{ fontWeight: "300", textAlign: "center", fontSize: "20px" }}
        >
          {"TRENDING"}
        </Typography>

        <Box data-aos="fade-up">
          <Typography
            sx={{
              fontWeight: "600",
              textAlign: "center",
              fontSize: { xs: "21px", lg: "34px" },
              margin: "21px 0",
            }}
          >
            {"Shop Our Popular Vape Flavour Catalog"}
          </Typography>
        </Box>

        <Box data-aos="fade-right">
          <Grid container>
            {epens.map((product, index) => {
              return (
                <Grid key={index} item xs={6} md={3} sx={{ padding: "0 21px" }}>
                  <Box
                    sx={{
                      height: 250,
                      backgroundRepeat: "no-repeat",
                      backgroundImage: `url(${product.imageURL})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      margin: "21px 0",
                    }}
                  />
                  <Typography
                    sx={{
                      fontWeight: "600",
                      fontSize: "14px",
                      width: { xs: "100%", lg: "100%" },
                    }}
                    noWrap
                  >
                    {product.cigarName}
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-end",
                    }}
                  >
                    <Typography sx={{ fontSize: "12px" }}>
                      {" "}
                      {product.company}
                    </Typography>
                    <Typography sx={{ fontSize: "20px", textAlign: "right" }}>
                      {" R"}
                      {product.price}
                    </Typography>
                  </Box>

                  <Button
                    onClick={() => {
                      addToCartHandler(product);
                    }}
                    sx={{
                      border: "1px solid rgba(1,1,1,0.7)",
                      color: "rgba(1,1,1,0.7)",
                      borderRadius: "32px",
                      width: "100%",
                      margin: "21px auto",
                    }}
                  >
                    {processing ? (
                      <GooSpinner />
                    ) : (
                      <Typography>{"Add To Cart"}</Typography>
                    )}
                  </Button>
                </Grid>
              );
            })}
          </Grid>
        </Box>

        <Box data-aos="fade-up">
          <Typography
            sx={{
              fontWeight: "600",
              textAlign: "center",
              fontSize: { xs: "21px", lg: "34px" },

              margin: "21px 0",
            }}
          >
            {"Shop Our Popular Cigar Accessories"}
          </Typography>
        </Box>
        <Box data-aos="fade-right">
          <Grid container>
            {products.map((product, index) => {
              return (
                <Grid key={index} item xs={6} md={3} sx={{ padding: "0 21px" }}>
                  <Box
                    sx={{
                      height: 250,
                      backgroundRepeat: "no-repeat",
                      backgroundImage: `url(${product.imageURL})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      margin: "21px 0",
                    }}
                  />
                  <Typography
                    sx={{
                      fontWeight: "600",
                      fontSize: "14px",
                      width: { xs: "100%", lg: "100%" },
                    }}
                    noWrap
                  >
                    {product.cigarName}
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Typography sx={{ fontSize: "12px", width: "50%" }}>
                      {" "}
                      {product.company}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "18px",
                        fontWeight: "600",
                        textAlign: "right",
                      }}
                    >
                      {" R"}
                      {product.price}
                    </Typography>
                  </Box>

                  <Button
                    onClick={() => {
                      addToCartHandler(product);
                    }}
                    sx={{
                      border: "1px solid rgba(1,1,1,0.7)",
                      color: "rgba(1,1,1,0.7)",
                      borderRadius: "32px",
                      width: "100%",
                      margin: "21px auto",
                    }}
                  >
                    {processing ? (
                      <GooSpinner />
                    ) : (
                      <Typography>{"Add To Cart"}</Typography>
                    )}
                  </Button>
                </Grid>
              );
            })}
          </Grid>
        </Box>

        <Box data-aos="fade-up">
          <Typography
            sx={{
              fontWeight: "600",
              textAlign: "center",
              fontSize: { xs: "21px", lg: "34px" },
              margin: "21px 0",
            }}
          >
            {"Shop Our Popular Vapes"}
          </Typography>
        </Box>

        <Box data-aos="fade-down">
          <Grid container>
            {accessosries.map((product, index) => {
              return (
                <Grid key={index} item xs={6} md={3} sx={{ padding: "0 12px" }}>
                  <Box
                    sx={{
                      height: 250,
                      backgroundRepeat: "no-repeat",
                      backgroundImage: `url(${product.imageURL})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      margin: "21px 0",
                    }}
                  />
                  <Typography
                    sx={{
                      fontWeight: "600",
                      fontSize: "14px",
                      width: { xs: "100%", lg: "100%" },
                    }}
                    noWrap
                  >
                    {product.cigarName}
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-end",
                      p: "0",
                    }}
                  >
                    <Typography sx={{ fontSize: "12px" }}>
                      {" "}
                      {product.company}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "20px",
                        margin: "6px 0 0 0",
                        padding: "0",
                        fontWeight: "600",
                        textAlign: "right",
                      }}
                    >
                      {" R"}
                      {product.price}
                    </Typography>
                  </Box>

                  <Button
                    onClick={() => {
                      addToCartHandler(product);
                    }}
                    sx={{
                      border: "1px solid rgba(1,1,1,0.7)",
                      color: "rgba(1,1,1,0.7)",
                      borderRadius: "32px",
                      width: "100%",
                      margin: "21px auto",
                    }}
                  >
                    {processing ? (
                      <GooSpinner />
                    ) : (
                      <Typography>{"Add To Cart"}</Typography>
                    )}
                  </Button>
                </Grid>
              );
            })}
          </Grid>
        </Box>

        <Box
          sx={{
            backgroundRepeat: "no-repeat",
            backgroundImage: `url("https://png.pngtree.com/thumb_back/fh260/background/20230713/pngtree-vibrant-vape-liquid-bottle-amidst-smoke-in-3d-render-for-vaping-image_3854385.jpg")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
            height: "50vh",
          }}
        >
          <Box
            sx={{
              background: "rgba(1,1,1,.75)",
              height: "50vh",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box data-aos="fade-up">
              <Box sx={{ display: "flex", width: "75%" }}>
                <Typography
                  sx={{ fontWeight: "600", fontSize: "50px", color: "#BE9C22" }}
                >
                  {"10%"}
                </Typography>
                <Typography
                  sx={{
                    fontSize: "55px",
                    fontWeight: "600",
                    margin: "0 12px",
                    color: "white",
                  }}
                >
                  {"OFF"}
                </Typography>
                <br />
              </Box>
              <Box sx={{ display: "flex", width: "75%" }}>
                <Typography
                  sx={{
                    fontSize: "30px",
                    fontWeight: "300",
                    margin: "0 12px",
                    color: "white",
                  }}
                >
                  {"Make the most of your #scandlexperience"}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          background: "#1E1A19",
          minHeight: "100vh",
          margin: "32px 0",
          padding: "32px 0",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box data-aos="fade-up">
          <Typography
            sx={{
              fontWeight: "300",
              color: "rgba(200,200,200,.7)",

              textAlign: "center",
              fontSize: "20px",
            }}
          >
            {"Crafted with excellence"}
          </Typography>
        </Box>
        <Box data-aos="fade-up">
          <Typography
            sx={{
              fontSize: { xs: "21px", lg: "38px" },
              width: { xs: "90%", lg: "60%" },
              textAlign: "center",
              margin: "28px auto",
              fontWeight: "600",
              color: "rgba(255,255,255,.9)",
            }}
          >
            {"Exquisite Shisha & Accessories for Connoisseurs of Distinction"}
          </Typography>
        </Box>

        <Box
          sx={{
            width: { xs: "80%", lg: "50%" },
            minHeight: "50vh",
            background: "",
          }}
        >
          <Grid container>
            {companies.map((product, index) => {
              return (
                <Grid
                  key={index}
                  item
                  xs={12}
                  sm={5.5}
                  md={5.5}
                  sx={{
                    padding: "12px",
                    background: "rgba(255,255,255,1)",
                    margin: "32px auto",
                  }}
                >
                  <Box data-aos="zoom-in">
                    <Box
                      sx={{
                        height: 200,
                        backgroundRepeat: "no-repeat",
                        backgroundImage: `url(${product.imageURL})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        margin: "12px auto",
                      }}
                    />
                  </Box>

                  <Box data-aos="fade-down">
                    <Typography
                      sx={{
                        fontWeight: "600",
                        fontSize: "16px",
                        textAlign: "center",
                        margin: "12px 0",
                      }}
                      noWrap
                    >
                      {product.cigarName}
                    </Typography>
                  </Box>

                  <Box data-aos="fade-up">
                    <Typography
                      sx={{
                        fontSize: "13px",
                        textAlign: "center",
                        color: "rgba(1,1,1,.7)",
                      }}
                    >
                      {" "}
                      {product.description}
                    </Typography>
                  </Box>
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </Box>

      <Box data-aos="fade-up">
        <Typography
          className="logo-font"
          sx={{
            fontSize: { xs: "18px", lg: "30px" },
            fontWeight: "600",
            color: "#111",
            margin: "32px 0",
            textAlign: "center",
          }}
        >
          {" "}
          Vapes and Smoking Accessories{" "}
        </Typography>
      </Box>

      <Box
        sx={{
          margin: "0 auto",
          minHeight: { xs: "250px", lg: "300px" },
          background: "#F68585",
          width: "90%",
          display: "flex",
          flexDirection: { xs: "column", lg: "row" },
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            backgroundImage: "url(/vape-1.png)",
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            margin: "auto auto",
            width: { xs: "100%", lg: "200px" },
            height: { xs: "250px", lg: "250px" },
          }}
        />
        <Box
          sx={{
            // background: "rgba(1,1,1,.50)",
            width: { xs: "100%", lg: "65%" },
            display: "flex",
            height: { xs: "250px", lg: "300px" },
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "center",
            padding: "21px",
          }}
        >
          <Typography
            className="logo-font"
            sx={{
              fontSize: { xs: "18px", lg: "30px" },
              fontWeight: "600",
              color: "white",
              textAlign: "left",
            }}
          >
            {" "}
            AirBuzz{" "}
          </Typography>
          <Typography
            sx={{
              fontSize: "16px",
              textAlign: "left",
              width: { xs: "100%" },
              color: "white",
            }}
          >
            {" "}
            Where discerning indiviudals indulge in the finest Vape and the art
            of refined smoking{" "}
          </Typography>
          <Button
            variant="outlined"
            sx={{
              color: "white",
              border: "1px solid white",
              padding: "12px 34px",
              margin: "12px 0",
            }}
          >
            {" "}
            Shop Now{" "}
          </Button>
        </Box>
      </Box>

      <Box sx={{ margin: "auto auto", width: "90%" }}>
        <Grid container>
          <Grid
            item
            xs={12}
            lg={6}
            sx={{
              padding: { xs: "0", lg: "21px 12px 0 0" },
              margin: { xs: "12px 0", lg: "0 auto" },
            }}
          >
            <Box
              sx={{
                margin: "0 auto",
                minHeight: { xs: "250px", lg: "300px" },
                // background: "#F68585",
                backgroundImage: "url(/vape-2.png)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                width: "100%",
                display: "flex",
                flexDirection: { xs: "column", lg: "row" },
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  height: "100%",
                  background: "rgba(1,1,1,.5)",
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                    height: "100%",
                    background: "rgba(236,187,98,.3)",
                  }}
                >
                  <Box
                    sx={{
                      // background: "rgba(1,1,1,.50)",
                      width: { xs: "100%", lg: "65%" },
                      display: "flex",
                      height: { xs: "300px", lg: "300px" },
                      flexDirection: "column",
                      alignItems: "flex-start",
                      justifyContent: "center",
                      padding: "21px",
                    }}
                  >
                    <Typography
                      className="logo-font"
                      sx={{
                        fontSize: { xs: "18px", lg: "30px" },
                        fontWeight: "600",
                        color: "white",
                        textAlign: "left",
                      }}
                    >
                      {" "}
                      Shop Premium Disposables{" "}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "16px",
                        textAlign: "left",
                        width: { xs: "100%" },
                        color: "white",
                      }}
                    >
                      {
                        "Innovative disposable vapes with advanced technology. Consistent vapor, satisfying throat hits, and mouthwatering flavors. No messy refills"
                      }
                    </Typography>
                    <Button
                      variant="outlined"
                      sx={{
                        color: "white",
                        border: "1px solid white",
                        padding: "12px 34px",
                        margin: "12px 0",
                      }}
                    >
                      {" "}
                      Shop Now{" "}
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            lg={6}
            sx={{
              margin: { xs: "12px 0", lg: "0 auto" },
              height: "",
              padding: { xs: "0", lg: "21px 0 0 12px" },
            }}
          >
            <Box
              sx={{
                margin: "0 auto",
                minHeight: { xs: "300px", lg: "300px" },
                // background: "#F68585",
                backgroundImage:
                  "url(https://deltamunchies.com/wp-content/uploads/2022/11/How-Many-Puffs-in-a-Disposable-Vape.jpg)",
                backgroundSize: "contain",
                backgroundPosition: "center",
                width: "100%",
                display: "flex",
                flexDirection: { xs: "column", lg: "row" },
                alignItems: { xs: "center", lg: "flex-end" },
                justifyContent: { xs: "center", lg: "flex-end" },
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  height: "100%",
                  background: "rgba(1,1,1,.5)",
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                    height: "100%",
                    background: "rgba(133 ,246, 133, .3 )",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-end",
                    justifyContent: "center",
                  }}
                >
                  <Box
                    sx={{
                      // background: "rgba(1,1,1,.50)",
                      width: { xs: "100%" },
                      display: "flex",
                      height: { xs: "300px", lg: "300px" },
                      flexDirection: "column",
                      alignItems: "flex-start",
                      justifyContent: "center",
                      padding: "21px",
                    }}
                  >
                    <Typography
                      className="logo-font"
                      sx={{
                        fontSize: { xs: "18px", lg: "30px" },
                        fontWeight: "600",
                        color: "white",
                        textAlign: "left",
                      }}
                    >
                      {" "}
                      Shop Vape Juice{" "}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "16px",
                        textAlign: "left",
                        width: { xs: "100%" },
                        color: "white",
                      }}
                    >
                      {
                        "Convenient and easy-to-use disposable vapes for on-the-go enjoyment. Compact, lightweight, and maintenance-free. Try them today"
                      }
                    </Typography>
                    <Button
                      variant="outlined"
                      sx={{
                        color: "white",
                        border: "1px solid white",
                        padding: "12px 34px",
                        margin: "12px 0",
                      }}
                    >
                      {" "}
                      Shop Now{" "}
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Box>
            {/* <Box
              sx={{
                margin: "0 auto",
                minHeight: { xs:'250px', lg:"300px"},
                background: "#85F685",
                width: "100%",
                display: "flex",
                flexDirection: { xs: "column", lg: "row" },
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Box
                sx={{
                  backgroundImage: "url(/vape-1.png)",
                  backgroundSize: "contain",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  margin: "auto auto",
                  width: { xs: "100%", lg: "200px" },
                  height: { xs: "250px", lg: "250px" },
                }}
              />
              <Box
                sx={{
                  // background: "rgba(1,1,1,.50)",
                  width: { xs: "100%", lg: "65%" },
                  display: "flex",
                  height: { xs:'250px', lg:"300px"},
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "center",
                  padding: "21px",
                }}
              >
                <Typography
                  className="logo-font"
                  sx={{
                    fontSize: { xs: "18px", lg: "30px" },
                    fontWeight: "600",
                    color: "white",
                    textAlign: "left",
                  }}
                >
                  {" "}
                  AirBuzz{" "}
                </Typography>
                <Typography
                  sx={{
                    fontSize: "16px",
                    textAlign: "left",
                    width: { xs: "100%" },
                    color: "white",
                  }}
                >
                  {" "}
                  Where discerning indiviudals indulge in the finest Vape and
                  the art of refined smoking{" "}
                </Typography>
                <Button
                  variant="outlined"
                  sx={{
                    color: "white",
                    border: "1px solid white",
                    padding: "12px 34px",
                    margin: "12px 0",
                  }}
                >
                  {" "}
                  Shop Now{" "}
                </Button>
              </Box>
            </Box> */}
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{
          margin: "21px auto",
          minHeight: { xs: "250px", lg: "300px" },
          background: "#8585F6",
          width: "90%",
          display: "flex",
          flexDirection: { xs: "column", lg: "row" },
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            backgroundImage: "url(/vape-1.png)",
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            margin: "auto auto",
            width: { xs: "100%", lg: "200px" },
            height: { xs: "250px", lg: "250px" },
          }}
        />
        <Box
          sx={{
            // background: "rgba(1,1,1,.50)",
            width: { xs: "100%", lg: "65%" },
            display: "flex",
            height: { xs: "250px", lg: "300px" },
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "center",
            padding: "21px",
          }}
        >
          <Typography
            className="logo-font"
            sx={{
              fontSize: { xs: "18px", lg: "30px" },
              fontWeight: "600",
              color: "white",
              textAlign: "left",
            }}
          >
            {" "}
            AirBuzz{" "}
          </Typography>
          <Typography
            sx={{
              fontSize: "16px",
              textAlign: "left",
              width: { xs: "100%" },
              color: "white",
            }}
          >
            {" "}
            Premium disposable vapes for smooth and flavorful hits. Long-lasting
            battery and enticing flavors. Great for beginners and experienced
            vapers{" "}
          </Typography>
          <Button
            variant="outlined"
            sx={{
              color: "white",
              border: "1px solid white",
              padding: "12px 34px",
              margin: "12px 0",
            }}
          >
            {" "}
            Shop Now{" "}
          </Button>
        </Box>
      </Box>

      <Box
        sx={{
          minHeight: "150px",
          background: "#1E1A19",
          padding: "32px 0",
        }}
      >
        <Typography
          className="logo-font"
          sx={{
            fontSize: { xs: "28px", lg: "28px" },
            fontWeight: "600",
            margin: "21px auto",
            color: "#eee",
            textAlign: "center",
          }}
        >
          {" "}
          AirBuzz{" "}
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            width: { xs: "100%", lg: "90%" },
            margin: "0 auto",
            justifyContent: "space-evenly",
            flexDirection: { xs: "column", lg: "row" },
            color: "#eee",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <TextField
              sx={{ margin: "12px 0" }}
              // helperText="Fill in this form to join our mailing list."
            />
            <Button
              sx={{
                background: "#111",
                color: "#eee",
                height: "100%",
                padding: "16px 0",
                // marginBottom: "6px",
              }}
            >
              Submit
            </Button>
          </Box>
          <Typography sx={{ margin: "6px 0" }}>
            Copyright 2023 Atomus Dev
          </Typography>
          <Typography sx={{ margin: "6px 0" }}>Privacy Policy</Typography>
          <Typography sx={{ margin: "6px 0" }}>Terns and Conditions</Typography>
        </Box>
      </Box>
    </Box>
  );
};

const companies = [
  {
    cigarName: "Padilla Reserva 1932 Robusto",
    company: "Padilla Vape",
    imageURL: "/shihsa-image.jpg",
    description:
      "Experience the bold power of espresso, dark chocolate, and spice with a flawlessly constructed, evenly burning Padilla Reserva 1932 Robusto.",
  },
  {
    cigarName: "Davidoff Nicaragua Toro",
    company: "Davidoff",
    imageURL: "/shihsa-blueberry.webp",
    description:
      "Unwind with the smooth, creamy delight of a Davidoff Nicaragua Toro. Aged Nicaraguan tobacco delivers notes of cedar, leather, and nuts for a truly complex and flavorful experience.",
  },
  {
    cigarName: "Oliva Serie V Melanio Maduro Robusto",
    company: "Oliva Cigar Company",
    imageURL: "/green-shisha.webp",
    description:
      "Savor the richness of a Maduro wrapper with Oliva Serie V Melanio Robusto. Notes of coffee, cocoa, and earth are enhanced by a touch of spice from the Connecticut Broadleaf wrapper.",
  },
  {
    cigarName: "Arturo Fuente OpusX Perfecxion X",
    company: "Arturo Fuente",
    imageURL: "/shisha-peach.webp",
    description:
      "Indulge in the rare and coveted Arturo Fuente OpusX Perfecxion X. Dominican tobacco aged for at least 10 years bestows a smooth and well-balanced smoke of unparalleled complexity and flavor.",
  },
];

const products = [
  {
    cigarName: "Cohiba Behike 52",
    company: "Habanos S.A.",
    price: 2500,
    imageURL: "/shihsa-image.jpg",
    // imageURL:
    //   "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSrCxDmrroeF5lkzLz8YaOoQGs3J8ZseNZglGt_LOIp0t18BJu6_wVcEMtI9_KP8rbetsNAiJb6jWeURyXL9ikI9jr7enuuGv0iVJSUM2NlMH9tXEr4Li6GT0E&usqp=CAE",
  },
  {
    cigarName: "Arturo Fuente OpusX",
    company: "Arturo Fuente",
    price: 7500,
    imageURL: "/shisha-peach.webp",

    // imageURL:
    //   "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRLSyaasIfpimVb1cZdyfMIDnjupuaubGc5R52gAoR6csXY3d752RcjwgmzXGtGH-QdCuj9gNnSfxtaOlMa55kJnyf9-QVvl_lwpNcEmjaVLkHnJRYNI8gu&usqp=CAE",
  },
  {
    cigarName: "Davidoff Winston Churchill",
    company: "Davidoff",
    price: 4500,
    imageURL: "/shihsa-blueberry.webp",
    // imageURL:
    //   "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSAzv4qmYjwmg0lW-0Dyl7TxEL8cNbrkz86TGr_7Nu3Am0izF1PqKcxkr3O52yaO6szJscSoXH1bVg_mzeQo7JUDsl_N_zvcUlhxH-ayec&usqp=CAE",
  },
  {
    cigarName: "Montecristo No. 2",
    company: "Habanos S.A.",
    price: 30000,
    imageURL: "/green-shisha.webp",

    // imageURL:
    //   "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQ4pGztEwk9_W7AcD5g8C4yYTCWda8SLvZy5ElKupm4NB3eX3rRylTkLHEokHl_oyYpI6kj_vAgJHuUq7z-xImWfS-AmSpLjOd5VgYKSlxa7l1yU37hQ63Qlw&usqp=CAE",
  },
];

const epens = [
  {
    cigarName: "Prime 8000 Vape",
    company: "Habanos S.A.",
    price: 350,
    imageURL:
      "data:image/jpeg;base64,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",
    // "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSrCxDmrroeF5lkzLz8YaOoQGs3J8ZseNZglGt_LOIp0t18BJu6_wVcEMtI9_KP8rbetsNAiJb6jWeURyXL9ikI9jr7enuuGv0iVJSUM2NlMH9tXEr4Li6GT0E&usqp=CAE",
  },
  {
    cigarName: "Evod 2000 Vape",
    company: "Arturo Fuente",
    price: 175,
    imageURL:
      "https://www.bigdvapor.net/cdn/shop/files/UZ-SP-ALOE-GRAPE_1024x1024.png?v=1694120351",
    // "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRLSyaasIfpimVb1cZdyfMIDnjupuaubGc5R52gAoR6csXY3d752RcjwgmzXGtGH-QdCuj9gNnSfxtaOlMa55kJnyf9-QVvl_lwpNcEmjaVLkHnJRYNI8gu&usqp=CAE",
  },
  {
    cigarName: "Zone Puff 3500",
    company: "Davidoff",
    price: 250,
    imageURL:
      "https://mipod.com/cdn/shop/files/ebcreate-bc5000-zero_july2023_sampler-image_800x.png?v=1689879123",
    // "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSAzv4qmYjwmg0lW-0Dyl7TxEL8cNbrkz86TGr_7Nu3Am0izF1PqKcxkr3O52yaO6szJscSoXH1bVg_mzeQo7JUDsl_N_zvcUlhxH-ayec&usqp=CAE",
  },
  {
    cigarName: "Elfbar 3500",
    company: "Habanos S.A.",
    price: 280,
    imageURL:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwYzGDa8uMniJenpXMDnQ_zCRTS-LACYHnNg&usqp=CAU",
    // "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQ4pGztEwk9_W7AcD5g8C4yYTCWda8SLvZy5ElKupm4NB3eX3rRylTkLHEokHl_oyYpI6kj_vAgJHuUq7z-xImWfS-AmSpLjOd5VgYKSlxa7l1yU37hQ63Qlw&usqp=CAE",
  },
];

const accessosries = [
  {
    cigarName: "Cohiba Behike Stand",
    company: "Narvos A.",
    price: 200,
    imageURL: "/og-kush.webp",
    // imageURL:
    //   " https://jjcale.co.za/wp-content/uploads/2021/06/Cigar-Ashtrays.jpg",
    // "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSrCxDmrroeF5lkzLz8YaOoQGs3J8ZseNZglGt_LOIp0t18BJu6_wVcEMtI9_KP8rbetsNAiJb6jWeURyXL9ikI9jr7enuuGv0iVJSUM2NlMH9tXEr4Li6GT0E&usqp=CAE",
  },
  {
    cigarName: "Arturo OpusX Homider",
    company: "Arturo Fuente",
    price: 750,
    imageURL: "/of-puff.jpeg",

    // imageURL:
    //   "https://images.pexels.com/photos/14017010/pexels-photo-14017010.jpeg?auto=compress&cs=tinysrgb&w=600",
    // "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRLSyaasIfpimVb1cZdyfMIDnjupuaubGc5R52gAoR6csXY3d752RcjwgmzXGtGH-QdCuj9gNnSfxtaOlMa55kJnyf9-QVvl_lwpNcEmjaVLkHnJRYNI8gu&usqp=CAE",
  },
  {
    cigarName: "Einston Churchill",
    company: "Davidoff Glenbach",
    price: 400,
    imageURL: "/amnesia.jpeg",

    // imageURL:
    //   "data:image/jpeg;base64,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",
    // "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSAzv4qmYjwmg0lW-0Dyl7TxEL8cNbrkz86TGr_7Nu3Am0izF1PqKcxkr3O52yaO6szJscSoXH1bVg_mzeQo7JUDsl_N_zvcUlhxH-ayec&usqp=CAE",
  },
  {
    cigarName: "Montecristo No. 2",
    company: "Habanos S.A.",
    price: 30000,
    imageURL: "/strong-life.webp",

    // imageURL:
    //   "data:image/jpeg;base64,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",
    // "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQ4pGztEwk9_W7AcD5g8C4yYTCWda8SLvZy5ElKupm4NB3eX3rRylTkLHEokHl_oyYpI6kj_vAgJHuUq7z-xImWfS-AmSpLjOd5VgYKSlxa7l1yU37hQ63Qlw&usqp=CAE",
  },
];

export default Hero;
