import React, { useEffect, useState } from "react";
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


import axios from "axios";
import { Link } from "react-router";


 const categories = [
  "smartphones", 
  "laptops",
  "tablets", 
  "mobile-accessories"
 ]

const Products = () => {
  const [products , setProducts]= useState([])

  useEffect(()=>{
    const fetchdata = async ()=>{
      try {
        const result = await Promise.all(
          categories.map(async(category)=>{
            const res = await axios.get(`https://dummyjson.com/products/category/${category}`)
            return {[category] : res.data.products}
          })
        )

        const allproducts = Object.assign({}, ...result)
        setProducts(allproducts)
      } catch (error) {
       console.error("Error fetching products:", error);
        
      }
    }

    fetchdata()
  },[])
  console.log(products);
  
  return (
    <div className="px-4 py-10">
      {/* Section Title */}
      <h1 className="text-4xl font-extrabold text-center mb-10 tracking-wide text-gray-800">
        Our Products
      </h1>

      {/* Grid of Products */}
     <Grid container spacing={4}>
        {Object.values(products).flat().map((product, index) => (
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
              <CardActionArea component={Link} to={`/products/${product.id}`}>
                {/* Product Image */}
                <CardMedia
                  component="img"
                  height="200"
                  image={product.images[0]}   // ✅ بدل image
                  alt={product.title}        // ✅ بدل name
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
                    className="text-start"
                  >
                    {product.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "text.secondary",
                      textAlign: "center",
                      fontSize: "0.9rem",
                    }}
                    className="text-start"
                  >
                    {product.description}
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
                    textTransform: "nِone",
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
