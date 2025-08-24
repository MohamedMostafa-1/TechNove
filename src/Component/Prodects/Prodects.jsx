import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  CardActionArea,
  CardActions,
  Grid,
} from "@mui/material";

import Product from "../../assets/products/p-1.jpg";
import Product1 from "../../assets/products/p-2.jpg";
import Product2 from "../../assets/products/p-3.jpg";
import Product3 from "../../assets/products/p-4.jpg";
import Product4 from "../../assets/products/p-5.jpg";
import Product6 from "../../assets/products/p-7.jpg";
import Product7 from "../../assets/products/p-9.jpg";
import Gaming from "../../assets/products/gaming.png";
import Headphone from "../../assets/products/headphone.png";
import Macbook from "../../assets/products/macbook.png";
import Smartwatch from "../../assets/products/smartwatch2-removebg-preview.png";
import Speaker from "../../assets/products/speaker.png";
import VR from "../../assets/products/vr.png";
import Watch from "../../assets/products/watch.png";

const devices = [
  { name: "Headphone", src: Product },
  { name: "Watch", src: Product1 },
  { name: "Headphone", src: Product2 },
  { name: "Headphone", src: Product3 },
  { name: "Headphone", src: Product4 },
  { name: "Headphone", src: Product6 },
  { name: "Headphone", src: Product7 },
  { name: "Gaming", src: Gaming },
  { name: "Headphone", src: Headphone },
  { name: "Macbook", src: Macbook },
  { name: "Smartwatch", src: Smartwatch },
  { name: "Speaker", src: Speaker },
  { name: "VR", src: VR },
  { name: "Watch", src: Watch },
];

const Products = () => {
  return (
    <div className="px-4 py-10">
      {/* Section Title */}
      <h1 className="text-4xl font-extrabold text-center mb-10 tracking-wide text-gray-800">
        Our Products
      </h1>

      {/* Grid of Products */}
      <Grid container spacing={4}>
        {[...devices, ...devices].map((device, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <Card
              sx={{
                maxWidth: 345,
                margin: "auto",
                borderRadius: 4,
                boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "translateY(-8px)",
                  boxShadow: "0 8px 30px rgba(0,0,0,0.15)",
                },
                "&:hover .zoom-img": {
                  transform: "scale(1.1)",
                },
              }}
            >
              <CardActionArea>
                {/* Product Image */}
                <CardMedia
                  component="img"
                  height="200"
                  image={device.src}
                  alt={device.name}
                  className="zoom-img"
                  sx={{
                    transition: "transform 0.6s ease",
                    objectFit: "cover",
                  }}
                />

                {/* Product Info */}
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h6"
                    component="div"
                    sx={{
                      fontWeight: "bold",
                      color: "text.primary",
                      textAlign: "center",
                    }}
                  >
                    {device.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "text.secondary",
                      textAlign: "center",
                      fontSize: "0.9rem",
                    }}
                  >
                    High quality modern devices with superior performance,
                    stylish design, and durability.
                  </Typography>
                </CardContent>
              </CardActionArea>

              {/* Product Actions */}
              <CardActions sx={{ justifyContent: "center", pb: 2 }}>
                <Button
                  variant="contained"
                  size="medium"
                  sx={{
                    borderRadius: "9999px",
                    px: 3,
                    textTransform: "none",
                    fontWeight: "bold",
                    background:
                      "linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)",
                    "&:hover": {
                      background:
                        "linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)",
                    },
                  }}
                >
                  Buy Now
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Products;
