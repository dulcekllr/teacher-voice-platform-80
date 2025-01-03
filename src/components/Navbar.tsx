import { Link } from "react-router-dom";
import { Calendar, Home, Newspaper, User2, Briefcase } from "lucide-react";

export const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="font-bold text-xl text-primary">Godwin Mshila</Link>
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="flex items-center space-x-2 text-gray-600 hover:text-primary transition-colors">
              <Home className="w-4 h-4" />
              <span>Home</span>
            </Link>
            <Link to="/about" className="flex items-center space-x-2 text-gray-600 hover:text-primary transition-colors">
              <User2 className="w-4 h-4" />
              <span>About</span>
            </Link>
            <Link to="/projects" className="flex items-center space-x-2 text-gray-600 hover:text-primary transition-colors">
              <Briefcase className="w-4 h-4" />
              <span>Projects</span>
            </Link>
            <Link to="/blog" className="flex items-center space-x-2 text-gray-600 hover:text-primary transition-colors">
              <Newspaper className="w-4 h-4" />
              <span>Blog</span>
            </Link>
            <Link to="/schedule" className="flex items-center space-x-2 text-gray-600 hover:text-primary transition-colors">
              <Calendar className="w-4 h-4" />
              <span>Schedule</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};