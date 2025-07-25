import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { FaFileExcel } from "react-icons/fa";
import { MdRunningWithErrors } from "react-icons/md";
import { FaArrowsDownToPeople } from "react-icons/fa6";

export default function Employee_role_setup() {
    const modules: string[] = [
        'Dashboard',
        'Pos management',
        'Order management',
        'Product management',
        'Promotion management',
        'Help and support section',
        'Reports and analytics',
        'Blog management',
        'User management',
        'Business settings',
        'System settings',
        '3rd party setup',
        'Themes and addons',
    ];

    const [checkedModules, setCheckedModules] = useState<string[]>([]);
    const [selectAll, setSelectAll] = useState(false);

    const handleSelectAll = (e: React.ChangeEvent<HTMLInputElement>) => {
        const isChecked = e.target.checked;
        setSelectAll(isChecked);
        setCheckedModules(isChecked ? modules : []);
    };

    const handleCheckboxChange = (label: string) => {
        if (checkedModules.includes(label)) {
            const updated = checkedModules.filter((item) => item !== label);
            setCheckedModules(updated);
            setSelectAll(false);
        } else {
            const updated = [...checkedModules, label];
            setCheckedModules(updated);
            if (updated.length === modules.length) {
                setSelectAll(true);
            }
        }
    };

    return (
        <>
            <div className="mb-4 flex items-center p-2 mt-6 gap-2">
                <FaArrowsDownToPeople className="text-2xl text-yellow-500" />
                <h1 className="text-2xl font-bold">Employee Role Setup</h1>
            </div>

            {/* Role setup box */}
            <div className="p-4 mt-5 shadow-md border rounded-md flex flex-col gap-4">
                <div className="flex">
                    <div className="w-1/2">
                        <h1 className="text-sm font-bold">Role name</h1>
                        <input
                            type="text"
                            placeholder="Ex:Store"
                            className="text-gray-500 mt-2 w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
                        />
                    </div>
                </div>

                {/* Module Permission */}
                <div className="flex items-center mt-4 gap-4">
                    <h2 className="text-sm font-bold">Module permission</h2>
                    <div className="flex items-center">
                        <input
                            type="checkbox"
                            id="selectAll"
                            checked={selectAll}
                            onChange={handleSelectAll}
                            className="mr-2"
                        />
                        <label htmlFor="selectAll" className="text-sm">Select All</label>
                    </div>
                </div>

                <div className="grid grid-cols-4 gap-y-4 gap-x-6">
                    {modules.map((label, index) => (
                        <div key={index} className="flex items-center">
                            <input
                                type="checkbox"
                                id={`module-${index}`}
                                className="mr-2"
                                checked={checkedModules.includes(label)}
                                onChange={() => handleCheckboxChange(label)}
                            />
                            <label htmlFor={`module-${index}`} className="text-sm">{label}</label>
                        </div>
                    ))}
                </div>

                <div className="flex items-end justify-end gap-4">
                    <button type="submit" className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                        Submit
                    </button>
                </div>
            </div>

            {/* Table box */}
            <div className="p-4 mt-5 shadow-md border rounded-md flex flex-col gap-4">
                <div className="flex justify-between items-center">
                    {/* Left: title */}
                    <div className="flex items-center space-x-2">
                        <span className="font-semibold text-black">Employee Roles</span>
                        <span className="font-bold px-2 py-0.5 text-sm rounded-full bg-gray-100 text-blue-600">0</span>
                    </div>

                    {/* Right: search + export */}
                    <div className="flex items-center justify-end space-x-4">
                        {/* Search Box */}
                        <div className="flex items-center border rounded-md overflow-hidden">
                            <input
                                type="text"
                                placeholder="Search by Product or Customer"
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

                {/* Table */}
                <div className="overflow-x-auto">
                    <table className="mb-4 min-w-full table-auto">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="text-left px-10 py-4 font-semibold text-black whitespace-nowrap">SL</th>
                                <th className="text-left px-10 py-2 font-semibold text-black whitespace-nowrap">Role Name</th>
                                <th className="px-10 py-2 font-semibold text-black whitespace-nowrap">Modules</th>
                                <th className="px-10 py-2 font-semibold text-black whitespace-nowrap">Created At</th>
                                <th className="px-10 py-2 font-semibold text-black whitespace-nowrap">Status</th>
                                <th className="px-10 py-2 font-semibold text-black whitespace-nowrap">Action</th>
                            </tr>
                        </thead>
                        <tbody>

                        </tbody>
                    </table>
                </div>

                {/* No data fallback */}
                <div className="flex flex-col justify-center items-center p-2 mt-6 gap-2">
                    <MdRunningWithErrors className="mt-20 text-9xl text-black-500" />
                    <p className="mb-10 text-sm text-gray-500 mt-2">No category found</p>
                </div>
            </div>
        </>
    );
}
