
import { useContext, useEffect } from "react";
import AboutImg from "../assets/About Img.png";
import Aos from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";
import { CartContext } from "../Feature/ContextProvider";



function About() {

  const { lang, setLang } = useContext(CartContext) || {
    cart: [],
    lang: "en",
    setLang: () => {},
  };

  const { t } = useTranslation();

    useEffect(() => {
      Aos.init({
        duration: 1000,
      });
    }, []);

  return (
    <div className="max-w-[1440px] mx-auto w-full px-5 py-10">
      <div data-aos='fade-right'>
        <h1 className="text-5xl font-semibold w-[260px] pb-7 lg:w-[460px]">
          {t("eco_sleep.title")}
        </h1>
      </div>
      <div className="flex flex-col gap-20 lg:flex-row"  >
        <div className="w-[290px] leading-3 flex flex-col gap-2 lg:w-[550px]">
          <h2 data-aos='fade-right' className="text-gray-600 text-xl">
          {t("eco_sleep.title")}
          </h2>
          <h2 data-aos='fade-right' className="text-gray-600 text-xl">
          {t("eco_sleep.paragraph1")}
          </h2>
          <h2 data-aos='fade-right' className="text-gray-600 text-xl">
          {t("eco_sleep.paragraph2")}
          </h2>
          <h2 data-aos='fade-right' className="text-gray-600 text-xl">
          {t("eco_sleep.paragraph3")}
          </h2>
          <h2 data-aos='fade-right' className="text-gray-600 text-xl">
          {t("eco_sleep.paragraph4")}
          </h2>
          <h2 data-aos='fade-right' className="text-gray-600 text-xl">
          {t("eco_sleep.paragraph5")}
          </h2>
          <h2 data-aos='fade-right' className="text-gray-600 text-xl">
          {t("eco_sleep.paragraph6")}
          </h2>
          <h2 data-aos='fade-right' className="text-gray-600 text-xl">
          {t("eco_sleep.paragraph7")}
          </h2>
          <h2 data-aos='fade-right' className="text-gray-600 text-xl">
          {t("eco_sleep.paragraph8")}
          </h2>
          <h2 data-aos='fade-right' className="text-gray-600 text-xl">
          {t("eco_sleep.paragraph9")}
          </h2>
          <h2 data-aos='fade-right'  className="text-gray-600 text-xl">
          {t("eco_sleep.paragraph10")}
          </h2>
        </div>
        <div data-aos='fade-left'>
          <img
            src={AboutImg}
            className="rounded-2xl shadow-2xl"
            style={{ boxShadow: "5px 5px 20px 10px gray" }}
            alt="AboutImg"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
