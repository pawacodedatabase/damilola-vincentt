import React, { useState,  } from "react";
import { Link } from "react-router-dom";
// import { FaSignInAlt, FaUserPlus, FaSignOutAlt, FaUser } from "react-icons/fa";
import logo from '../assets/img/logo.png';

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const [user, setUser] = useState<any>(null);
  // const navigate = useNavigate();

  const toggleMenu = () => setMenuOpen(!menuOpen);

  // useEffect(() => {
  //   const storedUser = localStorage.getItem("user");
  //   if (storedUser) {
  //     setUser(JSON.parse(storedUser));
  //     setIsLoggedIn(true);
  //   }
  // }, []);

  // const handleLogout = () => {
  //   localStorage.removeItem("user");
  //   setIsLoggedIn(false);
  //   navigate('/login');
  //   setMenuOpen(false);
  // };

  return (
    <div className="flex items-center sticky top-0 z-50 justify-between px-4 py-5 bg-white text-purple-500 dark:bg-black dark:text-purple-500 shadow-md">
      {/* Logo */}
      <Link to="/">
        <img
          src={logo}
          alt="Logo"
          className="w-[30%] md:w-[30%] lg:w-[20%]"
        />
      </Link>

      {/* Navbar for larger screens */}
      <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
        <Link
          to="/"
          className="nav-link"
        >
          Home
        </Link>
        <Link
          to="/resume"
          className="nav-link"
        >
          My Resume
        </Link>
        <Link
          to="/projects"
          className="nav-link"
        >
          My Projects
        </Link>
        {/* <Link
          to="/contact"
          className="nav-link"
        >
          Contact
        </Link> */}

        {/* Conditional rendering for Login/Signup and Logout */}
        {/* {!isLoggedIn ? (
          <>
            <Link
              to="/login"
              className="nav-link flex items-center space-x-2"
            >
              <FaSignInAlt />
              <span>Login</span>
            </Link>
            <Link
              to="/signup"
              className="nav-link flex items-center space-x-2"
            >
              <FaUserPlus />
              <span>Sign Up</span>
            </Link>
          </>
        ) : (
          <button
            onClick={handleLogout}
            className="nav-link flex items-center space-x-2"
          >
            <FaSignOutAlt />
            <span>Logout</span>
          </button>
        )} */}
      </nav>

      {/* Hamburger for small screens */}
      <button
        onClick={toggleMenu}
        className="md:hidden flex flex-col space-y-2"
      >
        <div className="w-8 h-0.5 bg-purple-500"></div>
        <div className="w-8 h-0.5 bg-purple-500"></div>
      </button>

      {/* Overlay Menu for small screens */}
      {menuOpen && (
        <div className="fixed inset-0 bg-white  dark:bg-black flex flex-col items-center justify-center text-black dark:text-purple-500 z-50 ">
          <button
            onClick={toggleMenu}
            className="absolute top-4 right-4 text-5xl text-purple-500"
          >
            &times;
          </button>

          <nav className="text-sm font-semibold space-y-4 flex flex-col m-4 ">
            <Link
              to="/"
              className="nav-link dark:hover:text-white"
              onClick={toggleMenu}
            >
              Home
            </Link>

            <hr  className="w-full"/>
            <Link
              to="/resume"
              className="nav-link dark:hover:text-white"
              onClick={toggleMenu}
            >
              My Resume
            </Link>

            <hr />
            <Link
              to="/projects"
              className="nav-link dark:hover:text-white"
              onClick={toggleMenu}
            >
              My Projects
            </Link>

            <hr />

            {/* <Link
              to="/contact"
              className="nav-link dark:hover:text-white"
              onClick={toggleMenu}
            >
              Contact
            </Link>

            <hr /> */}
         
            {/* Conditional rendering for Login/Signup and Logout */}
            {/* {!isLoggedIn ? (
              <>
                <Link
                  to="/login"
                  className="nav-link flex items-center space-x-2"
                  onClick={toggleMenu}
                >
                  <FaSignInAlt />
                  <span>Login</span>
                </Link>

                <hr />

                <Link
                  to="/signup"
                  className="nav-link flex items-center space-x-2"
                  onClick={toggleMenu}
                >
                  <FaUserPlus />
                  <span>Sign Up</span>
                </Link>

                <hr />
              </>
            ) : (
              <>
                <div className="flex gap-1 text-sm">
                  <span className="text-green-300"><FaUser /></span>
                  <p className="text-green-400">{user.username}</p>
                </div> 

                <hr />

                <button
                  onClick={handleLogout}
                  className="nav-link flex items-center space-x-2"
                >
                  <div className="flex gap-2 text-sm">
                    <span> <FaSignOutAlt /></span>
                     <span>Logout</span>
                  </div>
                 
                 
                </button>

                <hr />
              </>
            )} */}
          </nav>
        </div>
      )}
    </div>
  );
};

export default Header;
