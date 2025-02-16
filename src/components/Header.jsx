import { CgProfile } from "react-icons/cg";
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

function Header() {
  return (
    <header
      style={{ backgroundColor: "rgb(58, 58, 58)" }}
      className="flex items-center justify-between px-4 py-2 shadow-md"
    >
      {/* Left Section: Logo and Links */}
      <div className="flex items-center space-x-4">
        {/* Wrap the logo inside <Link> to navigate to home */}
        <Link to="/">
          <img src="/studyspace.webp" alt="Logo" className="h-10 w-10 object-cover cursor-pointer" />
        </Link>

        <nav className="flex space-x-6">
          <a href="#" className="text-gray-300 hover:text-blue-400">Mental Health Resources</a>
          <Link to="/ContactUs" className="text-gray-300 hover:text-blue-400">Contact us</Link> 
          <Link to="/AboutUs" className="text-gray-300 hover:text-blue-400">About us</Link> 
        </nav>
      </div>

      {/* Right Section: Profile Icon (for login) */}
      <Link to="/login">
        <CgProfile className="text-gray-300 text-2xl hover:text-blue-400 cursor-pointer" />
      </Link>
    </header>
  );
}

export default Header;
