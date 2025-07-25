import { FaImage } from "react-icons/fa";
import { IoIosPerson } from "react-icons/io";
import { IoPersonSharp } from "react-icons/io5";
import { CiImageOn } from "react-icons/ci";
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import React, { useState } from 'react';


export default function Add_new() {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <>
            <div className="mb-4 flex items-center p-2 mt-6 gap-2 ">
                <IoIosPerson className="text-2xl text-red-500" />
                <h1 className="text-2xl font-bold">Add New Delivery Man</h1>
            </div>

            <div className="p-4 mt-5 shadow-md border rounded-md flex flex-col gap-4">
                <div className="flex gap-2 border-b pb-2">
                    <IoPersonSharp className="text-2xl text-black" />
                    <h1 className="text-lg font-bold">General Infomation</h1>
                </div>

                <div className="flex gap-6 mb-2 items-stretch">
                    {/* ฝั่งซ้าย */}
                    <div className="w-1/2 rounded-md flex flex-col">
                        <label className="block text-sm font-medium text-gray-500 mb-1">
                            First Name
                        </label>
                        <input
                            type="text"
                            placeholder="First Name"
                            className="mb-6 w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
                        />

                        <label className="block text-sm font-medium text-gray-500 mb-1">
                            Last Name
                        </label>
                        <input
                            type="text"
                            placeholder="Last Name"
                            className="mb-6 w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
                        />
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

                        <label className="text-sm font-medium text-gray-500 mb-2">
                            Deliveryman image<span className="text-blue-600 cursor-pointer"> * (Ratio 1:1)</span>
                        </label>
                        <label className="flex items-center justify-between w-full h-10 px-3 border rounded cursor-pointer relative overflow-hidden">
                            <span className="text-black">Choose File</span>
                            <span className="h-full flex items-center font-sm font-semibold border-l pl-3">Browse</span>
                            <input
                                type="file"
                                accept="image/*"
                                className="absolute inset-0 opacity-0 cursor-pointer"
                            />
                        </label>

                        <div className="mt-10 flex-1 flex justify-center items-center">
                            <CiImageOn className="text-9xl" />
                        </div>
                    </div>

                    {/* ฝั่งขวา */}
                    <div className="w-1/2 rounded-md flex flex-col">
                        <div>
                            <label className="block text-sm font-medium text-gray-500 mb-1">
                                Identity Type
                            </label>
                            <select className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300">
                                <option disabled selected>Passport</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                            </select>
                        </div>

                        <label className="mt-6 block text-sm font-medium text-gray-500 mb-1">
                            Identity Number
                        </label>
                        <input
                            type="text"
                            placeholder="Ex:DH-23434-LS"
                            className="mb-6 w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
                        />

                        <label className="block text-sm font-medium text-gray-500 mb-1">
                            Address
                        </label>
                        <textarea
                            placeholder="Address"
                            rows={1}
                            className="mb-6 w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300 resize-y"
                        />

                        <label className="block text-sm font-medium text-gray-500 mb-1">
                            Identity image
                        </label>
                        <div className="flex-1 flex">
                            <FaImage className="text-9xl" />
                        </div>

                    </div>
                </div>
            </div>

            <div className="p-4 mt-5 shadow-md border rounded-md flex flex-col gap-4">
                <div className="flex gap-2 border-b pb-2">
                    <IoPersonSharp className="text-2xl text-black" />
                    <h1 className="text-lg font-bold">Account Infomation</h1>
                </div>

                <div className="flex gap-6">
                    {/* 1 */}
                    <div className="w-1/3 rounded-md">
                        <label className="block text-sm font-medium text-gray-500 mb-1">
                            Email
                        </label>
                        <input
                            type="text"
                            placeholder="Ex:Jhone@company.com"
                            className="mb-6 w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
                        />
                    </div>

                    {/* 2 */}
                    <div className="w-1/3 rounded-md">
                        <label className="block text-sm font-medium text-gray-500 mb-1">
                            Password<span className="inline-block ml-1 text-gray-400" title="Set the order priority">🛈</span>
                        </label>

                        <div className="relative">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                placeholder="Password minimum 8 characters"
                                className="w-full border rounded px-3 py-2 pr-10 focus:outline-none focus:ring focus:border-blue-300"
                            />

                            <div
                                className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-500"
                                onClick={() => setShowPassword(prev => !prev)}
                            >
                                {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                            </div>
                        </div>
                    </div>

                    {/* 3 */}
                    <div className="w-1/3 rounded-md">
                        <label className="block text-sm font-medium text-gray-500 mb-1">
                            Confirm Password
                        </label>

                        <div className="relative">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                placeholder="Confirm Password"
                                className="w-full border rounded px-3 py-2 pr-10 focus:outline-none focus:ring focus:border-blue-300"
                            />

                            <div
                                className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-500"
                                onClick={() => setShowPassword(prev => !prev)}
                            >
                                {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex items-end justify-end gap-4">
                    <button type="reset" className="px-6 py-2 border rounded bg-gray-100 text-black-600 hover:bg-gray-200">Reset</button>
                    <button type="submit" className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                        Submit
                    </button>
                </div>
            </div>
        </>
    );
}
