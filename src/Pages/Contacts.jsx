import React, { useContext, useState } from "react";
import Mui from "../mui/Maps";
import PhoneCan from "../App/Phone";
import { useTranslation } from "react-i18next";
import { CartContext } from "../Feature/ContextProvider";

function Contacts() {
  const [phoneNumber, setPhoneNumber] = useState('');

    const { lang, setLang } = useContext(CartContext) || {
      cart: [],
      lang: "en",
      setLang: () => {},
    };
  
    const { t } = useTranslation();
  return (
    <>
      <div className="w-full mx-auto p-5 lg:max-w-[1440px]">
        <div className="flex items-center flex-col lg:flex-row gap-16">
          <div className="flex flex-col    gap-7 pt-10 lg:pt-20">
            <h1 className="font-extrabold text-4xl pb-6">{t("contacts.title")}</h1>
            <input
              type="email"
              className="w-[280px] px-5 py-5 text-xl rounded-3xl bg-gray-100 font-semibold lg:w-[550px]"
              placeholder={t("contacts.yourEmail")}
            />
            <div className="p-4">
              <PhoneCan value={phoneNumber} onChange={setPhoneNumber} />
            </div>
            <textarea
              type="text"
              className="w-[280px] h-[150px] px-5 py-5 text-xl rounded-3xl bg-gray-100 font-semibold lg:w-[550px]"
              placeholder={t("contacts.messagePlaceholder")}
            />
            <button className="px-8 py-2 text-xl bg-red-600 w-[150px]  text-white rounded-3xl font-bold lg:w-[300px] ">
            {t("contacts.send")}
            </button>
          </div>
          <div>
            <Mui />
          </div>
        </div>
        <div className="flex flex-col gap-6 items-center pt-20 px-5 lg:flex-row lg:gap-32">
          <div className="flex gap-1.5 items-center">
            <svg
              width="30"
              height="45"
              viewBox="0 0 76 103"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 0H66C71.5 0 76 4.5 76 10V70C76 75.5 71.5 80 66 80H20L0 100V10C0 4.5 4.5 0 10 0Z"
                fill="red"
              />
              <circle cx="22" cy="40" r="5" fill="white" />
              <circle cx="38" cy="40" r="5" fill="white" />
              <circle cx="54" cy="40" r="5" fill="white" />
            </svg>

            <h2 className="text-base  lg:font-bold lg:text-xl">Email: sleepnest@gmail.com</h2>
          </div>
          <div className="flex gap-1.5 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="40"
              height="30"
              fill="red"
            >
              <path d="M20.487 15.91l-3.307-.378a1.172 1.172 0 0 0-.97.335l-2.127 2.127a15.334 15.334 0 0 1-6.373-6.373l2.127-2.127c.267-.267.399-.643.335-.97l-.378-3.307A1.22 1.22 0 0 0 8.362 4H4.886C3.856 4 3 4.856 3 5.886c0 10.693 8.422 19.114 19.114 19.114.978 0 1.886-.856 1.886-1.886v-3.476c0-.72-.578-1.333-1.513-1.727z" />
              <path d="M15.878 3.063a.94.94 0 0 0-.94.94c0 .512.428.94.94.94 2.347 0 4.258 1.911 4.258 4.258 0 .512.428.94.94.94s.94-.428.94-.94c0-3.38-2.758-6.138-6.138-6.138z" />
              <path d="M15.878 6.193a.94.94 0 0 0-.94.94c0 .512.428.94.94.94 1.016 0 1.888.872 1.888 1.888 0 .512.428.94.94.94s.94-.428.94-.94c0-2.048-1.72-3.768-3.768-3.768z" />
            </svg>

            <h2 className="  text-base  lg:whitespace-nowrap  lg:font-bold lg:text-xl">
              Тел: +998 94 033 72 12{" "}
              <span className="text-base whitespace-nowrap pl-4  lg:font-bold lg:text-xl">+998 91 777 73 68</span>
            </h2>
          </div>
          <div className="flex gap-1.5 items-center">
            <svg
              width="60"
              height="60"
              viewBox="0 0 150 100"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M30 40C30 25 50 10 70 10C90 10 110 25 110 40C110 55 70 80 70 80C70 80 30 55 30 40Z"
                fill="#FF5252"
              />
              <circle cx="70" cy="35" r="10" fill="white" />

              <text
                x="130"
                y="40"
                font-family="Arial"
                font-size="20"
                fill="black"
              >
              </text>
            </svg>
            <h2 className="text-base whitespace-nowrap  lg:font-bold lg:text-xl">{t("contacts.address")}</h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contacts;
