import { NavLink } from 'react-router-dom';

export default function Sidebar({ isOpen }) {
  return (
    <div
      className={`bg-gray-800 text-white fixed h-screen top-0 left-0 z-50 pt-16 transition-all duration-300 ${isOpen ? 'w-64' : 'w-20'
        }`}
    >
      <ul className="p-4 space-y-4">
        <li>
          <NavLink
            to="/login"
            className={({ isActive }) =>
              `${isActive ? 'bg-gray-700' : 'hover:bg-gray-700'} 
       p-2 block rounded flex items-center gap-2`
            }
          >
            🔐 {!isOpen ? null : <span>Login</span>}
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${isActive ? 'bg-gray-700' : 'hover:bg-gray-700'} 
               p-2 block rounded flex items-center gap-2`
            }
          >
            📊 {!isOpen ? null : <span className="truncate">Dashboard</span>}
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/map"
            className={({ isActive }) =>
              `${isActive ? 'bg-gray-700' : 'hover:bg-gray-700'} 
               p-2 block rounded flex items-center gap-2`
            }
          >
            🗺️ {!isOpen ? null : <span className="truncate">Map View</span>}
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
