"use client";

import React, { useState, useEffect } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
const images = [
  "/images/1716804220_recette-facile-de-pizza-au-pepperoni-plaisir-gourmand-garantit.webp",
  "/images/bouf.jpg",
  "/images/tacos2.jpeg",
];

const Home: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Header />
      <main className="bg-gray-100 font-poppins">
        <section className="relative h-screen overflow-hidden">
          <div
            className="absolute inset-0 flex transition-transform duration-700 ease-in-out transform"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {images.map((image, index) => (
              <div
                key={index}
                className="h-screen w-full flex-shrink-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${image})` }}
              ></div>
            ))}
          </div>
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center text-white px-4">
            <h1 className="text-5xl font-extrabold">
              Bienvenue au Restaurant Gourmet
            </h1>
            <p className="text-lg mt-4">
              Découvrez une expérience culinaire unique dans un cadre élégant.
            </p>
            <button className="mt-6 px-6 py-3 bg-yellow-400 text-blue-800 rounded-full shadow hover:bg-yellow-300">
              Explorer le Menu
            </button>
          </div>
          <button
            onClick={handlePrev}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-75 text-black p-3 rounded-full shadow hover:bg-opacity-100"
          >
            &#8249;
          </button>
          <button
            onClick={handleNext}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-75 text-black p-3 rounded-full shadow hover:bg-opacity-100"
          >
            &#8250;
          </button>
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {images.map((_, index) => (
              <div
                key={index}
                className={`h-2 w-2 rounded-full ${
                  currentIndex === index ? "bg-yellow-400" : "bg-gray-300"
                } transition-all duration-500`}
              ></div>
            ))}
          </div>
        </section>
      </main>
    <Footer /> 

    </>

    
  );

};

export default Home;
