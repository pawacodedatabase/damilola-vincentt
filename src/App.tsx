import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { HiSun, HiMoon, HiHome } from 'react-icons/hi';
import Home from './pages/home';
import ProjectList from './pages/PROJECTS/projectList';
import ProjectDetail from './pages/PROJECTS/projectDetails';
import ScrollToTop from './components/ScrollToTop';
import ContactDashboard from './pages/contact';
import ResumeSection from './pages/PROJECTS/resume';
import Footer from './pages/footer';
import SignUp from './pages/signup';
import Login from './pages/login';
import Dashboard from './pages/Dashboard';
import { AuthProvider } from './components/authContext'; // AuthProvider for global authentication
import Admin from './Backend/projectadmin';
import Projects from './Backend/projects';
import DonationDetail from './Backend/projectdetail';


const App: React.FC = () => {
  // Track the current theme state
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem('theme') === 'dark');

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
    localStorage.setItem('theme', darkMode ? 'light' : 'dark');
  };

  // Apply theme class to the document body
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <AuthProvider>
      <Router>
        {/* Header */}
       

        {/* Main Container */}
        <div className={`min-h-screen ${darkMode ? 'bg-black text-white' : 'bg-white text-gray-900'}`}>
          <div className="container mx-auto ">
            <ScrollToTop>
              {/* Routes */}
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/resume" element={<ResumeSection />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/login" element={<Login />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/contact" element={<ContactDashboard />} />
                <Route path="/projects" element={<ProjectList />} />
                <Route path="/admin" element={<Admin />} />
                <Route path="/newprojects" element={<Projects />} />
                <Route path="/newprojects/:id" element={<DonationDetail />} />
                <Route path="/projects/:id" element={<ProjectDetail />} />
              </Routes>
            </ScrollToTop>
          </div>

          {/* Home Button (Bottom Left) */}
          <Link
            to="/"
            className="fixed bottom-4 left-4 p-3 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white shadow-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-all duration-300"
            aria-label="Go to Home Page"
          >
            <HiHome size={24} />
          </Link>

          {/* Dark Mode Toggle Button (Bottom Right) */}
          <button
            onClick={toggleDarkMode}
            className="fixed bottom-4 right-4 p-3 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white shadow-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-all duration-300"
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? <HiSun size={24} /> : <HiMoon size={24} />}
          </button>
        </div>

        {/* Footer */}
        <Footer />
      </Router>
    </AuthProvider>
  );
};

export default App;
