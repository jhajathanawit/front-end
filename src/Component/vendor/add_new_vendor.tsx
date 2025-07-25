import { IoIosPerson } from "react-icons/io";
import { IoPersonSharp } from "react-icons/io5";
import { CiImageOn } from "react-icons/ci";
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { FaImage } from "react-icons/fa";
import React, { useState } from 'react';

export default function Add_new_vendor() {
    const [showPassword, setShowPassword] = useState(false);
    return (
        <>
            <div className="mb-4 flex items-center p-2 mt-6 gap-2">
                <IoIosPerson className="text-2xl text-black" />
                <h1 className="text-2xl font-bold">Add New Vendor</h1>
            </div>

            <div className="p-4 shadow-md border rounded-md flex flex-col gap-4">
                <div className="flex gap-2 border-b pb-2">
                    <IoPersonSharp className="text-2xl text-black" />
                    <h1 className="text-lg font-bold">Vendor Infomation</h1>
                </div>

                <div className="flex justify-between gap-6">
                    {/* LEFT SIDE */}
                    <div className="w-1/2">

                        <div>
                            <label className="block text-sm font-medium text-gray-500 mb-1">
                                First Name
                            </label>
                            <input
                                type="text"
                                placeholder="Ex: Jhone"
                                className="mb-6 w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-500 mb-1">
                                Last Name
                            </label>
                            <input
                                type="text"
                                placeholder="Ex: Doe"
                                className="mb-6 w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-500 mb-1">
                                Phone Number
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

                    <div className="w-1/2 flex flex-col">
                        <CiImageOn className="mt-8 text-9xl self-center" />
                        <div className="mt-6">
                            <label className="text-sm font-medium text-gray-500 mb-2">
                                Vendor Image <span className="text-blue-600 cursor-pointer">(Ratio 1:1)</span>
                            </label>

                            <label className="flex items-center justify-between w-full h-10 px-3 border rounded cursor-pointer relative overflow-hidden">
                                <span className="text-black">Upload image</span>
                                <span className="h-full flex items-center font-sm font-semibold border-l pl-3">Browse</span>

                                <input
                                    type="file"
                                    accept="image/*"
                                    className="absolute inset-0 opacity-0 cursor-pointer"
                                />
                            </label>
                        </div>
                    </div>
                </div>
            </div>

            <div className="p-4 mt-5 shadow-md border rounded-md flex flex-col gap-4">
                <div className="flex gap-2 border-b pb-2">
                    <IoPersonSharp className="text-2xl text-black" />
                    <h1 className="text-lg font-bold">Account Infomation</h1>
                </div>

                <div className="flex gap-6 mb-8">
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
            </div>

            <div className="p-4 mt-5 shadow-md border rounded-md flex flex-col gap-4">
                <div className="flex gap-2 border-b pb-2">
                    <IoPersonSharp className="text-2xl text-black" />
                    <h1 className="text-lg font-bold">Shop Infomation</h1>
                </div>

                <div className="flex gap-6 mb-2 items-stretch">
                    {/* ฝั่งซ้าย */}
                    <div className="w-1/2 rounded-md flex flex-col">
                        <label className="block text-sm font-medium text-gray-500 mb-1">
                            Shop Name
                        </label>
                        <input
                            type="text"
                            placeholder="Ex: Jhon"
                            className="mb-6 w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
                        />

                        <div className="flex-1 flex justify-center items-center">
                            <CiImageOn className="text-9xl" />
                        </div>

                        <label className="text-sm font-medium text-gray-500 mb-2">
                            Shop logo <span className="text-blue-600 cursor-pointer">(Ratio 1:1)</span>
                        </label>
                        <label className="flex items-center justify-between w-full h-10 px-3 border rounded cursor-pointer relative overflow-hidden">
                            <span className="text-black">Upload logo</span>
                            <span className="h-full flex items-center font-sm font-semibold border-l pl-3">Browse</span>
                            <input
                                type="file"
                                accept="image/*"
                                className="absolute inset-0 opacity-0 cursor-pointer"
                            />
                        </label>
                    </div>

                    {/* ฝั่งขวา */}
                    <div className="w-1/2 rounded-md flex flex-col">
                        <label className="block text-sm font-medium text-gray-500 mb-1">
                            Shop Address
                        </label>
                        <textarea
                            placeholder="Ex: Doe"
                            rows={1}
                            className="mb-6 w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300 resize-y"
                        />

                        <div className="flex-1 flex justify-center items-center">
                            <FaImage className="text-9xl" />
                        </div>

                        <label className="text-sm font-medium text-gray-500 mb-2 mt-2">
                            Shop banner <span className="text-blue-600 cursor-pointer">Ratio 4:1 (2000 x 500 px)</span>
                        </label>
                        <label className="flex items-center justify-between w-full h-10 px-3 border rounded cursor-pointer relative overflow-hidden">
                            <span className="text-black">Upload logo</span>
                            <span className="h-full flex items-center font-sm font-semibold border-l pl-3">Browse</span>
                            <input
                                type="file"
                                accept="image/*"
                                className="absolute inset-0 opacity-0 cursor-pointer"
                            />
                        </label>
                    </div>
                </div>
                <div className="mt-2 flex items-end justify-end gap-4">
                    <button type="reset" className="px-6 py-2 border rounded bg-gray-100 text-black-600 hover:bg-gray-200">Reset</button>
                    <button type="submit" className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                        Submit
                    </button>
                </div>
            </div>
        </>
    );
}
