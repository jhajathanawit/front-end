import { FiSearch } from "react-icons/fi";
import { FaFileExcel } from "react-icons/fa";
import { MdRunningWithErrors } from "react-icons/md";
import { AiFillProduct } from "react-icons/ai";


export default function Product_wish() {
    return (
        <>
            <div className="mb-4 flex items-center p-2 mt-6 gap-2 ">
                <AiFillProduct className="text-2xl text-red-500" />
                <h1 className="text-2xl font-bold">Product Report</h1>
            </div>

            <div className="flex space-x-4">
                <button className="px-4 py-2 rounded-full text-gray-600 font-semibold">
                    All Products
                </button>
                <button className="px-4 py-2 rounded-full text-gray-600 font-semibold">
                    Product Stock
                </button>
                <button className="px-4 py-2 rounded-full bg-blue-700 text-white font-semibold">
                    Wish Listed Products
                </button>
            </div>

            <div className="p-4 mt-5 shadow-md border rounded-md flex flex-col gap-4">
                <div className="flex">
                    <div className="w-1/3">
                        <h1 className="font-bold text-lg">Filter Data</h1>
                        <select className="mt-2 w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300">
                            <option disabled selected>All</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                        </select>
                    </div>

                    <div className="w-1/3 ml-2 mt-7">
                        <select className="mt-2 w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300">
                            <option disabled selected>Wishlist sort by (low to high)</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                        </select>
                    </div>

                    <div className="w-1/3 ml-2 mt-7">
                        <div className="flex px-4 pb-2">
                            <button type="submit" className="mt-2 w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                                Filter
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="p-4 mt-5 shadow-md border rounded-md flex flex-col gap-4">
                <div className="flex justify-between items-center">
                    {/* ซ้าย */}
                    <div className="flex items-center space-x-2">
                        <span className="font-semibold text-black">Total Products</span>
                        <span className="font-bold px-2 py-0.5 text-sm rounded-full bg-gray-100 text-blue-600">0</span>
                    </div>

                    {/* ขวา */}
                    <div className="flex items-center justify-end space-x-4">
                        {/* Search Box */}
                        <div className="flex items-center border rounded-md overflow-hidden">
                            <input
                                type="text"
                                placeholder="Search Product Name"
                                className="px-3 py-2 outline-none text-sm placeholder-gray-400"
                            />
                            <button className="bg-gray-100 px-3 py-3 hover:bg-gray-200">
                                <FiSearch />
                            </button>
                        </div>

                        {/* Export Button */}
                        <button className="flex items-center border border-blue-500 text-blue-600 font-semibold px-4 py-2 rounded-md hover:bg-blue-50">
                            <FaFileExcel className="mr-2 text-green-600 text-lg" />
                            Export
                        </button>
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="mb-4 min-w-full table-auto">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="text-left px-10 py-4 font-semibold text-black whitespace-nowrap">SL</th>
                                <th className="text-left px-10 py-2 font-semibold text-black whitespace-nowrap">Product Name</th>
                                <th className="text-left px-10 py-2 font-semibold text-black whitespace-nowrap">Date</th>
                                <th className="px-10 py-2 font-semibold text-black whitespace-nowrap">Total In Wishlist</th>
                            </tr>
                        </thead>
                        <tbody>

                        </tbody>
                    </table>
                </div>

                <div className="flex flex-col justify-center items-center p-2 mt-6 gap-2">
                    <MdRunningWithErrors className="mt-20 text-9xl text-black-500" />
                    <p className="mb-10 text-sm text-gray-500 mt-2">No product found</p>
                </div>
            </div>
        </>
    );
}
