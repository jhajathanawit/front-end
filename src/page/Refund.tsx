import { MdPendingActions } from "react-icons/md";
import { CiSearch } from "react-icons/ci";

export default function Refund(){

    return (
        <>
            <div>
                <div className="flex items-center gap-2 p-2 mt-6">
                    <MdPendingActions className="text-3xl"/>
                    <h1 className="text-3xl">Pending Refund Requests</h1>
                    <div className="flex justify-center items-center gap-2 h-2 w-2 border rounded-md shadow-md bg-white p-2">
                        <p>0</p>
                    </div>
                </div>
                <div className="border rounded-md shadow-md bg-white p-2 mt-3 flex justify-between items-center">
                    <div>
                        <input type="text" placeholder="Search by order id or refund id" className="border w-[17rem] rounded-md mr-2 pr-4"/>
                        <button className="border rounded-full shadow-md bg-white p-1"><CiSearch /></button>
                    </div>
                    <div className="flex gap-2">
                        <button className="border rounded-md px-3 py-2 hover:border-blue-500 hover:text-blue-500">Export</button>
                        <select className="border rounded-md px-3 py-2" >
                            <option value="all">all</option>
                            <option value="order">order</option>
                            <option value="refund id">refund id</option>
                            <option value="id">id</option>
                        </select>
                    </div>
                </div>
               <div className="border rounded-md shadow-md bg-white mt-6">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr className="text-bold">              
                <th                  
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Sl
                </th>
                <th                  
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Refund ID
                </th>
                <th                  
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Order ID
                </th>
                <th                  
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Prodeuct Info
                </th>
                <th                  
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Customer Info
                </th>
                <th                  
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  customer Info
                </th>
             
            </tr>
          </thead>
          
            <img src="https://cdn-icons-png.flaticon.com/512/17426/17426090.png" alt="" />
              
           
          
        </table>

                
               </div>
            </div>
        </>
    )
}