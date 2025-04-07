import { useContext, useState } from "react";
import { product } from "../mock/data";
import { Outlet, useParams } from "react-router-dom";
import Raiting from "../CollectionAll/Raiting";
import { CartContext } from "../Feature/ContextProvider";
import { useTranslation } from "react-i18next";


function Item() {

  const { lang, setLang } = useContext(CartContext) || {
    cart: [],
    lang: "en",
    setLang: () => {},
  };

  const { t } = useTranslation();


  const { id } = useParams();
  const [comments, setComments] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  const allProducts = [...product.winter, ...product.summer, ...product.autumn];
  const selectedProduct = allProducts.find((item) => item.id.toString() === id);

  if (!selectedProduct) {
    return <h2 className="text-center text-7xl mt-10 text-gray-300 font-serif">Product Not Found</h2>;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && comment) {
      setComments([...comments, { name, comment }]);
      setName("");
      setEmail("");
      setComment("");
    }
  };

  return (
    <>
      <div className="w-full max-w-[1440px] mx-auto py-10 px-5">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-20">
          <img
            src={selectedProduct.images}
            alt={selectedProduct.title}
            className="w-full lg:w-[500px] h-auto rounded-lg shadow-md"
          />
          <div className="flex flex-col">
            <h2 className="text-2xl lg:text-3xl font-bold my-4">{selectedProduct.title}</h2>
            <div>
              <table className="w-full border border-black">
                <tbody>
                  <tr className="border">
                    <td className="text-lg lg:text-2xl font-semibold px-5 py-4 border">Material:</td>
                    <td className="text-sm lg:text-xl px-5 py-4 border">{t("product.material")}</td>
                  </tr>
                  <tr className="border">
                    <td className="text-lg lg:text-2xl font-semibold px-5 py-4 border">Pillowcase:</td>
                    <td className="text-sm lg:text-xl px-5 py-4 border">{t("product.pillowcase")}</td>
                  </tr>
                  <tr className="border">
                    <td className="text-lg lg:text-2xl font-semibold px-5 py-4 border">Sheet:</td>
                    <td className="text-sm lg:text-xl px-5 py-4 border">{t("product.sheet")}</td>
                  </tr>
                  <tr className="border">
                    <td className="text-lg lg:text-2xl font-semibold px-5 py-4 border">Duvet Cover:</td>
                    <td className="text-sm lg:text-xl px-5 py-4 border">{t("product.duvet")}</td>
                  </tr>
                  <tr className="border">
                    <td className="text-lg lg:text-2xl font-semibold px-5 py-4 border">Size:</td>
                    <td className="text-sm lg:text-xl px-5 py-4 border">{t("product.size")}</td>
                  </tr>
                  <tr className="border">
                    <td className="text-lg lg:text-2xl font-semibold px-5 py-4 border">Manufacturer:</td>
                    <td className="text-sm lg:text-xl px-5 py-4 border">{t("product.manufacturer")}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <Outlet />

        <div className="flex flex-col lg:flex-row gap-10 mt-10">
          <div className="w-full lg:w-1/2">
            <h2 className="text-2xl md:text-3xl py-5 font-bold">
            {t("comments.title")}
            </h2>
            <ul className="space-y-4">
              {comments.map((c, index) => (
                <li
                  key={index}
                  className="px-4 py-3 rounded-2xl border w-full md:w-[300px] bg-gray-100"
                >
                  <strong>{c.name}:</strong> {c.comment}
                </li>
              ))}
            </ul>
          </div>

          <div className="w-full lg:w-1/2 px-0 lg:px-5">
            <h2 className="text-2xl md:text-3xl py-5 font-bold text-center">
            {t("comments.leaveComment")}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="text-gray-500 text-xl font-semibold" htmlFor="raiting">
                {t("comments.rating")}
                </label>
                <Raiting />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-gray-500 text-xl font-semibold" htmlFor="name">
                {t("comments.name")}

                </label>
                <input
                  className="bg-gray-200 px-4 py-3 font-semibold text-xl rounded-3xl w-full"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={t("comments.namePlaceholder")}
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-gray-500 text-xl font-semibold" htmlFor="email">
                {t("comments.email")}
                </label>
                <input
                  className="bg-gray-200 px-4 py-3 font-semibold text-xl rounded-3xl w-full"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t("comments.emailPlaceholder")}
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-gray-500 text-xl font-semibold" htmlFor="commit">
                {t("comments.comment")}
                </label>
                <textarea
                  className="bg-gray-200 px-4 py-3 font-semibold text-xl h-32 rounded-3xl w-full resize-none"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  placeholder={t("comments.commentPlaceholder")}
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-red-500 mt-5 cursor-pointer py-3.5 w-full text-white text-lg font-semibold rounded-3xl transition hover:bg-red-600"
              >
                {t("comments.submit")}
              </button>
            </form>
          </div>
        </div>


      </div>
    </>
  );
}

export default Item;
