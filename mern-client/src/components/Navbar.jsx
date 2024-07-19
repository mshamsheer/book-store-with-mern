import React, { useContext } from "react";
import { useEffect, useState } from "react";
import { FaBarsStaggered, FaBlog, FaXmark } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { AuthContext } from "../contact/AuthProvider";

const Navbar = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isSticy, setIsSticy] = useState(false);
  const {user}=useContext(AuthContext)

  // toggle menu
  const toggleMenu = () => {
    setIsOpenMenu(!isOpenMenu);
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticy(true);
      } else {
        setIsSticy(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.addEventListener("scroll", handleScroll);
    };
  }, []);
  // nav icons
  const navItems = [
    { link: "Home", path: "/" },
    { link: "About", path: "/about" },
    { link: "Shop", path: "/shop" },
    { link: "Sell your book", path: "/admin/dashboard" },
    
  ];
  return (
    <header className="w-full bg-transparent fixed top-0 left-0 right-0 transition-all ease-in duration-300">
      <nav className={`py-4 lg:px-24 px-4 ${isSticy ? "sticky top-0 left-0 right-0 bg-blue-100":""}`}>
        <div className="flex justify-between items-center text-base gap-8">
          {/*logo */}
          <Link
            to="/"
            className="text-2xl font-bold text-blue-700 flex items-center gap-2"
          >
            <FaBlog className="inline-block" /> Books
          </Link>

          {/*nav item for large device */}
          <ul className="space-x-12 hidden lg:flex items-center">
            {navItems.map(({ link, path }) => (
              <Link
                className="block text-base text-black uppercase cursor-pointer hover:text-blue-700"
                key={path}
                to={path}
              >
                {link}
              </Link>
            ))}
          </ul>
          {/*btn for lg devices */}

          <div>
            <button className="space-x-12 hidden lg:flex items-center">
              <FaBarsStaggered className="w-5 hover:text-blue-700" />
            </button>
          </div>
          {/*btn for lg devices */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-black focus:outline-none"
            >
              {isOpenMenu ? (
                <FaXmark className="h-5 w-5 text-black" />
              ) : (
                <FaBarsStaggered className="h-5 w-5 text-black" />
              )}
            </button>
          </div>
        </div>
        {/* nacitem for se devices*/}

        <div className={`space-y-4 px-4 mt-16 bg-blue-700 ${isOpenMenu ? "block fixed top-0 right-0 left-0":"hidden"}`}>
        {navItems.map(({ link, path }) => (
          <Link
            className="block text-base text-white uppercase cursor-pointer"
            key={path}
            to={path}
          >
            {link}
          </Link>
        ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
