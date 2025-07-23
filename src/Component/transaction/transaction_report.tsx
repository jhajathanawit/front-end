import { FcPositiveDynamic } from "react-icons/fc";

export default function Transaction_report() {
    return (
        <>
            <div className="mb-4 flex items-center p-2 mt-6 gap-2 ">
                <FcPositiveDynamic className="text-2xl text-black-500" />
                <h1 className="text-2xl font-bold">Transaction Report</h1>
            </div>

            <div className="flex space-x-4">
                <button className="px-4 py-2 rounded-full bg-blue-700 text-white font-semibold">
                    Order Transactions
                </button>
                <button className="px-4 py-2 rounded-full text-gray-600 font-semibold">
                    Expense Transactions
                </button>
                <button className="px-4 py-2 rounded-full text-gray-600 font-semibold">
                    Refund Transactions
                </button>
            </div>

            <div className="p-4 mt-5 shadow-md border rounded-md flex flex-col gap-4">
                <div className="flex">
                    <div className="w-1/4">
                        <h1 className="font-bold text-lg">Filter Data</h1>
                        <label className="text-gray-500">Select status</label>
                        <select className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300">
                            <option disabled selected>All status</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                        </select>
                    </div>

                    <div className="w-1/4 ml-2 mt-7">
                        <label className="text-gray-500">Select seller</label>
                        <select className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300">
                            <option disabled selected>All</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                        </select>
                    </div>

                    <div className="w-1/4 ml-2 mt-7">
                        <label className="text-gray-500">Select customer</label>
                        <select className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300">
                            <option disabled selected>All customer</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                        </select>
                    </div>

                    <div className="w-1/4 ml-2 mt-7">
                        <label className="text-gray-500">Select date</label>
                        <select className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300">
                            <option disabled selected>This Year</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                        </select>
                    </div>
                </div>
            </div>
        </>
    );
}
