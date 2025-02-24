import { CgProfile } from "react-icons/cg";

function Header() {
  return (
    <header
      style={{ backgroundColor: "rgb(58, 58, 58)" }}
      className="flex items-center justify-between px-4 py-2 shadow-md"
    >
      {/* Left Section: Logo and Links */}
      <div className="flex items-center space-x-4">
        <img src="/studyspace.webp" alt="Logo" className="h-10 w-10 object-cover" />
        <nav className="flex space-x-6">
          <a href="#" className="text-gray-300 hover:text-blue-400">Mental Health Resources</a>
          <a href="#" className="text-gray-300 hover:text-blue-400">Contact us</a>
          <a href="#" className="text-gray-300 hover:text-blue-400">About us</a>
        </nav>
      </div>

      {/* Right Section: Profile Icon */}
      <CgProfile className="text-gray-300 text-2xl hover:text-blue-400 cursor-pointer" />
    </header>
  );
}

export default Header;
