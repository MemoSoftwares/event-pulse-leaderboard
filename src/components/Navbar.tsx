
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MessageCircle, BookOpen } from "lucide-react";

const Navbar = () => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-university-800">
                FCT Open Day
              </span>
            </Link>
          </div>
          
          <nav className="hidden md:flex space-x-8 items-center">
            <Link
              to="/"
              className={`px-3 py-2 text-sm font-medium rounded-md ${
                isActive("/")
                  ? "text-university-800 bg-blue-50"
                  : "text-gray-600 hover:text-university-700 hover:bg-gray-50"
              }`}
            >
              Home
            </Link>
            
            <Link
              to="/questions"
              className={`px-3 py-2 text-sm font-medium rounded-md ${
                isActive("/questions")
                  ? "text-university-800 bg-blue-50"
                  : "text-gray-600 hover:text-university-700 hover:bg-gray-50"
              }`}
            >
              Quiz
            </Link>
            
            <Link
              to="/leaderboard"
              className={`px-3 py-2 text-sm font-medium rounded-md ${
                isActive("/leaderboard")
                  ? "text-university-800 bg-blue-50"
                  : "text-gray-600 hover:text-university-700 hover:bg-gray-50"
              }`}
            >
              Leaderboard
            </Link>

            <Link
                to="/chatbot"
                className={`px-3 py-2 text-sm font-medium rounded-md flex items-center ${
                    isActive("/chatbot")
                        ? "text-university-800 bg-blue-50"
                        : "text-gray-600 hover:text-university-700 hover:bg-gray-50"
                }`}
            >
              <MessageCircle className="mr-1 h-4 w-4" />
              Course Info
            </Link>

            <Link
              to="/faq"
              className={`px-3 py-2 text-sm font-medium rounded-md flex items-center ${
                isActive("/faq")
                  ? "text-university-800 bg-blue-50"
                  : "text-gray-600 hover:text-university-700 hover:bg-gray-50"
              }`}
            >
              <BookOpen className="mr-1 h-4 w-4" />
              FAQ
            </Link>

            <Link
              to="/collaboration"
              className={`px-3 py-2 text-sm font-medium rounded-md ${
                isActive("/collaboration")
                  ? "text-university-800 bg-blue-50"
                  : "text-gray-600 hover:text-university-700 hover:bg-gray-50"
              }`}
            >
              Collaborations
            </Link>

            <Link
              to="/about"
              className={`px-3 py-2 text-sm font-medium rounded-md ${
                isActive("/about")
                  ? "text-university-800 bg-blue-50"
                  : "text-gray-600 hover:text-university-700 hover:bg-gray-50"
              }`}
            >
              About
            </Link>
          </nav>
          
          <div className="flex items-center md:hidden">
            <Button variant="outline" size="sm">
              Menu
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
