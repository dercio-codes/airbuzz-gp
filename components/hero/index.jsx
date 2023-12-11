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
const navitems = ["Home", "Cigars", "Smoking", "About Us", "Accessories"];

const Hero = () => {
  return (
    <Box sx={{ background: "white" }}>
      <Box
        sx={{
          backgroundImage:
            "url(https://www.mensjournal.com/.image/c_limit%2Ccs_srgb%2Cq_auto:good%2Cw_700/MTk2MTM3Mzc3MDgwMjIyODY1/beginnercigars1.webp)",
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
            Barons Leaf{" "}
          </Typography>
          <Typography
            sx={{
              fontSize: "21px",

              textAlign: "center",
              width: "50%",
              color: "white",
            }}
          >
            {" "}
            Where discerning indiviudals indulge in the finest cigars and the
            art of refined smoking{" "}
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
            Book Now{" "}
          </Button>
        </Box>
      </Box>

      <Box sx={{ width: "90%", margin: "21px auto" }}>
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
              fontSize: "34px",
              margin: "21px 0",
            }}
          >
            {"Shop Our Popular Cigar Catalog"}
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
                      backgroundImage: `url(${product.imageURL})`,
                      backgroundSize: "contain",
                      backgroundPosition: "center",
                      margin: "21px 0",
                    }}
                  />
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Typography sx={{ fontWeight: "600", fontSize: "14px" }}>
                      {product.cigarName}
                    </Typography>
                    <Typography sx={{ fontSize: "20px", textAlign: "right" }}>
                      {" R"}
                      {product.price}
                    </Typography>
                  </Box>
                  <Typography sx={{ fontSize: "12px" }}>
                    {" "}
                    {product.company}
                  </Typography>

                  <Button
                    sx={{
                      border: "1px solid rgba(1,1,1,0.7)",
                      color: "rgba(1,1,1,0.7)",
                      borderRadius: "32px",
                      width: "100%",
                      margin: "21px auto",
                    }}
                  >
                    {" "}
                    Add To Cart{" "}
                  </Button>
                </Grid>
              );
            })}
          </Grid>
        </Box>

        <Box
          sx={{
            backgroundImage: `url("https://img.freepik.com/premium-photo/glass-whiskey-with-ice-wooden-table-steaming-cuban-cigar-bottle-whiskey-smoky-atmosphere-night-bar_250469-9147.jpg?size=626&ext=jpg&ga=GA1.1.391371561.1702252160&semt=ais")`,
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
                <Typography sx={{ fontWeight: "600", fontSize: "50px" }}>
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
              fontSize: "38px",
              width: "60%",
              textAlign: "center",
              margin: "28px auto",
              fontWeight: "600",
              color: "rgba(255,255,255,.9)",
            }}
          >
            {
              "Premium Cigars & Accessories , For Discerning Gentlemen and Ladies of Refined Taste."
            }
          </Typography>
        </Box>
        <Box data-aos="fade-up">
          <Typography
            sx={{
              fontWeight: "300",
              color: "rgba(200,200,200,.7)",
              textAlign: "center",
              fontSize: "16px",
            }}
          >
            {"Have a look at a section of what we offer"}
          </Typography>
        </Box>
        <Box
          sx={{
            width: "100px",
            height: "100px",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundImage:
              "https://img.freepik.com/free-vector/vintage-human-skull-concept_225004-1268.jpg?size=626&ext=jpg&ga=GA1.1.391371561.1702252160&semt=ais",
          }}
        />

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
    </Box>
  );
};

const companies = [
  {
    cigarName: "Padilla Reserva 1932 Robusto",
    company: "Padilla Cigars",
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

export default Hero;
