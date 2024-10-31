import React from "react";
import { IoMdClose } from "react-icons/io";
import { MdGridView, MdOutlineReceiptLong, MdOutlineReport } from "react-icons/md";
import { IoPersonOutline, IoAnalyticsOutline, } from "react-icons/io5";
import { CiSettings } from "react-icons/ci";
import { MdProductionQuantityLimits } from "react-icons/md";

import { IoIosLogOut } from "react-icons/io";

function Left({ isOpen, toggleSidebar }) {
  return (
    <div
      className={`fixed inset-y-0 left-0 z-20 w-56 p-6 bg-gray-800 text-white transition-transform transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } md:relative md:translate-x-0`}
    >
      <aside className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">
            Hey, <span className="text-indigo-400">ShaziShiza</span>
          </h2>
          <button
            className="text-2xl md:hidden"
            onClick={toggleSidebar}
          >
            <IoMdClose />
          </button>
        </div>

        <div className="sidebar flex flex-col space-y-4">
          <a href="#" className="flex items-center space-x-3 p-2 rounded-md hover:bg-indigo-600">
            <MdGridView className="text-xl" />
            <h3 className="text-lg">Dashboard</h3>
          </a>
          <a href="#" className="flex items-center space-x-3 p-2 rounded-md hover:bg-indigo-600">
            <IoPersonOutline className="text-xl" />
            <h3 className="text-lg">Customers</h3>
          </a>
          <a href="#" className="flex items-center space-x-3 p-2 rounded-md hover:bg-indigo-600">
            <IoAnalyticsOutline className="text-xl" />
            <h3 className="text-lg">Analytics</h3>
          </a>
          <a href="#" className="flex items-center space-x-3 p-2 rounded-md hover:bg-indigo-600">
            <MdOutlineReceiptLong className="text-xl" />
            <h3 className="text-lg">Products</h3>
          </a>
          <a href="#" className="flex items-center space-x-3 p-2 rounded-md hover:bg-indigo-600">
            <MdOutlineReport className="text-xl" />
            <h3 className="text-lg">Reports</h3>
          </a>
          <a href="#" className="flex items-center space-x-3 p-2 rounded-md hover:bg-indigo-600">
            <CiSettings className="text-xl" />
            <h3 className="text-lg">Settings</h3>
          </a>
          <a href="#" className="flex items-center space-x-3 p-2 rounded-md hover:bg-indigo-600">
            <MdProductionQuantityLimits className="text-xl" />
            <h3 className="text-lg">Add Product</h3>
          </a> 
          <a href="#" className="flex items-center space-x-3 p-2 rounded-md hover:bg-indigo-600">
            <IoIosLogOut className="text-xl" />
            <h3 className="text-lg">Logout</h3>
          </a> 
        </div>
      </aside>
    </div>
  );
}

export default Left;
