
import logo from '../assets/logo.png'

export default function Footer() {
  return (
    <footer className="bg-[#3d3e46] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-4">
              {/* <Database className="h-8 w-8 text-[#e06325] animate-pulse" /> */}
              <img src={logo} alt="" className='w-10 h-10' />
              <h3 className="text-2xl font-bold">FixMyDB</h3>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Dedicated MongoDB and MySQL consulting founded in honor of family values. Expert database support when you
              need it most.
            </p>
            <div className="text-sm text-gray-400">© 2025 FixMyDB. All rights reserved.</div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-[#e06325]">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#" className="hover:text-[#e06325] transition-colors">
                  Database Troubleshooting
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#e06325] transition-colors">
                  Version Upgrades
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#e06325] transition-colors">
                  Cost Optimization
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#e06325] transition-colors">
                  Data Migrations
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-[#e06325]">Company</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#" className="hover:text-[#e06325] transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#e06325] transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#e06325] transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#e06325] transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
