import React from "react";
import Link from "next/link";
import Image from "next/image";
import { categories } from "@/utils/data";

const Menu: React.FC = () => {
  return (
    <main
      className="relative min-h-screen bg-cover bg-center font-poppins"
      style={{ backgroundImage: "url('/images/bouf.jpg')" }}
    >

      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      <div className="relative p-8">

        <h1 className="text-5xl font-extrabold text-center text-white mb-10 decoration-4 tracking-wide">
            Notre Menu
        </h1>

        {categories.map((category) => (
          <section key={category.id} className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6 pl-4 border-l-4 border-yellow-500 tracking-wide">
              {category.name}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.dishes.map((dish) => (
                <div
                  key={dish.id}
                  className="relative p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transform transition duration-300 ease-in-out"
                  style={{
                    backgroundImage: "url('/images/bouf.jpg')",
                    backgroundSize: "cover",
                    backgroundBlendMode: "overlay",
                    backgroundColor: "rgba(255, 255, 255, 0.9)",
                  }}
                >

                  <div
                    className="absolute -left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-cover rounded-full"
                    style={{
                      backgroundImage: "url('/images/bouf.jpg')",
                    }}
                  ></div>


                  <div className="overflow-hidden rounded-lg">
                    <Image
                      src={dish.image}
                      alt={dish.name}
                      width={300}
                      height={200}
                      className="rounded-md hover:scale-110 transition duration-300 ease-in-out"
                    />
                  </div>


                  <h3 className="text-2xl font-bold text-gray-800 mt-4 underline decoration-yellow-500 tracking-wide">
                    {dish.name}
                  </h3>
                  <p className="text-xl text-green-600 font-semibold mt-2">
                    {dish.price.toFixed(2)} €
                  </p>


                  <Link
                    href={`/Menu/${dish.id}`}
                    className="absolute bottom-6 right-6 px-6 py-2 bg-yellow-500 text-white font-bold rounded-full shadow-md hover:bg-yellow-600 hover:shadow-lg transition"
                  >
                    Voir les détails
                  </Link>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
};

export default Menu;
