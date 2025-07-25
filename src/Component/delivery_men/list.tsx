import { MdRunningWithErrors } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import { IoIosPerson } from "react-icons/io";
import { FaFileExcel } from "react-icons/fa";

export default function Deliverman_list() {
    return (
        <>
            <div className="flex items-center p-2 mt-6 gap-2 ">
                <IoIosPerson className="text-2xl text-amber-700" />
                <h1 className="text-2xl font-bold">Delivery Man</h1>
                <span className="font-bold px-2 py-0.5 text-sm rounded-full bg-gray-100 text-gray-600">0</span>
            </div>

            <div className="p-4 mt-5 shadow-md border rounded-md gap-4">
                {/* ตัวทำให้แยก ซ้าย - ขวา */}
                <div className="w-full flex gap-4 mb-4">
                    {/* ซ้าย */}
                    <div className="flex border rounded-md overflow-hidden">
                        <input
                            type="text"
                            placeholder="Search by name, contact info"
                            className="px-3 py-2 outline-none text-sm placeholder-gray-400 w-full"
                        />
                        <button className="bg-gray-100 px-3 py-3 hover:bg-gray-200">
                            <FiSearch />
                        </button>
                    </div>

                    {/* ขวา */}
                    <div className="flex gap-4 ml-auto">
                        <div className="flex items-center justify-end space-x-4">
                            {/* Export Button */}
                            <button className="flex items-center border border-blue-500 text-blue-600 font-semibold px-4 py-2 rounded-md hover:bg-blue-50">
                                <FaFileExcel className="mr-2 text-green-600 text-lg" />
                                Export
                            </button>

                            <button type="submit" className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                                + Add Delivery Man
                            </button>
                        </div>
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="mb-4 min-w-full table-auto">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="text-left px-10 py-4 font-semibold text-black whitespace-nowrap">SL</th>
                                <th className="px-10 py-2 font-semibold text-black whitespace-nowrap text-left">Name</th>
                                <th className="px-10 py-2 font-semibold text-black whitespace-nowrap text-left">Contact Info</th>
                                <th className="px-10 py-2 font-semibold text-black whitespace-nowrap text-left">Total Orders</th>
                                <th className="px-10 py-2 font-semibold text-black whitespace-nowrap">Rating</th>
                                <th className="px-10 py-2 font-semibold text-black whitespace-nowrap">Status</th>
                                <th className="px-10 py-2 font-semibold text-black whitespace-nowrap">Action</th>
                            </tr>
                        </thead>
                        <tbody>

                        </tbody>
                    </table>
                </div>

                <div className="flex flex-col justify-center items-center p-2 mt-6 gap-2">
                    <MdRunningWithErrors className="mt-20 text-9xl text-black-500" />
                    <p className="mb-10 text-sm text-gray-500 mt-2">No vendor found</p>
                </div>
            </div>
        </>
    );
}
