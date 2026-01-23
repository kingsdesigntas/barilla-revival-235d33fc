import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const accommodationLinks = [
    { name: "Cabin Accommodation", path: "/accommodation/cabins" },
    { name: "Caravan Accommodation", path: "/accommodation/caravans" },
    { name: "Camping Grounds", path: "/accommodation/camping" },
    { name: "Hobart Airport Stay", path: "/accommodation/airport" },
  ];

  const thingsToDoLinks = [
    { name: "At Barilla", path: "/things-to-do/at-barilla" },
    { name: "Tourist Attractions", path: "/things-to-do/attractions" },
    { name: "Mini Golf", path: "/things-to-do/mini-golf" },
  ];

  return (
    <header className="sticky top-0 z-50">
      {/* Main navigation bar - dark blue background like original */}
      <nav className="bg-primary">
        <div className="container py-3">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <span className="text-xl md:text-2xl font-bold text-white tracking-wide">
                BARILLA HOLIDAY PARK
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              <Link 
                to="/" 
                className={`px-4 py-2 text-white hover:bg-white/10 transition-colors rounded ${isActive("/") ? "bg-white/10" : ""}`}
              >
                Home
              </Link>

              {/* Accommodation Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setOpenDropdown("accommodation")}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button className="px-4 py-2 text-white hover:bg-white/10 transition-colors rounded flex items-center gap-1">
                  Accommodation <ChevronDown size={16} />
                </button>
                <div className={`absolute top-full left-0 pt-1 ${openDropdown === "accommodation" ? "block" : "hidden"}`}>
                  <div className="bg-primary shadow-lg py-1 min-w-[220px]">
                    {accommodationLinks.map((link) => (
                      <Link
                        key={link.path}
                        to={link.path}
                        className="block px-4 py-2 text-white hover:bg-white/10 transition-colors"
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* Things to Do Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setOpenDropdown("things")}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button className="px-4 py-2 text-white hover:bg-white/10 transition-colors rounded flex items-center gap-1">
                  Things to Do <ChevronDown size={16} />
                </button>
                <div className={`absolute top-full left-0 pt-1 ${openDropdown === "things" ? "block" : "hidden"}`}>
                  <div className="bg-primary shadow-lg py-1 min-w-[200px]">
                    {thingsToDoLinks.map((link) => (
                      <Link
                        key={link.path}
                        to={link.path}
                        className="block px-4 py-2 text-white hover:bg-white/10 transition-colors"
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <Link 
                to="/contact" 
                className={`px-4 py-2 text-white hover:bg-white/10 transition-colors rounded ${isActive("/contact") ? "bg-white/10" : ""}`}
              >
                Contact
              </Link>

              <Link to="/contact" className="ml-4 bg-accent text-white font-semibold px-5 py-2 rounded hover:bg-accent/90 transition-colors">
                Book Now
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2 text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden mt-4 bg-primary/95 border-t border-white/20 animate-fade-in">
              <Link 
                to="/" 
                className="block py-3 px-4 text-white hover:bg-white/10 border-b border-white/10" 
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              
              <div className="border-b border-white/10">
                <div className="py-3 px-4 text-white font-semibold">Accommodation</div>
                {accommodationLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="block py-2 px-8 text-white/80 hover:bg-white/10"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>

              <div className="border-b border-white/10">
                <div className="py-3 px-4 text-white font-semibold">Things to Do</div>
                {thingsToDoLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="block py-2 px-8 text-white/80 hover:bg-white/10"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>

              <Link 
                to="/contact" 
                className="block py-3 px-4 text-white hover:bg-white/10 border-b border-white/10" 
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>

              <div className="p-4">
                <Link 
                  to="/contact" 
                  className="block text-center bg-accent text-white font-semibold px-5 py-3 rounded hover:bg-accent/90 transition-colors" 
                  onClick={() => setIsMenuOpen(false)}
                >
                  Book Now
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
