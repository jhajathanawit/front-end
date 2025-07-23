import { MdRunningWithErrors } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import { SlEnvolopeLetter } from "react-icons/sl";

export default function Support_ticket() {
    return (
        <>
            <div className="flex items-center p-2 mt-6 gap-2 ">
                <SlEnvolopeLetter className="text-2xl text-black-500" />
                <h1 className="text-2xl font-bold">Support Ticket</h1>
                <span className="font-bold px-2 py-0.5 text-sm rounded-full bg-gray-100 text-gray-600">0</span>
            </div>

            <div className="p-4 mt-5 shadow-md border rounded-md gap-4">
                {/* ตัวทำให้แยก ซ้าย - ขวา */}
                <div className="flex gap-4 border-b border-gray pb-4 mb-4">
                    {/* ซ้าย */}
                    <div className="flex border rounded-md overflow-hidden w-1/6">
                        <input
                            type="text"
                            placeholder="Search ticket by subject or status"
                            className="px-3 py-2 outline-none text-sm placeholder-gray-400 w-full"
                        />
                        <button className="bg-gray-100 px-3 py-3 hover:bg-gray-200">
                            <FiSearch />
                        </button>
                    </div>

                    {/* ขวา */}
                    <div className="flex gap-4 ml-auto">
                        <select className="w-full sm:w-48 md:w-64 border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300">
                            <option disabled selected>All Priority</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                        </select>

                        <select className="w-full sm:w-48 md:w-64 border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300">
                            <option disabled selected>All Status</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                        </select>
                    </div>
                </div>

                <div className="flex flex-col justify-center items-center p-2 mt-6 gap-2">
                    <MdRunningWithErrors className="mt-20 text-9xl text-black-500" />
                    <p className="mb-10 text-sm text-gray-500 mt-2">No support ticket found</p>
                </div>
            </div>
        </>
    );
}
