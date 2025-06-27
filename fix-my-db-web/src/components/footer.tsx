import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'

export default function Footer() {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer className="bg-[#3d3e46] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo & About */}
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <img src={logo} alt="FixMyDB Logo" className="w-10 h-10" />
              <h3 className="text-2xl font-bold">FixMyDB</h3>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              FixMyDB offers certified MySQL and MongoDB expertise with a focus on performance, cost efficiency,
              and high availability. We’re dedicated to helping businesses resolve database issues quickly and reliably.
            </p>
            <div className="text-sm text-gray-400">© 2025 FixMyDB. All rights reserved.</div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4 text-[#e06325]">Services</h4>
            <ul className="space-y-2 text-gray-300">
              {["Database Troubleshooting", "Version Upgrades", "Cost Optimization", "Data Migrations"].map(service => (
                <li key={service}>
                  <button
                    onClick={() => scrollToSection("services")}
                    className="hover:text-[#e06325] transition-colors text-left w-full"
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4 text-[#e06325]">Company</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <button
                  onClick={() => scrollToSection("about")}
                  className="hover:text-[#e06325] transition-colors text-left w-full"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="hover:text-[#e06325] transition-colors text-left w-full"
                >
                  Contact
                </button>
              </li>
              <li>
                <Link to="/privacy-policy" className="hover:text-[#e06325] transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-of-service" className="hover:text-[#e06325] transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
