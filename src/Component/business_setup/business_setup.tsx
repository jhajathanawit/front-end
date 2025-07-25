export default function Business_setup() {
    return (
        <>
            <div className="flex items-center p-2 mt-6 gap-2">
                <h1 className="text-2xl font-bold">Business Setup</h1>
            </div>

            <div className="flex space-x-4 mt-4">
                <button className="px-4 py-2 rounded-full bg-blue-700 text-white font-semibold">
                    General
                </button>
                <button className="px-4 py-2 rounded-full text-gray-600 font-semibold">
                    Website Setup
                </button>
                <button className="px-4 py-2 rounded-full text-gray-600 font-semibold">
                    Vendors
                </button>
                <button className="px-4 py-2 rounded-full text-gray-600 font-semibold">
                    Products
                </button>
                <button className="px-4 py-2 rounded-full text-gray-600 font-semibold">
                    Delivery Men
                </button>
                <button className="px-4 py-2 rounded-full text-gray-600 font-semibold">
                    Customer
                </button>
                <button className="px-4 py-2 rounded-full text-gray-600 font-semibold">
                    Orders
                </button>
                <button className="px-4 py-2 rounded-full text-gray-600 font-semibold">
                    Refund
                </button>
                <button className="px-4 py-2 rounded-full text-gray-600 font-semibold">
                    Shipping Method
                </button>
                <button className="px-4 py-2 rounded-full text-gray-600 font-semibold">
                    Delivery Restriction
                </button>
                <button className="px-4 py-2 rounded-full text-gray-600 font-semibold">
                    Invoice
                </button>
            </div>

            <div className="p-4 mt-5 shadow-md border rounded-md">
                {/* Maintenance Mode Section */}
                <div className="flex justify-between items-center py-4">
                    <h2 className="text-xl font-semibold">Maintenance Mode</h2>
                    <label className="flex items-center cursor-pointer">
                        <span className="mr-2 text-sm text-gray-600">Turn on the maintenance mode will temporarily deactivate your selected systems as of your chosen date and time.</span>
                        <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-500" />
                    </label>
                </div>
            </div>
        </>
    );
}
