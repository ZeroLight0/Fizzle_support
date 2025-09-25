import { useState } from "react";
import { IoCartOutline } from "react-icons/io5";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import classes from "./NavBar.module.css";
import { Link } from "react-router-dom";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center p-4 border-b-1 bg-white ">
      {/* Logo */}
      <a href="">
        <h1 className={classes.logo}>Fizzle</h1>
      </a>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-6 items-center">
        <ul className="flex gap-5 items-center">
          <li>
            <Link to="/" className={`${classes.links}`}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className={`${classes.links}`}>
              About
            </Link>
          </li>
          <li>
            <Link to="/shop" className={`${classes.links}`}>
              Shop
            </Link>
          </li>
          <li>
            <Link to="/blog" className={`${classes.links}`}>
              Blog
            </Link>
          </li>
        </ul>
        <Link
          to="/cart"
          className="hover:bg-[#ffdec2] p-2.5 flex justify-center items-center rounded-sm"
        >
          <IoCartOutline className="w-5 h-5" />
        </Link>
        <button
          className={`${classes.button} py-2.5 px-4 text-white font-[600] rounded-sm w-fit text-sm cursor-pointer`}
        >
          Contact Us
        </button>
      </div>

      {/* Mobile Hamburger Button */}
      <button
        className="md:hidden text-2xl cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <HiX /> : <HiMenuAlt3 />}
      </button>

      {/* Mobile Menu*/}
      <div
        className={`absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-center overflow-hidden transition-all duration-300 ease-in-out md:hidden ${
          isOpen ? "max-h-[500px] py-4 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col gap-4 items-center">
          <li>
            <Link
              to="/"
              className={`${classes.links}`}
              onClick={() => setIsOpen(!isOpen)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={`${classes.links}`}
              onClick={() => setIsOpen(!isOpen)}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/shop"
              className={`${classes.links}`}
              onClick={() => setIsOpen(!isOpen)}
            >
              Shop
            </Link>
          </li>
          <li>
            <Link
              to="/blog"
              className={`${classes.links}`}
              onClick={() => setIsOpen(!isOpen)}
            >
              Blog
            </Link>
          </li>
        </ul>
        <Link
          to="/cart"
          className="hover:bg-[#ffdec2] p-2 flex justify-center items-center rounded-sm"
        >
          <IoCartOutline className="w-6 h-6" />
        </Link>
        <button
          className={`${classes.button} py-2 px-4 text-white font-[600] rounded-sm w-fit cursor-pointer`}
        >
          Contact Us
        </button>
      </div>
    </nav>
  );
}

export default NavBar;
