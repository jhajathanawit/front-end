import { FaImage } from "react-icons/fa";
import { IoIosPerson } from "react-icons/io";
import { IoPersonSharp } from "react-icons/io5";
import { CiImageOn } from "react-icons/ci";
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import React, { useState } from 'react';
import { MdRunningWithErrors } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import { FaFileExcel } from "react-icons/fa";
import { FaMoneyBillAlt } from "react-icons/fa";


export default function Emergency_contact() {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <>
            <div className="mb-4 flex items-center p-2 mt-6 gap-2 ">
                <IoIosPerson className="text-2xl text-red-500" />
                <h1 className="text-2xl font-bold">Emergency Contact</h1>
            </div>

            <div className="p-4 mt-5 shadow-md border rounded-md flex flex-col gap-4">
                <div className="flex gap-2 border-b pb-2">
                    <IoPersonSharp className="text-2xl text-black" />
                    <h1 className="text-lg font-bold">Add New Contact Informantion</h1>
                </div>

                <div className="flex gap-6">
                    {/* 1 */}
                    <div className="w-1/2 rounded-md">
                        <label className="block text-sm font-medium text-gray-500 mb-1">
                            Contact name
                        </label>
                        <input
                            type="text"
                            placeholder="Contact name"
                            className="mb-6 w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
                        />
                    </div>

                    {/* 2 */}
                    <div className="w-1/2 rounded-md">
                        <label className="block text-sm font-medium text-gray-500 mb-1">
                            Phone
                        </label>
                        <input
                            type="tel"
                            placeholder="Ex: 012XXXXXX"
                            pattern="[0-9]{10}"
                            maxLength={10}
                            className="mb-6 w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
                        />
                    </div>

                </div>
                <div className="flex items-end justify-end gap-4">
                    <button type="reset" className="px-6 py-2 border rounded bg-gray-100 text-black-600 hover:bg-gray-200">Reset</button>
                    <button type="submit" className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                        Submit
                    </button>
                </div>
            </div>

            <div className="p-4 mt-5 shadow-md border rounded-md gap-4">
                {/* ตัวทำให้แยก ซ้าย - ขวา */}
                <div className="w-full flex gap-4 mb-4 items-center">
                    <span className="font-semibold text-black">Withdraw Request Table</span>
                    <span className="font-bold px-2 py-0.5 text-sm rounded-full bg-gray-100 text-gray-600">0</span>

                    {/* ขวา */}
                    <div className="flex gap-4 ml-auto">
                        
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="mb-4 min-w-full table-auto">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="text-left px-10 py-4 font-semibold text-black whitespace-nowrap">SL</th>
                                <th className="px-10 py-2 font-semibold text-black whitespace-nowrap text-left">Name</th>
                                <th className="px-10 py-2 font-semibold text-black whitespace-nowrap text-left">Phone</th>
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
