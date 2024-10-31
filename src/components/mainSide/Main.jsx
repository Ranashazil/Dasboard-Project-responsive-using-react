import React,{useState, useEffect} from "react";
import { MdLocalMall, MdOutlineStackedLineChart } from "react-icons/md";
import { IoIosTrendingUp } from "react-icons/io";
import { MdOutlineLightMode, MdDarkMode } from "react-icons/md";
function Main() {

        const [isDarkMode, setIsDarkMode] = useState(false);
      
        const toggleDarkMode = () => {
          setIsDarkMode((prevMode) => !prevMode);
          // Save the preference in localStorage
          localStorage.setItem("darkMode", !isDarkMode);
        };
      
        useEffect(() => {
          // Check for saved mode in localStorage
          const savedMode = localStorage.getItem("darkMode");
          if (savedMode === "true") {
            setIsDarkMode(true);
          }
        }, []);

const handler = ()=>{
    document.getElementById('hey').style.color = 'black'
}
const handler2 = ()=>{
    document.getElementById('hey').style.color = 'white'
}
  return (
    <main className={`flex-1 p-8 bg-gray-100 min-h-screen flex flex-col ${isDarkMode? "bg-gray-100" : "bg-gray-800"}`}> {/* Ensure it fills the height and is a flex container */}
      <div className="theme-toggler flex items-center">
          <button onClick={toggleDarkMode} className="text-xl">
            {isDarkMode ? <MdOutlineLightMode onClick={handler2} /> : <MdDarkMode className="text-white"  onClick={handler} />}
          </button>
        </div>
      {/* Dashboard Header */}
      <header className="w-full flex items-center justify-between mb-6">
        <h1 className="text-2xl  font-bold text-gray-800" id="hey">Dashboard</h1>
        <input type="date" className="border p-2 rounded-md bg-white text-gray-700 focus:outline-none" />
    
      </header>

      {/* Stats Section */}
      <div className="flex gap-6 mb-6">
        {[
          { Icon: IoIosTrendingUp, title: "Total Sales", value: "$25,024", percentage: "80%", color: "text-green-500" },
          { Icon: MdLocalMall, title: "Total Orders", value: "2,312", percentage: "65%", color: "text-blue-500" },
          { Icon: MdOutlineStackedLineChart, title: "New Customers", value: "1,024", percentage: "90%", color: "text-purple-500" }
        ].map((stat, index) => (
          <div key={index} className="flex-1 p-5 bg-white rounded-lg shadow-md flex items-center space-x-4">
            <stat.Icon className={`text-3xl ${stat.color}`} />
            <div className="ml-4">
              <h3 className="text-md font-semibold text-gray-700">{stat.title}</h3>
              <h1 className="text-xl font-bold text-gray-800">{stat.value}</h1>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Orders Table */}
      <section className="bg-white p-5 rounded-lg shadow-md flex-1 overflow-y-auto"> {/* Use flex-1 for height */}
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Recent Orders</h2>
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left">Product Name</th>
              <th className="py-3 px-6 text-left">Product Number</th>
              <th className="py-3 px-6 text-center">Payments</th>
              <th className="py-3 px-6 text-center">Status</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
            {[
              { name: "Mini USB", number: "4563", payment: "Due", status: "Pending" },
              { name: "Phone Case", number: "7890", payment: "Paid", status: "Completed" }
            ].map((order, index) => (
              <tr key={index} className="border-b border-gray-200 hover:bg-gray-100">
                <td className="py-3 px-6 text-left">{order.name}</td>
                <td className="py-3 px-6 text-left">{order.number}</td>
                <td className="py-3 px-6 text-center">{order.payment}</td>
                <td className="py-3 px-6 text-center">
                  <span className={`px-2 py-1 rounded-full text-xs ${order.status === "Pending" ? "bg-yellow-200 text-yellow-800" : "bg-green-200 text-green-800"}`}>
                    {order.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </main>
  );
}

export default Main;
