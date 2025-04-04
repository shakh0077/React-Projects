import { useState } from "react";
import { product } from "../mock/data";
import { Outlet, useParams } from "react-router-dom";
import Raiting from "../CollectionAll/Raiting";

function Item() {
    let { link } = useParams();
    const [comments, setComments] = useState([]);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [comment, setComment] = useState("");

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
            <div className="w-full lg:max-w-[1440px] mx-auto py-10 px-5">
                <div className="grid grid-cols-5 gap-5 text-center">
                    {product.winter.map((v, index) => (
                        <div className="rounded-2xl" key={index}>
                            <img src={v.images} alt="" />
                            <h2>{v.title}</h2>
                        </div>
                    ))}
                </div>
                <Outlet />
                <div className="flex flex-row gap-10 mt-10">
                    <div className="w-[700px]">
                        <h2 className="text-3xl py-7 font-bold">Submitted Comments</h2>
                        <ul>
                            {comments.map((c, index) => (
                                <li key={index} className="px-3 py-4 rounded-2xl border mt-5 w-[200px]">
                                    <strong>{c.name}:</strong> {c.comment}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="px-5 w-[700px]">
                        <h2 className="text-3xl py-7 font-bold text-center">Leave a Comment</h2>
                        <form onSubmit={handleSubmit}>
                            <div>
                                <label className="text-gray-500 text-xl font-semibold" htmlFor="raiting">Rating:</label>
                                <Raiting />
                            </div>
                            <div className="flex flex-col gap-6">
                                <label className="text-gray-500 text-xl font-semibold" htmlFor="name">Name</label>
                                <input 
                                    className="bg-gray-200 px-3 font-semibold text-xl  py-3 rounded-3xl" 
                                    type="text" 
                                    value={name} 
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                            <div className="flex flex-col gap-6">
                                <label className="text-gray-500 text-xl font-semibold" htmlFor="email">Email</label>
                                <input 
                                    className="bg-gray-200 py-3 px-3 font-semibold text-xl  rounded-3xl" 
                                    type="email" 
                                    value={email} 
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="flex flex-col gap-6">
                                <label className="text-gray-500   text-xl font-semibold" htmlFor="commit">Comment</label>
                                <textarea 
                                    className="bg-gray-200 px-3 font-semibold text-xl h-30 rounded-3xl" 
                                    value={comment} 
                                    onChange={(e) => setComment(e.target.value)}
                                ></textarea>
                            </div>
                            <button className="bg-red-500 mt-5 py-3.5 text-center w-[650px] cursor-pointer text-white font-semibold rounded-3xl">Submit</button>
                        </form>
                    </div>
                </div>
                <div>
                    <h1 className="text-5xl font-bold text-center mt-30">Similar Products</h1>
                </div>
            </div>
        </>
    );
}

export default Item;