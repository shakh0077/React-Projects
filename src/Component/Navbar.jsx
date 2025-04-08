import React, { useContext, useEffect } from "react";
import { FaHeart } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { CartContext } from "../Feature/ContextProvider";
import WebLogo from '../assets/Logo Web.png';
import Mui from "../mui/Mui";
import { useTranslation } from "react-i18next";

function Navbar() {
  const { cart, lang, setLang } = useContext(CartContext) || {
    cart: [],
    lang: "en",
    setLang: () => {},
  };

  const { t, i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(lang);
  }, [lang, i18n]);

  return (
    <div className="sticky top-0 backdrop-blur-3xl shadow-xl z-50">
      <div className="flex mx-auto w-full max-w-[1440px] justify-between px-5 items-center py-4 text-white">
        <Link to={"/"} className="text-xl font-bold">
          <img className="w-[120px] lg:w-[170px]" src={WebLogo} alt="sleepnest" />
        </Link>

        <div className="gap-2 items-center text-2xl text-gray-500 lg:flex">
          <div className="hidden gap-8 items-center text-2xl text-gray-800 lg:flex">
            <Link className="hover:text-yellow-600 focus:text-yellow-600 transition-all font-semibold" to={"/"}>
              {t("navigation.home")}
            </Link>
            <Link className="hover:text-yellow-600 focus:text-yellow-600 transition-all font-semibold" to={"/collection"}>
              {t("navigation.collection")}
            </Link>
            <Link className="hover:text-yellow-600 focus:text-yellow-600 transition-all font-semibold" to={"/about"}>
              {t("navigation.about")}
            </Link>
            <Link className="hover:text-yellow-600 focus:text-yellow-600 transition-all font-semibold" to={"/contacts"}>
              {t("navigation.contact")}
            </Link>

            <Link
              to={"/card"}
              className="text-xl font-bold text-red-600 flex items-center gap-1"
            >
              <FaHeart /> {cart?.length || 0}
            </Link>


          </div>

          <div className="flex flex-row ml-4">
          <select
              className="bg-orange-600 cursor-pointer  text-gray-200 px-1 w-15 text-xs lg:h-10  lg:text-base outline-0 rounded-3xl"
              value={lang}
              onChange={(e) => setLang(e.target.value)}
            >
              <option className="text-gray-200" value="en">
                Eng
              </option>
              <option className="text-gray-200" value="uz">
                O'z
              </option>
              <option className="text-gray-200" value="ru">
                Ru
              </option>
            </select>
            <Mui />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
