import React, { useState, useEffect } from "react";
import { IoMdMenu } from "react-icons/io";
import { MdOutlineLightMode, MdDarkMode } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";

function Right({ toggleSidebar }) {
    const [isDarkMode, setIsDarkMode] = useState(false);
  
    const toggleDarkMode = () => {
      setIsDarkMode((prevMode) => !prevMode);
      localStorage.setItem("darkMode", !isDarkMode);
    };
  
    useEffect(() => {
      const savedMode = localStorage.getItem("darkMode");
      if (savedMode === "true") {
        setIsDarkMode(true);
      }
    }, []);


const handler3 = ()=>{
    document.getElementById('hey2').style.color = 'black'
    document.getElementById('hey3').style.color = 'black'

    
}

const handler4= ()=>{
     document.getElementById('hey2').style.color = 'white'
    document.getElementById('hey3').style.color = 'white'
}

  return (
    <aside className={`min-h-screen  text-white w-64 ${isDarkMode ? "bg-white" : "bg-gray-900"} overflow-y-auto`}> {/* Added overflow-y-auto for scrolling */}
      <div className={`flex items-center justify-between mb-4`}>
        <button id="menu_bar" className="text-2xl md:hidden" onClick={toggleSidebar}>
          <IoMdMenu />
        </button>
        <div className="theme-toggler flex items-center">
        <button onClick={toggleDarkMode} className="text-xl">
          {isDarkMode ? <MdOutlineLightMode className="text-black" onClick={handler4} /> : <MdDarkMode onClick={handler3} />}
        </button>
        </div>
      </div>

      <div className={`flex-grow m-1`}>
        <div className="recent_updates mb-6">
          <h2 className="text-lg font-semibold text-whitemb-4" id="hey2">Recent Updates</h2>
          <div className="updates space-y-2" >
            {[ 
              { user: "shazi", action: "Received his order of phone", imgSrc: "https://media.istockphoto.com/id/1995160648/photo/wide-angle-shot-of-gen-z-group-of-friends-hanging-out-together.webp?a=1&b=1&s=612x612&w=0&k=20&c=uvb3NS_A00SwgFxZPvoY71kZDt--KoHdBVsUToH94Jo=" },
              { user: "shiza", action: "sold this building", imgSrc: "https://images.unsplash.com/photo-1724962508958-7a164cf8492f?w=600&auto=format&fit=crop&q=60" },
              { user: "Ali", action: "this is beautiful building", imgSrc: "https://media.istockphoto.com/id/2137374147/photo/relaxed-group-sitting-outdoors-in-sunshine-and-talking.webp?a=1&b=1&s=612x612&w=0&k=20&c=PeY-grAaGb5D7wwASoR03pcKpdg8JcKgHlWamzexc1U=" }
            ].map((update, index) => (
              <div key={index} className="flex items-center p-2 bg-white rounded-lg shadow hover:bg-gray-100" >
                <div className="profile-photo mr-2">
                  <img src={update.imgSrc} alt={update.user} className="w-12 h-12 rounded-full" />
                </div>
                <div className="message">
                  <p className="text-gray-800">
                    <b>{update.user}</b> {update.action}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="sales-analytics mb-6">
          <h2 className="text-lg font-semibold text-white mb-4" id="hey3">Sales Analytics</h2>
          {[ 
            { title: "Online Orders", value: "3849", percentage: "-17%", status: "danger" },
            { title: "Total Sales", value: "$25,024", percentage: "80%", status: "success" },
            { title: "New Customers", value: "1,024", percentage: "90%", status: "success" }
          ].map((item, index) => (
            <div key={index} className="item flex items-center p-4 bg-white rounded-lg shadow mb-2">
              <div className="icon text-3xl mr-4">
                <FaShoppingCart />
              </div>
              <div className="right_text flex-grow">
                <div className="info">
                  <h3 className="text-md font-semibold text-gray-700">{item.title}</h3>
                  <small className="text-muted">Last seen 2 Hours</small>
                </div>
                <h5 className={item.status === "danger" ? "text-red-600" : "text-green-600"}>{item.percentage}</h5>
                <h3 className="text-xl font-bold text-gray-800">{item.value}</h3>
              </div>
            </div>
          ))}
        </div>

        <div className="item add_product">
          <div className="flex items-center justify-center p-4 bg-indigo-600 rounded-lg text-white">
            <IoMdAdd className="text-3xl" />
          </div>
        </div>
      </div>
    </aside>
  );
}

export default Right;
