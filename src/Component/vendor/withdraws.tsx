import { FaFileExcel } from "react-icons/fa";
import { MdRunningWithErrors } from "react-icons/md";
import { FaMoneyBillAlt } from "react-icons/fa";

export default function Withdraws() {
    return (
        <>
            <div className="mb-4 flex items-center p-2 mt-6 gap-2 ">
                <FaMoneyBillAlt className="text-2xl text-green-500" />
                <h1 className="text-2xl font-bold">Withdraw</h1>
            </div>

            <div className="p-4 mt-5 shadow-md border rounded-md flex flex-col gap-4">
                <div className="flex justify-between items-center">
                    {/* ซ้าย */}
                    <div className="flex items-center space-x-2">
                        <span className="font-semibold text-black">Withdraw Request Table</span>
                        <span className="font-bold px-2 py-0.5 text-sm rounded-full bg-gray-100 text-blue-600">0</span>
                    </div>

                    {/* ขวา */}
                    <div className="flex items-center justify-end space-x-4">

                        <select className="w-48 border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300">
                            <option disabled selected>All</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                        </select>

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
                                <th className="px-10 py-4 font-semibold text-black whitespace-nowrap text-left">SL</th>
                                <th className="px-10 py-2 font-semibold text-black whitespace-nowrap text-left">Amount</th>
                                <th className="px-10 py-2 font-semibold text-black whitespace-nowrap text-left">Name</th>
                                <th className="px-10 py-2 font-semibold text-black whitespace-nowrap text-left">Request Time</th>
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
                    <p className="mb-10 text-sm text-gray-500 mt-2">No withdraw request found</p>
                </div>
            </div>
        </>
    );
}
