import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const ProductDetails = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();

 
   useEffect(() => {
    const getProductDetails = async () => {
      try {
        const res = await axios.get(`https://dummyjson.com/products/${id}`);
        setProduct(res.data);
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };
    getProductDetails();
  }, [id]);
console.log(product);

  if (!product) {
    return <p className="text-center mt-10 text-lg">Loading product...</p>;
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-16 mt-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* صور المنتج */}
        <div className="flex flex-col items-center">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="w-full max-w-md rounded-2xl shadow-lg"
          />
          <div className="flex gap-3 mt-4 overflow-x-auto">
            {product.images &&
              product.images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`product-${index}`}
                  className="w-20 h-20 object-cover rounded-lg shadow cursor-pointer hover:scale-110 transition"
                />
              ))}
          </div>
        </div>

        {/* تفاصيل المنتج */}
        <div className="space-y-6">
          <h1 className="text-4xl font-extrabold text-gray-900">
            {product.title}
          </h1>
          <p className="text-lg text-gray-600">{product.description}</p>

          {/* السعر */}
          <div className="flex items-center gap-4">
            <span className="text-3xl font-bold text-blue-600">
              ${product.price}
            </span>
            {product.discountPercentage > 0 && (
              <span className="text-red-500 font-semibold">
                -{product.discountPercentage}%
              </span>
            )}
          </div>

          {/* التقييم */}
          <div className="flex items-center gap-2">
            <span className="text-yellow-500 text-lg">⭐</span>
            <span className="font-semibold">{product.rating}</span>
            <span className="text-gray-500">/ 5</span>
          </div>

          {/* الكمية */}
          <p className="text-sm text-gray-500">
            In Stock:{" "}
            <span className="font-semibold text-green-600">
              {product.stock}
            </span>
          </p>

          {/* الأزرار */}
          <div className="flex gap-4 mt-6">
            <button className="px-6 py-3 bg-blue-600 text-white rounded-xl font-bold shadow hover:bg-blue-800 transition">
              Add to Cart 🛒
            </button>
            <button className="px-6 py-3 bg-gray-200 text-gray-800 rounded-xl font-bold shadow hover:bg-gray-300 transition">
              Add to Wishlist ❤️
            </button>
          </div>

          {/* الكاتيجوري */}
          <p className="text-sm text-gray-600 mt-6">
            Category:{" "}
            <span className="font-semibold capitalize">
              {product.category}
            </span>
          </p>
          <p className="text-sm text-gray-600">
            Brand: <span className="font-semibold">{product.brand}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
