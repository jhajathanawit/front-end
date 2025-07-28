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

            <div className="p-4 mt-5 shadow-md rounded-md">
                {/* Maintenance Mode Section */}
                <div className="flex justify-between items-center py-4">
                    <div>
                        <h2 className="text-xl font-semibold">Maintenance Mode</h2>
                        <label className="flex items-center cursor-pointer">
                            <span className="mr-2 text-sm text-gray-600">Turn on the maintenance mode will temporarily deactivate your selected systems as of your chosen date and time.</span>
                        </label>
                    </div>

                    {/* Right Side (Toggle Switch) */}
                    <div className="flex gap-32 items-center border rounded-lg p-4 space-x-2">
                        <span className="text-sm font-medium text-gray-900">Maintenance Mode</span>
                        <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" className="   sr-only peer" />
                            <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-blue-600 peer-focus:ring-2 peer-focus:ring-blue-500 transition-all duration-200"></div>
                            <div className="absolute left-0.5 top-0.5 w-5 h-5 bg-white rounded-full transition-all duration-200 peer-checked:translate-x-full"></div>
                        </label>
                    </div>
                </div>
            </div>

            <div className="p-4 mt-5 shadow-md border rounded-md">
                {/* Header */}
                <div className="mb-4 pb-2 border-b border-gray-200">
                    <h2 className="text-xl font-semibold">Basic Information</h2>
                    <p className="text-sm text-gray-600">
                        Here you setup your all business information.
                    </p>
                </div>

                {/* Form and Map Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Form - spans 2/3 */}
                    <div className="lg:col-span-2 space-y-4">
                        {/* Row 1: Company Name & Email */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Company Name</label>
                                <input type="text" placeholder="Type your company name" className="mt-1 block w-full border rounded-md px-3 py-2 shadow-sm focus:ring-blue-500 focus:border-blue-500" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Email</label>
                                <input type="email" value="Copy@6amtech.com" className="mt-1 block w-full border rounded-md px-3 py-2 shadow-sm focus:ring-blue-500 focus:border-blue-500" />
                            </div>
                        </div>

                        {/* Row 2: Phone & Country */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Phone</label>
                                <div className="flex items-center space-x-2 mt-1">
                                    <input
                                        type="tel"
                                        placeholder="Ex: 012XXXXXX"
                                        pattern="[0-9]{10}"
                                        maxLength={10}
                                        className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Country</label>
                                <input type="text" value="Bangladesh" className="mt-1 block w-full border rounded-md px-3 py-2 shadow-sm focus:ring-blue-500 focus:border-blue-500" />
                            </div>
                        </div>

                        {/* Row 3: Timezone & Pagination */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Time Zone</label>
                                <select className="mt-1 block w-full border rounded-md px-3 py-2 shadow-sm text-gray-500 focus:ring-blue-500 focus:border-blue-500">
                                    <option>Select from dropdown</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    Pagination
                                </label>
                                <input type="number" value="10" className="mt-1 block w-full border rounded-md px-3 py-2 shadow-sm focus:ring-blue-500 focus:border-blue-500" />
                            </div>
                        </div>

                        {/* Address */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Address
                            </label>
                            <textarea
                                placeholder="Ex : House#38  Road#04  Demo City"
                                className="mt-1 block w-full border rounded-md px-3 py-2 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                rows={1}
                            />
                        </div>

                        {/* Hint */}
                        <div className="bg-blue-50 border border-blue-200 text-black text-sm rounded-md px-4 py-3">
                            💡 For the address setup you can simply drag the map to pick for the perfect <strong>Lat(Latitude)</strong> & <strong>Long(Longitude)</strong> Value.
                        </div>
                    </div>

                    {/* Map - spans 1/3 */}
                    <div className="w-full h-full">
                        <div className="w-full h-full min-h-[360px] rounded-md overflow-hidden">
                            <iframe
                                title="Google Map"
                                src="https://maps.google.com/maps?q=-33.8688,151.2195&z=15&output=embed"
                                className="w-full h-full border-0"
                                loading="lazy"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>

            <div className="p-4 mt-5 shadow-md border rounded-md">
                {/* General Setup Header */}
                <div className="mb-4 pb-2 border-b border-gray-200">
                    <h2 className="text-xl font-semibold">General Setup</h2>
                    <p className="text-sm text-gray-600">
                        Here you can manage currency settings to match with your business criteria
                    </p>
                </div>

                {/* Currency Setup Block */}
                <div className="bg-white border rounded-md p-4">
                    {/* Currency Setup Title */}
                    <div className="mb-4 pb-2 border-b border-gray-100">
                        <h3 className="text-md font-semibold">Currency Setup</h3>
                        <p className="text-sm text-gray-600">
                            Here you can manage currency settings to match with your business criteria
                        </p>
                    </div>

                    {/* Warning Message */}
                    <div className="bg-red-100 text-black text-sm rounded-md px-4 py-3 mb-5 border border-red-200">
                        ⚠️ Currently no payment gateway supported for USD currency. Select at least one gateway that support USD to digital payment work properly.
                    </div>

                    {/* Form Fields */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                        {/* Select Currency */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Select Currency
                            </label>
                            <select className="block w-full border rounded-md px-3 py-2 shadow-sm focus:ring-blue-500 focus:border-blue-500">
                                <option>USD</option>
                            </select>
                        </div>

                        {/* Currency Position */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Currency Position
                            </label>
                            <div className="flex items-center space-x-4 border rounded-md px-3 py-2">
                                <label className="flex items-center space-x-1">
                                    <input type="radio" name="position" defaultChecked />
                                    <span>($) Left</span>
                                </label>
                                <label className="flex items-center space-x-1">
                                    <input type="radio" name="position" />
                                    <span>($) Right</span>
                                </label>
                            </div>
                        </div>

                        {/* Digit After Decimal */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Digit After Decimal Point
                            </label>
                            <input
                                type="number"
                                value="2"
                                className="block w-full border rounded-md px-3 py-2 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                readOnly
                            />
                        </div>
                    </div>

                    {/* Info Message */}
                    <div className="bg-blue-50 text-black text-sm rounded-md px-4 py-3 border border-blue-100">
                        💡 You can also set up your default and multiple currency from{" "}
                        <a href="#" className="text-blue-600 underline hover:text-blue-800">
                            Currency Setup
                        </a>
                    </div>
                </div>
            </div>

            <div className="p-4 mt-5 shadow-md border rounded-md">
                {/* Header */}
                <div className="mb-4 pb-2 border-b border-gray-200">
                    <h2 className="text-xl font-semibold">Business Model Setup</h2>
                    <p className="text-sm text-gray-600">
                        Here you can setup which type of business model you want to sell your products. You can choose only one option at a time.
                    </p>
                </div>

                {/* Business Model Section */}
                <div className="bg-gray-50 p-4 rounded-md mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Select Business Model
                    </label>

                    <div className="flex flex-col md:flex-row gap-4 bg-white rounded-md p-4">
                        {/* Single Vendor */}
                        <div className="flex-1 rounded-md p-2">
                            <label className="flex items-start space-x-3 cursor-pointer">
                                <input
                                    type="radio"
                                    name="business_model"
                                    value="single"
                                    className="mt-1"
                                />
                                <div>
                                    <span className="font-semibold">Single Vendor</span>
                                    <p className="text-sm text-gray-600 mt-1">
                                        Sell products exclusively from your in-house shops only
                                    </p>

                                    <div className="mt-3 bg-yellow-50 border border-yellow-200 text-yellow-700 text-sm rounded-md px-4 py-3">
                                        You can change setup of your shop from here{" "}
                                        <a
                                            href="#"
                                            className="text-blue-600 underline hover:text-blue-800"
                                        >
                                            In house Shop Settings
                                        </a>
                                    </div>
                                </div>
                            </label>
                        </div>

                        {/* Multi Vendor */}
                        <div className="flex-1 rounded-md p-2">
                            <label className="flex items-start space-x-3 cursor-pointer">
                                <input
                                    type="radio"
                                    name="business_model"
                                    value="multi"
                                    defaultChecked
                                    className="mt-1"
                                />
                                <div>
                                    <span className="font-semibold">Multi Vendor</span>
                                    <p className="text-sm text-gray-600 mt-1">
                                        Alongside your store multiple vendors can register and open their store
                                    </p>

                                    <div className="mt-3 bg-blue-50 border border-blue-100 text-blue-700 text-sm rounded-md px-4 py-3">
                                        💡 After turn on you can setup more setting for other vendors from vendors settings.{" "}
                                        <a
                                            href="#"
                                            className="text-blue-600 underline hover:text-blue-800"
                                        >
                                            Vendor Settings
                                        </a>
                                    </div>
                                </div>
                            </label>
                        </div>
                    </div>
                </div>

                {/* Default Commission */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Default commission
                    </label>
                    <input
                        type="number"
                        defaultValue="0"
                        className="block w-full border rounded-md px-3 py-2 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>
            </div>

            <div className="p-4 mt-5 shadow-md border rounded-md">
                {/* Header */}
                <div className="mb-4 pb-2 border-b border-gray-200">
                    <h2 className="text-xl font-semibold">Payment Options</h2>
                    <p className="text-sm text-gray-600">
                        Enable preferred payment methods to make payments from customer app and website
                    </p>
                </div>

                {/* Outer gray border box */}
                <div className="bg-gray-50 p-4 rounded-md ">
                    <div className="bg-white p-4 flex items-center rounded-md shadow-sm border border-gray-200 space-y-4">
                        {/* Cash on delivery */}
                        <label className="flex items-start space-x-3 cursor-pointer">
                            <input type="checkbox" defaultChecked className="mt-1" />
                            <div>
                                <span className="font-semibold text-gray-900">Cash on delivery</span>
                                <p className="text-xs text-gray-600 mt-1 max-w-[600px]">
                                    Enabling cash on delivery (COD) Will make it available as a payment option for customers during the checkout process
                                </p>
                            </div>
                        </label>

                        {/* Digital payment */}
                        <label className="flex items-start space-x-3 cursor-pointer">
                            <input type="checkbox" defaultChecked className="mt-1" />
                            <div>
                                <span className="font-semibold text-gray-900">Digital payment</span>
                                <p className="text-xs text-gray-600 mt-1 max-w-[600px]">
                                    Enabling digital payment will make it available as a payment option for customers during the checkout process.{' '}
                                    <a href="#" className="text-blue-600 underline hover:text-blue-800">
                                        Digital payment methods
                                    </a>
                                </p>
                            </div>
                        </label>

                        {/* Offline payment */}
                        <label className="flex items-start space-x-3 cursor-pointer">
                            <input type="checkbox" className="mt-1" />
                            <div>
                                <span className="font-semibold text-gray-900">Offline payment</span>
                                <p className="text-xs text-gray-600 mt-1 max-w-[600px]">
                                    Enabling offline payment will make it available as a payment option for customers during the checkout process.{' '}
                                    <a href="#" className="text-blue-600 underline hover:text-blue-800">
                                        Offline payment methods
                                    </a>
                                </p>
                            </div>
                        </label>
                    </div>
                </div>
            </div>

            <div className="mt-6 p-5 rounded-md border shadow-sm bg-white max-w-full">
                {/* Header */}
                <div className="mb-5">
                    <h2 className="text-lg font-semibold">Copyright & Cookies Text</h2>
                    <p className="text-sm text-gray-600 mt-1">
                        Add the necessary texts to display in required sections
                    </p>
                </div>

                {/* Form inputs container with light gray background */}
                <div className="bg-gray-50 rounded-md p-5 flex space-x-5 items-start">
                    {/* Copyright Text */}
                    <div className="flex-1">
                        <label htmlFor="copyright" className="block font-medium text-gray-700 mb-1">
                            Copyright Text
                        </label>
                        <textarea
                            id="copyright"
                            maxLength={100}
                            defaultValue="CopyRight 6amTech@2021"
                            rows={1}
                            className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>

                    {/* Cookies Text */}
                    <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                            <label className="text-sm font-medium text-gray-700 flex items-center gap-1">
                                Cookies Text
                            </label>
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" className="   sr-only peer" />
                                <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-blue-600 peer-focus:ring-2 peer-focus:ring-blue-500 transition-all duration-200"></div>
                                <div className="absolute left-0.5 top-0.5 w-5 h-5 bg-white rounded-full transition-all duration-200 peer-checked:translate-x-full"></div>
                            </label>
                        </div>
                        <textarea
                            id="cookies"
                            maxLength={100}
                            placeholder="Type about the description"
                            rows={1}
                            className="w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>
                </div>
            </div>

            <div className="flex justify-end space-x-3 mt-6">
                <button type="reset" className="px-6 py-2 border rounded bg-gray-100 text-black-600 hover:bg-gray-200">Reset</button>
                <button
                    type="submit"
                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                    Save information
                </button>
            </div>
        </>
    );
}
