import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail, ChevronDown } from "lucide-react";

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
    <header className="sticky top-0 z-50 bg-background shadow-sm">
      {/* Top bar with contact info */}
      <div className="bg-primary text-primary-foreground py-2">
        <div className="container flex justify-between items-center text-sm">
          <a href="tel:1800465453" className="flex items-center gap-2 hover:text-accent transition-colors">
            <Phone size={14} />
            <span>Freecall: 1800 465 453</span>
          </a>
          <a href="mailto:stay@barilla.com.au" className="flex items-center gap-2 hover:text-accent transition-colors">
            <Mail size={14} />
            <span className="hidden sm:inline">stay@barilla.com.au</span>
          </a>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="container py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-serif font-bold text-primary tracking-wide">
              BARILLA
            </span>
            <span className="hidden sm:block ml-2 text-sm text-muted-foreground">
              Holiday Park
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <Link to="/" className={`nav-link ${isActive("/") ? "text-accent" : ""}`}>
              Home
            </Link>

            {/* Accommodation Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setOpenDropdown("accommodation")}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button className="nav-link flex items-center gap-1">
                Accommodation <ChevronDown size={16} />
              </button>
              <div className={`absolute top-full left-0 pt-2 ${openDropdown === "accommodation" ? "block" : "hidden"}`}>
                <div className="bg-background shadow-lg rounded-lg py-2 min-w-[220px] border">
                  {accommodationLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      className="block px-4 py-2 hover:bg-secondary transition-colors text-foreground hover:text-accent"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Things to Do Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setOpenDropdown("things")}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button className="nav-link flex items-center gap-1">
                Things to Do <ChevronDown size={16} />
              </button>
              <div className={`absolute top-full left-0 pt-2 ${openDropdown === "things" ? "block" : "hidden"}`}>
                <div className="bg-background shadow-lg rounded-lg py-2 min-w-[200px] border">
                  {thingsToDoLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      className="block px-4 py-2 hover:bg-secondary transition-colors text-foreground hover:text-accent"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link to="/contact" className={`nav-link ${isActive("/contact") ? "text-accent" : ""}`}>
              Contact
            </Link>

            <Link to="/contact" className="btn-cta">
              Book Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 text-primary"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 bg-background border rounded-lg shadow-lg animate-fade-in">
            <Link to="/" className="nav-link-mobile border-b" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
            
            <div className="border-b">
              <div className="nav-link-mobile font-semibold text-primary">Accommodation</div>
              {accommodationLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="block py-2 px-8 hover:bg-secondary text-muted-foreground"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="border-b">
              <div className="nav-link-mobile font-semibold text-primary">Things to Do</div>
              {thingsToDoLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="block py-2 px-8 hover:bg-secondary text-muted-foreground"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <Link to="/contact" className="nav-link-mobile border-b" onClick={() => setIsMenuOpen(false)}>
              Contact
            </Link>

            <div className="p-4">
              <Link to="/contact" className="btn-cta block text-center" onClick={() => setIsMenuOpen(false)}>
                Book Now
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
