import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import Grid from '@mui/material/Grid';

import Product from '../../assets/products/p-1.jpg';
import Product1 from '../../assets/products/p-2.jpg';
import Product2 from '../../assets/products/p-3.jpg';
import Product3 from '../../assets/products/p-4.jpg';
import Product4 from '../../assets/products/p-5.jpg';
import Product6 from '../../assets/products/p-7.jpg';
import Product7 from '../../assets/products/p-9.jpg';
import Gaming from '../../assets/products/gaming.png';
import Headphone from '../../assets/products/headphone.png';
import Macbook from '../../assets/products/macbook.png';
import Smartwatch from '../../assets/products/smartwatch2-removebg-preview.png';
import Speaker from '../../assets/products/speaker.png';
import VR from '../../assets/products/vr.png';
import Watch from '../../assets/products/watch.png';

const devices = [
  { name: "Headphone", src: Product },
  { name: "Headphone", src: Product1 },
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
    <div className="px-4">
      <h1 className="text-3xl font-bold text-center mb-6 mt-5">Our Products</h1>
      <Grid  container spacing={3}>
        {[...devices, ...devices].map((device, index) => (
          <Grid  item xs={12} sm={6} md={4} lg={3} key={index}>
            <Card
              className="bg-gray-500"
              sx={{
                maxWidth: 345,
                margin: 'auto',
                overflow: 'hidden',
                borderRadius: 3,
                '&:hover .zoom-img': {
                  transform: 'scale(1.1)'
                }
              }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={device.src}
                  alt={device.name}
                  className="zoom-img"
                  sx={{
                    transition: 'transform 0.6s ease',
                    objectFit: 'cover'
                  }}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {device.name}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    High quality modern headphones with superior sound and comfort. Available in various models.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="lg" color="primary">
                  Buy Now
                </Button>
              </CardActions>
            </Card>

          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Products;



