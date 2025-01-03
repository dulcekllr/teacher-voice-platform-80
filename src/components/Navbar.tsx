import { Link } from "react-router-dom";
import { Calendar, Home, Newspaper, User2, Briefcase, Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleLinkClick = () => {
    setOpen(false);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="font-bold text-xl text-primary">Godwin Mshila</Link>
          
          {/* Desktop Navigation */}
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

          {/* Mobile Navigation */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger className="md:hidden p-2">
              <Menu className="h-6 w-6" />
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col space-y-4 mt-6">
                <Link 
                  to="/" 
                  className="flex items-center space-x-2 text-gray-600 hover:text-primary transition-colors p-2"
                  onClick={handleLinkClick}
                >
                  <Home className="w-5 h-5" />
                  <span>Home</span>
                </Link>
                <Link 
                  to="/about" 
                  className="flex items-center space-x-2 text-gray-600 hover:text-primary transition-colors p-2"
                  onClick={handleLinkClick}
                >
                  <User2 className="w-5 h-5" />
                  <span>About</span>
                </Link>
                <Link 
                  to="/projects" 
                  className="flex items-center space-x-2 text-gray-600 hover:text-primary transition-colors p-2"
                  onClick={handleLinkClick}
                >
                  <Briefcase className="w-5 h-5" />
                  <span>Projects</span>
                </Link>
                <Link 
                  to="/blog" 
                  className="flex items-center space-x-2 text-gray-600 hover:text-primary transition-colors p-2"
                  onClick={handleLinkClick}
                >
                  <Newspaper className="w-5 h-5" />
                  <span>Blog</span>
                </Link>
                <Link 
                  to="/schedule" 
                  className="flex items-center space-x-2 text-gray-600 hover:text-primary transition-colors p-2"
                  onClick={handleLinkClick}
                >
                  <Calendar className="w-5 h-5" />
                  <span>Schedule</span>
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};