import { Link } from "react-router-dom";
import { product } from "../mock/data.js";
import "aos/dist/aos.css";
import Aos from "aos";
import { useEffect } from "react";

function Summer() {
  useEffect(() => {
    Aos.init({
      duration: 2000,
    });
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 px-4 py-10 max-w-[1440px] mx-auto">
      {product.summer.map((v) => (
        <Link
          data-aos="fade-down"
          to={`/item/${v.id}`}
          key={v.id}
          className="transition-transform transform hover:scale-105 hover:text-red-600 text-center"
        >
          <img
            src={Array.isArray(v.images) ? v.images[0] : v.images}
            alt={v.title}
            className="rounded-2xl w-full h-64 object-cover shadow-md"
          />
          <h2 className="text-lg sm:text-xl font-semibold py-3">{v.title}</h2>
        </Link>
      ))}
    </div>
  );
}

export default Summer;
