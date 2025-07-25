import { FiSearch } from "react-icons/fi";
import { MdRunningWithErrors } from "react-icons/md";
import { FaMoneyBillAlt } from "react-icons/fa";

export default function Withdraws_method_list() {
    return (
        <>
            <div className="mb-4 flex items-center p-2 mt-6 justify-between">
                {/* ฝั่งซ้าย: ไอคอน + ข้อความ */}
                <div className="flex items-center gap-2">
                    <FaMoneyBillAlt className="text-2xl text-green-500" />
                    <h1 className="text-2xl font-bold">Withdraw Method List</h1>
                </div>

                {/* ฝั่งขวา: ปุ่ม */}
                <button
                    type="submit"
                    className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                    + Add method
                </button>
            </div>


            <div className="p-4 mt-5 shadow-md border rounded-md flex flex-col gap-4">
                <div className="flex justify-between items-center">
                    {/* ซ้าย */}
                    <div className="flex items-center space-x-2">
                        <span className="font-semibold text-black">Methods</span>
                        <span className="font-bold px-2 py-0.5 text-sm rounded-full bg-gray-100 text-blue-600">0</span>
                    </div>

                    {/* ขวา */}
                    <div className="flex border rounded-md overflow-hidden">
                        <input
                            type="text"
                            placeholder="Search Method Name"
                            className="px-3 py-2 outline-none text-sm placeholder-gray-400 w-full"
                        />
                        <button className="bg-gray-100 px-3 py-3 hover:bg-gray-200">
                            <FiSearch />
                        </button>
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="mb-4 min-w-full table-auto">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="px-10 py-4 font-semibold text-black whitespace-nowrap text-left">SL</th>
                                <th className="px-10 py-2 font-semibold text-black whitespace-nowrap text-left">Method Name</th>
                                <th className="px-10 py-2 font-semibold text-black whitespace-nowrap text-left">Method Fields</th>
                                <th className="px-10 py-2 font-semibold text-black whitespace-nowrap">Active Status</th>
                                <th className="px-10 py-2 font-semibold text-black whitespace-nowrap">Default Method</th>
                                <th className="px-10 py-2 font-semibold text-black whitespace-nowrap">Action</th>
                            </tr>
                        </thead>
                        <tbody>

                        </tbody>
                    </table>
                </div>
                <div className="flex flex-col justify-center items-center p-2 mt-6 gap-2">
                    <MdRunningWithErrors className="mt-20 text-9xl text-black-500" />
                    <p className="mb-10 text-sm text-gray-500 mt-2">No withdraw request found</p>
                </div>
            </div>
        </>
    );
}
