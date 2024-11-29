import Navbar from "@/components/navbar";
import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white shadow-md p-4 rounded-lg">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-40 object-cover rounded-lg"
      />
      <h3 className="text-lg font-bold mt-2">{product.name}</h3>
      <p className="text-gray-600 text-sm mt-1">{product.description}</p>
      <p className="text-green-600 font-semibold mt-2">${product.price}</p>
      <button className="mt-4 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600">
        View Details
      </button>
    </div>
  );
};

export default function Products() {
  // Example product data
  const refurbishedProducts = [
    {
      id: 1,
      name: "Refurbished Laptop",
      description: "A high-performance laptop, fully restored.",
      price: 300,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      name: "Refurbished Smartphone",
      description: "Almost new smartphone with 6-month warranty.",
      price: 150,
      image: "https://via.placeholder.com/150",
    },
  ];

  const lightlyUsedProducts = [
    {
      id: 1,
      name: "Used Monitor",
      description: "24-inch monitor, lightly used for a few months.",
      price: 100,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      name: "Used Gaming Console",
      description: "A gaming console in great condition.",
      price: 200,
      image: "https://via.placeholder.com/150",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">

      {/* Hero Section */}
      <section
        className="flex flex-col items-center justify-center text-center bg-gradient-to-r from-green-500 to-green-700 text-white py-16 px-10"
      >
        <h1 className="text-4xl md:text-6xl font-bold">E-Waste Products</h1>
        <p className="mt-4 text-lg md:text-xl">
          Discover high-quality refurbished and lightly used products.
        </p>
      </section>

      {/* Refurbished Products Section */}
      <section className="py-16 px-10">
        <h2 className="text-3xl font-bold text-green-600">Refurbished Products</h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {refurbishedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Lightly Used Products Section */}
      <section className="py-16 px-10 bg-gray-200">
        <h2 className="text-3xl font-bold text-green-600">Lightly Used Products</h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {lightlyUsedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-700 text-white py-6 text-center">
        <p>© 2024 Waste Wise. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
