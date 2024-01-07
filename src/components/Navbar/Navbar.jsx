import React from "react";
import Logo from "../../assets/food-logo.png";
import { FaCartShopping } from "react-icons/fa6";
import DarkMode from "./DarkMode";

const Menu = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "Services",
    link: "/#services",
  },
  {
    id: 3,
    name: "About",
    link: "/#about",
  },
];
const Navbar = () => {
  return (
    <>
      <div
        className="shadow-lg bg-white dark:bg-gray-900
       dark:text-white duration-200"
      >
        <div className="container ">
          <div className="flex justify-between items-center py-3 sm:py-0">
            <div>
              <a
                href="#"
                className="flex items-center gap-2 text-2xl sm:text-3xl font-bold"
              >
                <img src={Logo} alt="Foodie Zone" className="w-10" />
                Foodies
              </a>
            </div>
            <div className="flex items-center gap-4">
              <div>
                <DarkMode />
              </div>
              <ul className="hidden  sm:flex gap-4">
                {Menu.map((item) => (
                  <li
                    key={item.id}
                    className="inline-block  py-4 px-4 hover:text-primary"
                  >
                    <a href="#">{item.name}</a>
                  </li>
                ))}
              </ul>
              <button
                className="bg-gradient-to-r from-primary to-secondary text-white
                         px-4  py-1 rounded-full sm:hidden hover:scale-105 duration-300
                         flex items-center gap-2"
              >
                Order
                <FaCartShopping
                  className=" text-xl text-white
                 drop-shadow-sm cursor-pointer"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
