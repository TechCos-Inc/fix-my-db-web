import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate()
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, id?: string) => {
    setIsMenuOpen(false);
    if (id) {
      e.preventDefault();
      if (id.toLocaleLowerCase() == "home") {
        navigate('/')
        window.scrollTo(0, 0);
      } else {
        navigate(`/${id}`)
        window.scrollTo(0, 0);
      }
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`w-full bg-white sticky top-0 z-50 ${isScrolled ? "z-[100] border-b border-gray-300" : ""
        } transition-all duration-300`}
    >
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6 max-w-[1920px] mx-auto min-h-[80px]">
          {/* Logo */}
          <div className="flex items-center gap-2 md:gap-4 min-w-[120px] md:min-w-[160px] lg:min-w-[180px]">
            <img
              src={logo}
              alt="FixMyDB Logo"
              className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 object-contain transition-transform duration-300 hover:scale-105"
            />
            <h1 className="text-lg md:text-2xl lg:text-4xl font-bold transition-colors duration-300 font-['Roboto_Slab','Roboto Slab',serif] text-[#e66023] hover:text-orange-500 whitespace-nowrap">
              FixMyDB
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex flex-row items-center space-x-6 lg:space-x-8">
            {['home', 'services', 'about', 'contact', 'privacy-policy', 'terms-of-service'].map((id) => (
              <a
                key={id}
                href={`#${id}`}
                className="text-black font-medium  text-xl relative transition-all duration-300 hover:text-orange-500 font-outfit"
                onClick={(e) => handleLinkClick(e, id)}
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-orange-400 to-orange-600 transition-all duration-300 hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Desktop Button */}
          <div className="hidden md:flex">
            <Button
              className="ml-2 bg-[#ff7300] hover:bg-[#ff9800] text-white font-extrabold
                px-3 md:px-6 lg:px-8 py-1.5 md:py-2 rounded-xl shadow-2xl ring-4 ring-[#ff7300]/40
                hover:ring-[#ff9800]/60 transition-all duration-300 hover:scale-105
                text-xs md:text-base lg:text-lg tracking-tight md:tracking-wide lg:tracking-wider drop-shadow-xl
                border-2 border-white"
              onClick={() => {
                const el = document.getElementById('contact');
                if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
            >
              Get Free Consultation
            </Button>
          </div>

          {/* Mobile/Tablet Hamburger */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-black transition-transform duration-300 hover:scale-110"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden fixed inset-x-0 top-16 bg-white shadow-md transition-all duration-300 animate-fadeIn px-4 z-[999]">
            <nav className="flex flex-col items-center space-y-4 p-4">
              {['home', 'services', 'about', 'contact'].map((id) => (
                <a
                  key={id}
                  href={`#${id}`}
                  className="text-black hover:text-orange-500 font-medium text-base transition-all duration-300 font-outfit"
                  onClick={(e) => handleLinkClick(e, id)}
                >
                  {id.charAt(0).toUpperCase() + id.slice(1)}
                </a>
              ))}
              <Button
                className="mt-2 bg-[#ff7300] hover:bg-[#ff9800] text-white font-extrabold px-10 py-3 rounded-xl shadow-2xl ring-4 ring-[#ff7300]/40 hover:ring-[#ff9800]/60 transition-all duration-300 hover:scale-110 text-xl tracking-wider drop-shadow-xl border-2 border-white animate-bounce"
                onClick={() => {
                  setIsMenuOpen(false);
                  const el = document.getElementById('contact');
                  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
              >
                Get Free Consultation
              </Button>
            </nav>
          </div>
        )}
      </div>

      {/* Inline style for link underline animation */}
      <style>
        {`
          a {
            position: relative;
          }
          a span {
            position: absolute;
            left: 0;
            bottom: -2px;
            transition: width 0.3s ease;
          }
          a:hover span {
            width: 100%;
          }
        `}
      </style>
    </header>
  );
}
