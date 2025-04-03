
import { useEffect } from "react";
import AboutImg from "../assets/About Img.png";
import Aos from "aos";
import "aos/dist/aos.css";
function About() {

    useEffect(() => {
      Aos.init({
        duration: 2000,
      });
    }, []);

  return (
    <div className="max-w-[1440px] mx-auto w-full px-5 py-10">
      <div data-aos='fade-right'>
        <h1 className="text-5xl font-semibold w-[260px] pb-7 lg:w-[460px]">
          Eco-Friendly Sleep Products
        </h1>
      </div>
      <div className="flex flex-col gap-20 lg:flex-row"  >
        <div className="w-[290px] leading-3 flex flex-col gap-2 lg:w-[550px]">
          <h2 data-aos='fade-right' className="text-gray-600 text-xl">
            Our factory producing fabrics and eco-bags has been supplying cotton
            fabrics to the global market for many years.
          </h2>
          <h2 data-aos='fade-right' className="text-gray-600 text-xl">
            We started our operations 17 years ago and have since gained the
            trust of our customers.
          </h2>
          <h2 data-aos='fade-right' className="text-gray-600 text-xl">
            The main goal of our company is to produce high-quality, durable,
            and eco-friendly products.
          </h2>
          <h2 data-aos='fade-right' className="text-gray-600 text-xl">
            Our production processes are entirely in line with environmental
            standards and aim to minimize harm to the environment.
          </h2>
          <h2 data-aos='fade-right' className="text-gray-600 text-xl">
            Using modern technologies, we can produce various high-quality
            cotton products.
          </h2>
          <h2 data-aos='fade-right' className="text-gray-600 text-xl">
            We also operate as the official representative of DongJu weaving
            equipment in Uzbekistan.
          </h2>
          <h2 data-aos='fade-right' className="text-gray-600 text-xl">
            Over 80 types of products are produced annually at our factory,
            ensuring high quality and stable production.
          </h2>
          <h2 data-aos='fade-right' className="text-gray-600 text-xl">
            Our enterprise operates more than 50 modern weaving machines.
          </h2>
          <h2 data-aos='fade-right' className="text-gray-600 text-xl">
            In our production processes, we ensure the release of only
            high-quality and eco-friendly products.
          </h2>
          <h2 data-aos='fade-right' className="text-gray-600 text-xl">
            In response to customer demands, we have launched the production of
            eco-friendly and modern design bags.
          </h2>
          <h2 data-aos='fade-right'  className="text-gray-600 text-xl">
            Our company is always happy to provide high-quality products and
            excellent service to its customers.
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
