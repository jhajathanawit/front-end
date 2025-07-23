import { TbDeviceMobileDollar } from "react-icons/tb";
import { MdRunningWithErrors } from "react-icons/md";

export default function Inhouse_sale() {
    return (
        <>
            <div className="flex items-center p-2 mt-6 gap-2 ">
                <TbDeviceMobileDollar className="text-2xl text-black-500" />
                <h1 className="text-2xl font-bold">Inhouse Sale</h1>
            </div>

            <div className="p-4 mt-5 shadow-md border rounded-md flex flex-col gap-4">
                <div className="flex items-center">
                    {/* ซ้าย */}
                    <div className="flex items-center space-x-2">
                        <span className="font-semibold text-black">Category</span>
                    </div>

                    {/* ขวา */}
                    <div className="flex w-full items-center space-x-4">
                        {/* All Drop Down */}
                        <div className="w-full">
                            <select className="ml-2 w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300">
                                <option disabled selected>All</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                            </select>
                        </div>

                        {/* Filter Button */}
                        <button type="submit" className="w-1/3 ml-4 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Filter</button>
                    </div>
                </div>

                <table className="min-w-full table-auto">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="text-left px-4 py-2 font-semibold text-black">SL</th>
                            <th className="text-left px-4 py-2 font-semibold text-black">Product Name</th>
                            <th className="px-4 py-2 font-semibold text-black">Total Sale</th>
                        </tr>
                    </thead>
                    <tbody>

                    </tbody>
                </table>

                <div className="flex flex-col justify-center items-center p-2 mt-6 gap-2">
                    <MdRunningWithErrors className="mt-20 text-9xl text-black-500" />
                    <p className="mb-10 text-sm text-gray-500 mt-2">No banner found</p>
                </div>
            </div>
        </>
    );
}
