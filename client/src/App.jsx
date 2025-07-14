import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import MapView from './pages/MapView';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Chatbot from './components/Chatbot';
import Login from './pages/Login';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="min-h-screen bg-gray-100 w-screen overflow-x-auto">
      <Sidebar isOpen={isSidebarOpen} />
      <Navbar toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />

      <div
        className={`${isSidebarOpen ? 'pl-64' : 'pl-0'
          } pt-16 p-6 min-w-[1300px] transition-all duration-300`}
      >
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/map" element={<MapView />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>

      <Chatbot />
    </div>
  );
}

export default App;
