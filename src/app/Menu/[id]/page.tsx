"use client";
import React from "react";
import { useParams } from "next/navigation";
import { categories } from "@/utils/data";
import Image from "next/image";

const DishDetails: React.FC = () => {
  const { id } = useParams();

  // Recherche du plat dans toutes les catégories
  const dish = categories
    .flatMap((category) => category.dishes) // Fusionne tous les plats de toutes les catégories
    .find((dish) => dish.id === parseInt(id as string));

  // Si le plat n'existe pas
  if (!dish) {
    return (
      <main className="flex items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-3xl font-bold text-red-600">Plat non trouvé</h1>
      </main>
    );
  }

  // Affichage des détails du plat
  return (
    <main className="min-h-screen bg-gradient-to-r from-gray-50 via-white to-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Image du plat */}
        <div className="relative h-64 sm:h-96">
          <Image
            src={dish.image}
            alt={dish.name}
            layout="fill"
            objectFit="cover"
            className="rounded-t-lg"
          />
        </div>

        {/* Contenu du plat */}
        <div className="p-6 md:p-10">
          <h1 className="text-4xl font-extrabold text-gray-800">{dish.name}</h1>
          <div className="flex items-center justify-between mt-6">
            <p className="text-3xl font-bold text-green-600">{dish.price.toFixed(2)} €</p>
            <button className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg transition">
              Commander
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default DishDetails;
