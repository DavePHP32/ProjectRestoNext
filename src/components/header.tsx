"use client"
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md font-poppins sticky top-0 z-50">
      <nav className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo Section */}
        <div className="flex items-center space-x-4">
          <img
            src="/logo.png" // Remplacez par le logo réel
            alt="Restaurant Gourmet"
            className="h-10 w-auto"
          />
          <h1 className="text-xl font-bold tracking-wide text-gray-800">
            <Link href="/">Restaurant Gourmet</Link>
          </h1>
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-8 items-center">
          {[
            { name: "Accueil", href: "/" },
            { name: "Menu", href: "/Menu" },
            { name: "À propos", href: "/about" },
            { name: "Contact", href: "/contact" },
          ].map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className="text-gray-800 text-lg font-medium hover:text-blue-600 transition duration-300 relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Call-to-Action Button */}
        <button className="bg-blue-600 text-white px-5 py-2 rounded-full font-semibold shadow-md hover:bg-blue-500 hover:shadow-lg transition duration-300">
          Réservez
        </button>
      </nav>
    </header>
  );
};

export default Header;
