import { MdProductionQuantityLimits } from "react-icons/md";
import Editor from "../Component/inputOption/Editor";
import { IoMdPerson } from "react-icons/io";
import { RxSlider } from "react-icons/rx";
import { MdCloudUpload } from "react-icons/md";


export default function NewProduct() {
  return (
    <>
      <div className="flex items-center gap-2 p-2 mt-6">
        <MdProductionQuantityLimits className="text-3xl" />
        <h1 className="text-3xl">Add New Product</h1>
      </div>

      <div className="flex justify-between p-4 mt-3">
        <div className="flex gap-2">
          <button className="font-bold hover:border-b hover:border-blue-500 hover:text-blue-500">
            English(EN)
          </button>
          <button className="font-bold hover:border-b hover:border-blue-500 hover:text-blue-500">
            Thai(TH)
          </button>
        </div>
        <div>
          <button className="border rounded-md text-white bg-blue-600 hover:bg-blue-100 hover:text-black hover:font-bold px-4 py-1">
            + Add Info from Gallery
          </button>
        </div>
      </div>
      <div className="pb-5">
        <div>
          <p className="text-gray-700">Product name(EN)</p>
          <input
            type="text"
            placeholder="Ex: New Product"
            className="border rounded-md w-100 pl-2 m-4"
          />
        </div>

        <div className="mt-2 ">
          <p className="text-gray-700 pb-3">Description (EN)</p>
          <Editor />
        </div>
      </div>

      <div className="border rounded-md shadow-md bg-white p-4 mt-10">
        <div className="flex items-center p-4  gap-2">
          <IoMdPerson />
          <h2 className="font-bold">General setup</h2>
        </div>
        <div className="grid grid-cols-4 gap-4 p-4">
          <div>
            <p>Category</p>
            <select
              aria-placeholder="Select Category"
              className="border rounded-md w-full pl-2 m-2"
            >
              <option value="" disabled selected>
                กรุณาเลือก Category
              </option>{" "}
              {/* ข้อความ default */}
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>

          <div>
            <p>Sub Sub Category</p>
            <select
              aria-placeholder="Select Category"
              className="border rounded-md w-full pl-2 m-2"
            >
              <option value="" disabled selected>
                กรุณาเลือก Sub Sub Category
              </option>{" "}
              {/* ข้อความ default */}
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>

          <div>
            <p>Brand</p>
            <select
              aria-placeholder="Select Category"
              className="border rounded-md w-full pl-2 m-2"
            >
              <option value="" disabled selected>
                กรุณาเลือก Brand
              </option>{" "}
              {/* ข้อความ default */}
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>

          <div>
            <p>Product type</p>
            <select
              aria-placeholder="Select Category"
              className="border rounded-md w-full pl-2 m-2"
            >
              <option value="" disabled selected>
                กรุณาเลือก Product type
              </option>{" "}
              {/* ข้อความ default */}
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>

          <div>
            <p>Product SKU</p>
            <select
              aria-placeholder="Select Category"
              className="border rounded-md w-full pl-2 m-2"
            >
              <option value="" disabled selected>
                กรุณาเลือก Product SKU
              </option>{" "}
              {/* ข้อความ default */}
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>

          <div>
            <p>Unit</p>
            <select
              aria-placeholder="Select Category"
              className="border rounded-md w-full pl-2 m-2"
            >
              <option value="" disabled selected>
                กรุณาเลือก Unit
              </option>{" "}
              {/* ข้อความ default */}
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>
        </div>
        <div className="p-4">
          <p>Search tags</p>
          <input
            type="text"
            placeholder="Enter tag"
            className="p-2 m-2 w-full border rounded-md"
          />
        </div>
      </div>
      <div className="border rounded-md shadow-md bg-white p-4">
        <div className="flex items-center p-4  gap-2">
          <IoMdPerson />
          <p className="font-bold">Pricing & others</p>
        </div>
        <div>
          <div className="grid grid-cols-4 gap-4 p-4">
            <div>
              <p>Unit price</p>
              <select
                aria-placeholder="Select Category"
                className="border rounded-md w-full pl-2 m-2"
              >
                <option value="" disabled selected>
                  กรุณาเลือก Unit price
                </option>{" "}
                {/* ข้อความ default */}
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </div>

            <div>
              <p>Minimum order qty (฿)</p>
              <select
                aria-placeholder="Select Category"
                className="border rounded-md w-full pl-2 m-2"
              >
                <option value="" disabled selected>
                  กรุณาเลือก Sub Sub Category
                </option>{" "}
                {/* ข้อความ default */}
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </div>

            <div>
              <p>Brand</p>
              <select
                aria-placeholder="Select Category"
                className="border rounded-md w-full pl-2 m-2"
              >
                <option value="" disabled selected>
                  กรุณาเลือก Brand
                </option>{" "}
                {/* ข้อความ default */}
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </div>

            <div>
              <p>Product type</p>
              <select
                aria-placeholder="Select Category"
                className="border rounded-md w-full pl-2 m-2"
              >
                <option value="" disabled selected>
                  กรุณาเลือก Product type
                </option>{" "}
                {/* ข้อความ default */}
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </div>

            <div>
              <p>Product SKU</p>
              <select
                aria-placeholder="Select Category"
                className="border rounded-md w-full pl-2 m-2"
              >
                <option value="" disabled selected>
                  กรุณาเลือก Product SKU
                </option>{" "}
                {/* ข้อความ default */}
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </div>

            <div>
              <p>Unit</p>
              <select
                aria-placeholder="Select Category"
                className="border rounded-md w-full pl-2 m-2"
              >
                <option value="" disabled selected>
                  กรุณาเลือก Unit
                </option>{" "}
                {/* ข้อความ default */}
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </div>
          </div>

          {/*here*/}
          <div className="flex items-center ml-4 p-2 justify-between rounded-md w-1/2 border">
            <p>Shipping cost mutiply with quantity</p>

            <button>
              <RxSlider />
            </button>
          </div>
        </div>
      </div>
      <div className="border rounded-md shadow-md bg-white p-4 mt-3">
        <div className="flex items-center p-4 border-b gap-2">
          <IoMdPerson />
          <p className="font-bold">Product variation setup</p>
        </div>
        <div className="grid grid-cols-2 gap-4 p-4">
          <div>
            <p>Select colors : slide bar</p>
            <select className="border rounded-md w-full pl-2 m-2 bg-wheate-300">
              <option value="color">color</option>
            </select>
          </div>
          <div>
            <p>Select attributes :</p>
            <select className="border rounded-md w-full pl-2 m-2 bg-wheate-300">
              <option value="" disabled selected>
                Choose attributes
              </option>{" "}
              <option value="color">color</option>
            </select>
          </div>
        </div>
      </div>
      {/* upload */}
      <div className="flex gap-4  mt-3">
        <div className="border rounded-md shadow-md bg-white p-4 w-1/4">
          <p>Product thumbnail</p>
          <p className="text-blue-700">ratio 1:1 (500 x 500 px)</p>
          <div className="flex flex-col justify-center items-center gap-2 h-40 w-full  bg-white p-4 mt-3">
            <MdCloudUpload />
            <p className="text-blue-500">Click to upload</p>
            <p>Or drag and drop</p>
          </div>
        </div>

        <div className="border rounded-md shadow-md bg-white p-4 w-3/4">
          <div className="flex items-center p-2 gap-2">
            <p>Upload additional image </p>
            <p className="text-blue-700">Ratio 1:1 (500 x 500 px)</p>
          </div>

          <p className="text-gray-300 pl-2">Upload additional product images</p>
          <div className="flex flex-col justify-center items-center gap-2 h-40 w-full  bg-white p-4 mt-3">
            <MdCloudUpload />
            <p className="text-blue-500">Click to upload</p>
            <p>Or drag and drop</p>
          </div>
        </div>
      </div>
      <div className="border rounded-md shadow-md bg-white p-4">
        <div className="border-b py-6">
          <p className="font-bold">Product video</p>
        </div>
        <div className="flex py-3">
          <p>Youtube video link </p>
          <p className="text-blue-700">
            {" "}
            (Optional please provide embed link not direct link.)
          </p>
        </div>
        <input
          type="text"
          placeholder="Ex: https://something"
          className="w-full p-2"
        />
      </div>

      <div className="border rounded-md shadow-md bg-white  mt-3">
        <div className="flex items-center p-4 border-b gap-2">
          <IoMdPerson />
          <p className="text-bold">Seo section</p>
        </div>
        <div className="flex gap-2">
          <div className="p-4 w-3/4 gap-2 border rounded-md shadow-md bg-white">
            <div className="mb-4">
              <p className="text-bold">Meta Title</p>
              <input
                type="text"
                placeholder="Meta Title"
                className="w-full p-2"
              />
            </div>
            <div>
              <p className="Text-bold mb-2">Meta Description</p>
              <input
                type="text"
                className="w-full h-[10rem] border rounded-md"
              />
            </div>
          </div>

          <div className="border rounded-md shadow-md bg-white p-4 ">
            <div className="flex items-center p-2 gap-2">
              <p>Upload additional image </p>
              <p className="text-blue-700">Ratio 1:1 (500 x 500 px)</p>
            </div>

            <p className="text-gray-300 pl-2">
              Upload additional product images
            </p>
            <div className="flex flex-col justify-center items-center gap-2 h-40 w-full  bg-white p-4 mt-3">
              <MdCloudUpload />
              <p className="text-blue-500">Click to upload</p>
              <p>Or drag and drop</p>
            </div>
          </div>
        </div>
        <div className="flex p-4 w-full gap-2">
          <div className="grid grid-cols-2 border rounded-md shadow-md bg-white p-4 gap-4">
            <div className="flex gap-2 items-center ">
              <input type="checkbox" name="Index" />
              <p>Index</p>
            </div>
            <div className="flex gap-2 items-center ">
              <input type="checkbox" name="Index" />
              <p>No index</p>
            </div>
            <div className="flex gap-2 items-center ">
              <input type="checkbox" name="Index" />
              <p>No Follow</p>
            </div>
            <div className="flex gap-2 items-center ">
              <input type="checkbox" name="Index" />
              <p>No Archive</p>
            </div>
            <div className="flex gap-2 items-center ">
              <input type="checkbox" name="Index" />
              <p>No image indox</p>
            </div>
            <div className="flex gap-2 items-center ">
              <input type="checkbox" name="Index" />
              <p>No Snippet</p>
            </div>
          </div>
          <div className="grid grid-cols-2 border rounded-md shadow-md bg-white p-4 gap-4">
            <div className="flex gap-2 items-center ">
              <input type="checkbox" name="Index" />
              <p>Index</p>
            </div>
            <div className="flex gap-2 items-center ">
              <input type="checkbox" name="Index" />
              <p>No index</p>
            </div>
            <div className="flex gap-2 items-center ">
              <input type="checkbox" name="Index" />
              <p>No Follow</p>
            </div>
            <div className="flex gap-2 items-center ">
              <input type="checkbox" name="Index" />
              <p>No Archive</p>
            </div>
            <div className="flex gap-2 items-center ">
              <input type="checkbox" name="Index" />
              <p>No image indox</p>
            </div>
            <div className="flex gap-2 items-center ">
              <input type="checkbox" name="Index" />
              <p>No Snippet</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
