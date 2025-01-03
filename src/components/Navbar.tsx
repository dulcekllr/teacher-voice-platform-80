import { Link, useNavigate } from "react-router-dom";
import { Calendar, Home, Newspaper, User2, Briefcase, Menu, LogIn, LogOut } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useAuth } from "./AuthProvider";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/components/ui/use-toast";

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleLinkClick = () => {
    setOpen(false);
  };

  const handleLogout = async () => {
    try {
      await supabase.auth.signOut();
      toast({
        title: "Logged out successfully",
        description: "You have been logged out of your account.",
      });
      navigate("/login");
    } catch (error) {
      toast({
        title: "Error logging out",
        description: "There was a problem logging out. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="font-bold text-xl text-primary">Godwin Mshila</Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
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
            {user ? (
              <Button
                variant="ghost"
                className="flex items-center space-x-2 text-gray-600 hover:text-primary transition-colors"
                onClick={handleLogout}
              >
                <LogOut className="w-4 h-4" />
                <span>Logout</span>
              </Button>
            ) : (
              <Link 
                to="/login"
                className="flex items-center space-x-2 text-gray-600 hover:text-primary transition-colors"
              >
                <LogIn className="w-4 h-4" />
                <span>Login</span>
              </Link>
            )}
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
                {user ? (
                  <Button
                    variant="ghost"
                    className="flex items-center space-x-2 text-gray-600 hover:text-primary transition-colors p-2"
                    onClick={() => {
                      handleLogout();
                      handleLinkClick();
                    }}
                  >
                    <LogOut className="w-5 h-5" />
                    <span>Logout</span>
                  </Button>
                ) : (
                  <Link 
                    to="/login" 
                    className="flex items-center space-x-2 text-gray-600 hover:text-primary transition-colors p-2"
                    onClick={handleLinkClick}
                  >
                    <LogIn className="w-5 h-5" />
                    <span>Login</span>
                  </Link>
                )}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};