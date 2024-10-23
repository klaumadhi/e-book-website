import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
import { useEffect, useState } from "react";
import { Search } from "../Sections/Search";
import { DropdownLoggedIn, DropdownLoggedOut } from "../index";
import { useCart } from "../../context";

export const Header = () => {
  const { cartList } = useCart();
  const [darkMode, setDarkMode] = useState(
    JSON.parse(localStorage.getItem("darkMode")) || false
  );
  const [searchSection, setSearchSection] = useState(false);
  const [dropDown, setDropDown] = useState(false);
  const token = JSON.parse(sessionStorage.getItem("token"));

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));

    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);
  return (
    <header>
      <nav className="bg-white dark:bg-gray-900">
        <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 py-3 mx-auto border-b border-slate-200 dark:border-b-0 md:px-6">
          <Link to="/" className="flex items-center">
            <img src={Logo} className="h-10 mr-3" alt="ProgBook Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              ProgBook
            </span>
          </Link>
          <div className="relative flex items-center">
            <span
              onClick={() => setDarkMode(!darkMode)}
              className="mr-5 text-xl text-gray-700 cursor-pointer dark:text-white bi bi-gear-wide-connected"
            ></span>
            <span
              onClick={() => setSearchSection(!searchSection)}
              className="mr-5 text-xl text-gray-700 cursor-pointer dark:text-white bi bi-search"
            ></span>
            <Link to="/cart" className="mr-5 text-gray-700 dark:text-white">
              <span className="relative text-2xl bi bi-cart-fill">
                <span className="text-white text-sm absolute -top-1 left-2.5 bg-rose-500 px-1 rounded-full ">
                  {cartList.length}
                </span>
              </span>
            </Link>
            <span
              onClick={() => setDropDown(!dropDown)}
              className="text-2xl text-gray-700 cursor-pointer bi bi-person-circle dark:text-white"
            ></span>
            {dropDown &&
              (token ? (
                <DropdownLoggedIn setDropDown={setDropDown} />
              ) : (
                <DropdownLoggedOut setDropDown={setDropDown} />
              ))}
          </div>
        </div>
      </nav>
      {searchSection && <Search setSearchSection={setSearchSection} />}
    </header>
  );
};
