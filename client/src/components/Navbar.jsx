export default function Navbar({ toggleSidebar }) {
  return (
    <div className="fixed top-0 left-0 right-0 h-16 bg-white shadow-md flex items-center justify-between px-6 z-50">
      <div className="flex items-center gap-4">
       
        <button
          onClick={toggleSidebar}
          className="text-gray-800 text-2xl focus:outline-none"
        >
          ☰
        </button>
        <h1 className="text-xl font-bold text-gray-800">Builder Dashboard</h1>
      </div>
      <span className="text-gray-600">Welcome, Harshitha!</span>
    </div>
  );
}
