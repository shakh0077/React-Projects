import { IoSearch } from "react-icons/io5";
import { Link, Outlet } from "react-router-dom";

function Collection() {
  return (
    <div className="w-full flex flex-row gap-20  py-10 mx-auto lg:max-w-[1440px]">
      <main className="flex flex-row gap-20 ">
        <aside className="">
          <nav className="mt-2 flex px-1  flex-col gap-1">
            <div className="relative top-0">
              <input
                className="w-[290px] px-2.5 py-3 rounded-2xl bg-gray-200"
                placeholder="Search...."
                type="text"
              />
              <IoSearch className="absolute top-2 right-6 w-8 h-8 p-2 rounded-full bg-red-600 text-base text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">Collection</h2>
            </div>
            <div className="flex flex-col  gap-4 py-5">
              <Link
                className="text-xl font-semibold focus:text-red-600"
                to={"all"}
              >
                All Collection
              </Link>
              <Link
                className="text-xl font-semibold focus:text-red-600"
                to={"winter"}
              >
                Winter Collection
              </Link>
              <Link
                className="text-xl font-semibold focus:text-red-600"
                to="autumn"
              >
                Autumn Collection
              </Link>
              <Link
                to="summer"
                className="text-xl font-semibold focus:text-red-600"
              >
                Summer Collection
              </Link>
            </div>
          </nav>
        </aside>
        <Outlet />
      </main>
    </div>
  );
}

export default Collection;
