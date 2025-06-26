import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import logo from '../assets/logo.png'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center gap-2 animate-fade-in-left">
            {/* <Database className="h-8 w-8 text-[#e06325] animate-pulse" /> */}
            <img src={logo} alt="" className="w-10 h-10" />
            <h1 className="text-2xl font-bold text-[#3d3e46]">FixMyDB</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="lg:block sm:hidden md:hidden space-x-8 hidediv">
            <a href="#home" className="text-[#3d3e46] hover:text-[#e06325] transition-colors font-medium">
              Home
            </a>
            <a href="#services" className="text-[#3d3e46] hover:text-[#e06325] transition-colors font-medium">
              Services
            </a>
            <a href="#about" className="text-[#3d3e46] hover:text-[#e06325] transition-colors font-medium">
              About
            </a>
            <a href="#testimonials" className="text-[#3d3e46] hover:text-[#e06325] transition-colors font-medium">
              Testimonials
            </a>
            <a href="#contact" className="text-[#3d3e46] hover:text-[#e06325] transition-colors font-medium">
              Contact
            </a>
          </nav>

          <div className="lg:block md:hidden sm:hidden items-center space-x-4 animate-fade-in-right hidediv">
            <Button
              variant="outline"
              className="bg-white text-[#3d3e46] border-gray-300 hover:border-[#e06325] hover:text-[#e06325] transition-all"
            >
              Login
            </Button>
            <Button className="bg-[#e06325] hover:bg-[#c55420] text-white transform hover:scale-105 transition-all duration-200">
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:block">
            <Button variant="ghost" size="sm" onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-[#3d3e46]">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="block py-4 border-t animate-slide-down">
            <nav className="flex flex-col space-y-4">
              <a href="#home" className="text-[#3d3e46] hover:text-[#e06325] transition-colors font-medium">
                Home
              </a>
              <a href="#services" className="text-[#3d3e46] hover:text-[#e06325] transition-colors font-medium">
                Services
              </a>
              <a href="#about" className="text-[#3d3e46] hover:text-[#e06325] transition-colors font-medium">
                About
              </a>
              <a href="#testimonials" className="text-[#3d3e46] hover:text-[#e06325] transition-colors font-medium">
                Testimonials
              </a>
              <a href="#contact" className="text-[#3d3e46] hover:text-[#e06325] transition-colors font-medium">
                Contact
              </a>
              <div className="flex flex-col space-y-2 pt-4">
                <Button variant="outline" className="bg-white text-[#3d3e46] border-gray-300">
                  Login
                </Button>
                <Button className="bg-[#e06325] hover:bg-[#c55420] text-white">Get Started</Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
