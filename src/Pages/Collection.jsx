import { useContext, useState } from "react";
import { Heart, Search } from "lucide-react";
import KushImg2 from '../Seasons/imglar/KushImg2.jpg'
import Winter2 from '../Seasons/imglar/Winter2.jpg'
import Winter3 from '../Seasons/imglar/Winter3.jpg'
import Winter4 from '../Seasons/imglar/Winter4.jpg'
import Winter5 from '../Seasons/imglar/Winter5.jpg'
import Winter6 from '../Seasons/imglar/Winter6.jpg'
import Winter7 from '../Seasons/imglar/Winter7.jpg'
import Winter8 from '../Seasons/imglar/Winter8.jpg'
import Winter9 from '../Seasons/imglar/Winter9.jpg'
import Winter10 from '../Seasons/imglar/Winter10.jpg'


import Autumn1 from '../Seasons/imglar/Autumn1.jpg'
import Autumn2 from '../Seasons/imglar/Autumn2.jpg'
import Autumn3 from '../Seasons/imglar/Autumn3.jpg'
import Autumn4 from '../Seasons/imglar/Autumn4.jpg'
import Autumn5 from '../Seasons/imglar/Autumn5.jpg'
import Autumn6 from '../Seasons/imglar/Autumn6.jpg'
import Autumn7 from '../Seasons/imglar/Autumn7.jpg'
import Autumn8 from '../Seasons/imglar/Autumn8.jpg'
import Autumn9 from '../Seasons/imglar/Autumn9.jpg'
import Autumn10 from '../Seasons/imglar/Autumn10.jpg'




import Summer1 from '../Seasons/imglar/Summer1.jpg'
import Summer2 from '../Seasons/imglar/Summer2.jpg'
import Summer3 from '../Seasons/imglar/Summer3.jpg'
import Summer4 from '../Seasons/imglar/Summer4.jpg'
import Summer5 from '../Seasons/imglar/Summer5.jpg'
import Summer6 from '../Seasons/imglar/Summer6.jpg'
import Summer7 from '../Seasons/imglar/Summer7.jpg'
import Summer8 from '../Seasons/imglar/Summer8.jpg'
import Summer9 from '../Seasons/imglar/Summer9.jpg'
import Summer10 from '../Seasons/imglar/Summer10.jpg'
import { useTranslation } from "react-i18next";
import { CartContext } from "../Feature/ContextProvider";

const categories = {
  all: [
    { name: "Squares", image: KushImg2 },
    { name: "Ikat", image: Winter2 },
    { name: "Circles", image: Winter3 },
    { name: "Blue Geometry", image: Winter4 },
    { name: "Tropical Leaves", image: Winter5 },
    { name: "Bambi", image: Winter6},
    { name: "Byzantium", image: Winter7},
    { name: "Evening Garden", image: Winter8 },
    { name: "Pat Marquis", image: Winter9 },
    { name: "Lavender Roses", image: Winter10 },




    { name: "Safari", image: Autumn1 },
    { name: "Multicolored Amethyst", image: Autumn2 },
    { name: "Chevalier Pattern", image: Autumn3 },
    { name: "Emerald (AB)", image: Autumn4 },
    { name: "Malachite Box ", image: Autumn5 },
    { name: "Spring Scents", image: Autumn6},
    { name: "Autumn Leaf Fall (AB)", image: Autumn7},
    { name: "Blue Breeze", image: Autumn8 },
    { name: "Blue Water", image: Autumn9 },
    { name: "Plaid", image: Autumn10 },




    { name: "Vintage Style", image: Summer1 },
    { name: "Swaying Dandelion", image: Summer2 },
    { name: "French Riviera", image: Summer3 },
    { name: "Dolly the Sheep", image: Summer4 },
    { name: " Alpine Herbs", image: Summer5 },
    { name: "Inspiration", image: Summer6},
    { name: "Green Lotus", image: Summer7},
    { name: "Mountain Corn", image: Summer8 },
    { name: "Sakura Branch", image: Summer9 },
    { name: "Olive Branch", image: Summer10 }
  ],
  winter: [
    { name: "Squares", image: KushImg2 },
    { name: "Ikat", image: Winter2 },
    { name: "Circles", image: Winter3 },
    { name: "Blue Geometry", image: Winter4 },
    { name: "Tropical Leaves", image: Winter5 },
    { name: "Bambi", image: Winter6},
    { name: "Byzantium", image: Winter7},
    { name: "Evening Garden", image: Winter8 },
    { name: "Pat Marquis", image: Winter9 },
    { name: "Lavender Roses", image: Winter10 }
  ],
  autumn: [
    { name: "Safari", image: Autumn1 },
    { name: "Multicolored Amethyst", image: Autumn2 },
    { name: "Chevalier Pattern", image: Autumn3 },
    { name: "Emerald (AB)", image: Autumn4 },
    { name: "Malachite Box ", image: Autumn5 },
    { name: "Spring Scents", image: Autumn6},
    { name: "Autumn Leaf Fall (AB)", image: Autumn7},
    { name: "Blue Breeze", image: Autumn8 },
    { name: "Blue Water", image: Autumn9 },
    { name: "Plaid", image: Autumn10 },
  ],
  summer: [
    { name: "Vintage Style", image: Summer1 },
    { name: "Swaying Dandelion", image: Summer2 },
    { name: "French Riviera", image: Summer3 },
    { name: "Dolly the Sheep", image: Summer4 },
    { name: " Alpine Herbs", image: Summer5 },
    { name: "Inspiration", image: Summer6},
    { name: "Green Lotus", image: Summer7},
    { name: "Mountain Corn", image: Summer8 },
    { name: "Sakura Branch", image: Summer9 },
    { name: "Olive Branch", image: Summer10 }
  ]
};

export default function Collection() {
  const { lang, setLang } = useContext(CartContext) || {
    cart: [],
    lang: "en",
    setLang: () => {},
  };

  const { t } = useTranslation();


  const [favorites, setFavorites] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const toggleFavorite = (name) => {
    setFavorites((prev) =>
      prev.includes(name) ? prev.filter((item) => item !== name) : [...prev, name]
    );
  };

  const filteredProducts = categories[selectedCategory].filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 flex flex-col lg:flex-row">
      {/* Sidebar */}
      <div className="lg:w-1/4 w-full p-4 ">
        {/* Search input moved here */}
        <div className="mb-4 flex items-center  rounded-lg p-2 shadow-sm">
          <Search className="text-gray-500" />
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="ml-2 w-full p-2 focus:outline-none"
          />
        </div>

        <h2 className="text-2xl font-bold mb-2 ">{t("collection")}</h2>
        <ul>
          {Object.keys(categories).map((category) => (
            <li
              key={category}
              className={`cursor-pointer py-2 ${
                selectedCategory === category ? "font-bold text-xl  text-red-500" : "text-gray-700 font-semibold text-xl"
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)} {t("collection")}
            </li>
          ))}
        </ul>
      </div>

      {/* Main Content */}
      <div className="lg:w-3/4 w-full p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div key={product.name} className="relative  rounded-lg overflow-hidden shadow-md">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 flex justify-between items-center">
                <span className="text-lg font-semibold">{product.name}</span>
                <button onClick={() => toggleFavorite(product.name)}>
                  <Heart
                    className={`w-6 absolute bottom-5 cursor-pointer right-3 h-6 transition-colors ${
                      favorites.includes(product.name) ? "text-red-500" : "text-red-600   "
                    }`}
                    fill={favorites.includes(product.name) ? "red" : "none"}
                  />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
