import React, { useState } from "react";
import Left from './components/leftSide/Left';
import Main from './components/mainSide/main';
import Right from './components/RightSide/Right';
import './App.css';

function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen">
      <Left isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <Main />
      <Right toggleSidebar={toggleSidebar} />
    </div>
  );
}

export default App;
