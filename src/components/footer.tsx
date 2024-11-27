import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-6 lg:px-20">
        {/* Section principale */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo et description */}
          <div className="flex flex-col items-center md:items-start">
            <Image
              src="/images/tacos.jpg"
              alt="Cuisine Africaine Logo"
              width={100}
              height={100}
              className="rounded-full border-4 border-yellow-500"
            />
            <h3 className="text-2xl font-bold mt-4 text-yellow-500">
              Cuisine Africaine
            </h3>
            <p className="mt-2 text-gray-400 text-center md:text-left leading-relaxed">
              Explorez les saveurs uniques de lAfrique avec des recettes
              authentiques et des traditions culinaires riches, célébrant notre
              diversité culturelle.
            </p>
          </div>


          <div>
            <h4 className="text-xl font-bold mb-4 text-yellow-500">Liens rapides</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-gray-400 hover:text-yellow-500 transition"
                >
                  Accueil
                </Link>
              </li>
              <li>
                <Link
                  href="/menu"
                  className="text-gray-400 hover:text-yellow-500 transition"
                >
                  Menu
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-400 hover:text-yellow-500 transition"
                >
                  À propos
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-yellow-500 transition"
                >
                  Contactez-nous
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-bold mb-4 text-yellow-500">Services</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/catering"
                  className="text-gray-400 hover:text-yellow-500 transition"
                >
                  Service traiteur
                </Link>
              </li>
              <li>
                <Link
                  href="/delivery"
                  className="text-gray-400 hover:text-yellow-500 transition"
                >
                  Livraison à domicile
                </Link>
              </li>
              <li>
                <Link
                  href="/events"
                  className="text-gray-400 hover:text-yellow-500 transition"
                >
                  Événements privés
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact et réseaux sociaux */}
          <div>
            <h4 className="text-xl font-bold mb-4 text-yellow-500">
              Contactez-nous
            </h4>
            <p className="text-gray-400 leading-relaxed">
              +223 123 456 789
              <br />
              info@cuisineafricaine.com
            </p>
            <div className="flex mt-6 space-x-4">
              <Link
                href="https://facebook.com"
                target="_blank"
                className="w-10 h-10 flex items-center justify-center bg-gray-700 hover:bg-yellow-500 rounded-full transition"
              >
                <i className="fab fa-facebook-f text-white"></i>
              </Link>
              <Link
                href="https://twitter.com"
                target="_blank"
                className="w-10 h-10 flex items-center justify-center bg-gray-700 hover:bg-yellow-500 rounded-full transition"
              >
                <i className="fab fa-twitter text-white"></i>
              </Link>
              <Link
                href="https://instagram.com"
                target="_blank"
                className="w-10 h-10 flex items-center justify-center bg-gray-700 hover:bg-yellow-500 rounded-full transition"
              >
                <i className="fab fa-instagram text-white"></i>
              </Link>
            </div>
          </div>
        </div>

        {/* Ligne de séparation */}
        <div className="border-t border-gray-700 mt-8 pt-6">
          <p className="text-center text-gray-400">
            © 2024 Cuisine Africaine. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
