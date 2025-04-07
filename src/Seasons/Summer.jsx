import { product } from "../mock/data.js";
import "aos/dist/aos.css";
import Aos from "aos";
import { useEffect, useState } from "react";
import { HashLink } from "react-router-hash-link";
import { Heart } from "lucide-react";

function Summer() {
  const [favorites, setFavorites] = useState([]);
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 px-4 py-10 max-w-[1440px] mx-auto">
      {product.summer.map((v) => (
        <HashLink
          data-aos="fade-down"
          to={`item/${v.id}#`}
          key={v.id}
          className="transition-all relative transform hover:scale-105 hover:text-red-600 text-center"
        >
          <img
            src={Array.isArray(v.images) ? v.images[0] : v.images}
            alt={v.title}
            className="rounded-2xl w-full h-64 object-cover shadow-md"
          />
          <h2 className="text-lg sm:text-xl font-semibold py-3">{v.title}</h2>
          <button onClick={() => toggleFavorite(product.name)}>
            <Heart
              className={`w-8 absolute top-3 cursor-pointer right-3 h-8 bg-gray-300 rounded-2xl p-1 transition-colors ${
                favorites.includes(product.name)
                  ? "text-red-500"
                  : "text-red-600"
              }`}
              fill={favorites.includes(product.name) ? "red" : "none"}
            />
          </button>
        </HashLink>
      ))}
    </div>
  );
}

export default Summer;
