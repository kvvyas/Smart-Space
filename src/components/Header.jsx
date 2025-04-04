import { useEffect, useState } from 'react';
import { CgProfile } from "react-icons/cg";
import { Link } from 'react-router-dom';

function Header() {
  const [user, setUser] = useState(localStorage.getItem("user") || null);

  useEffect(() => {
    // ✅ Listen for login changes
    const checkUser = () => {
      setUser(localStorage.getItem("user"));
    };
    window.addEventListener("storage", checkUser);

    return () => window.removeEventListener("storage", checkUser);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <header className="flex items-center justify-between px-4 py-2 shadow-md" style={{ backgroundColor: "rgb(58, 58, 58)" }}>
      <div className="flex items-center space-x-4">
        <Link to="/">
          <img src="/studyspace.webp" alt="Logo" className="h-10 w-10 object-cover cursor-pointer" />
        </Link>
        <nav className="flex space-x-6">
          <Link to="/ContactUs" className="text-gray-300 hover:text-blue-400">Contact us</Link>
          <Link to="/AboutUs" className="text-gray-300 hover:text-blue-400">About us</Link>
          <Link to="/schedule" className="text-gray-300 hover:text-blue-400">Ongoing Classes</Link>
        </nav>
      </div>

      {/* ✅ Show user's email or login icon */}
      {user ? (
        <div className="flex items-center space-x-4">
          <span className="text-white">{user}</span>
          <button onClick={handleLogout} className="text-red-400 hover:text-red-600">Logout</button>
        </div>
      ) : (
        <Link to="/login">
          <CgProfile className="text-gray-300 text-2xl hover:text-blue-400 cursor-pointer" />
        </Link>
      )}
    </header>
  );
}

export default Header;
