import { TbCategoryFilled } from "react-icons/tb";
import { IoDocumentTextOutline } from "react-icons/io5";

export default function Category() {
    return (
        <>
            <div className="flex items-center p-2 mt-6 gap-2 ">
                <TbCategoryFilled className="text-2xl text-black-500" />
                <h1 className="text-2xl font-bold">Category Setup</h1>
            </div>

            <div className="p-4 mt-2 flex justify-between gap-10 shadow-md border rounded-md">
                {/* LEFT SIDE */}
                <div className="w-1/2">
                    {/* Tabs */}
                    <div className="border-b mb-6">
                        <ul className="flex text-sm font-medium text-center">
                            <li>
                                <button className="inline-block p-4 border-b-2 border-blue-600 text-blue-600">English (EN)</button>
                            </li>
                            <li>
                                <button className="inline-block p-4 text-gray-500 hover:text-blue-600">Thai (TH)</button>
                            </li>
                        </ul>
                    </div>

                    {/* Category Name */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Category Name <span className="text-red-500">*</span> (EN)
                        </label>
                        <input
                            type="text"
                            placeholder="New Category"
                            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
                        />
                    </div>

                    {/* Priority */}
                    <div>
                        <label className="mt-5 block text-sm font-medium text-gray-700 mb-1">
                            Priority
                            <span className="inline-block ml-1 text-gray-400" title="Set the order priority">🛈</span>
                        </label>
                        <select className="mb-5 w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300">
                            <option disabled selected>Set Priority</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                        </select>
                    </div>
                </div>

                {/* RIGHT SIDE */}
                <div className="m-10 rounded-md bg-gray-50 w-1/2 flex flex-col items-center justify-start">
                    <label className="font-bold text-sm mb-1">Category Logo</label>
                    <p className="font-bold text-sm text-blue-600 mb-4">Ratio 1:1 (500 x 500 px)</p>

                    {/* Upload Box */}
                    <label className="flex flex-col items-center justify-center w-40 h-40 border-2 border-dashed rounded cursor-pointer hover:bg-gray-100">
                        <input type="file" className="hidden" />
                        <IoDocumentTextOutline className="text-2xl text-black-500" />
                        <span className="font-bold text-sm text-blue-500">Click to upload</span>
                        <span className="font-bold text-sm text-black-500">or drag and drop</span>
                    </label>

                    <p className="text-sm text-gray-500 mt-2">Image size: Max 2 MB</p>
                </div>
            </div>

            {/* Buttons */}
            <div className="flex justify-end space-x-4 mt-8">
                <button type="reset" className="px-4 py-2 border rounded text-gray-600 hover:bg-gray-100">Reset</button>
                <button type="submit" className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Submit</button>
            </div>
        </>
    );
}
