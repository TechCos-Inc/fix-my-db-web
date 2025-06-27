import { Button } from "@/components/ui/button"
import { Database, Shield, Users } from "lucide-react"

export default function Hero() {
  return (
    <section
      id="home"
      className="bg-gradient-to-br from-slate-50 to-blue-50 py-20 lg:py-32 font-sans overflow-hidden"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Text Section */}
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 mb-6 animate-bounce-subtle">
              <div className="w-2 h-2 bg-[#e06325] rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-[#3d3e46]">MongoDB & MySQL Experts</span>
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold text-[#3d3e46] leading-tight">
              Fix Your Database
              <span className="text-[#e06325] animate-gradient-text"> Issues Quickly</span>
            </h1>

            <p className="text-xl text-gray-600 mt-6 leading-relaxed animate-fade-in-delayed">
              Certified MongoDB and MySQL experts providing professional consulting and optimization services.
              At FixMyDB, we stand for reliability, speed, and strong technical support — when it matters most.
            </p>

           <div className="flex flex-wrap justify-center gap-4 mt-8 animate-slide-up">

            <Button
              size="lg"
              className="bg-[#e06325] hover:bg-[#c55420] text-white px-8 py-3 transform hover:scale-105 transition-all duration-200"
              onClick={() => {
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Get Free Consultation
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="btn-outline"
              onClick={() => {
                document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              View Our Services
            </Button>
          </div>


            <div className="flex items-center gap-8 mt-12 animate-fade-in-up-delayed">
              <div className="flex items-center gap-2 group">
                <Database className="h-6 w-6 text-[#e06325] group-hover:animate-spin transition-transform" />
                <span className="text-sm text-gray-600">MongoDB & MySQL</span>
              </div>
              <div className="flex items-center gap-2 group">
                <Shield className="h-6 w-6 text-[#e06325] group-hover:animate-pulse" />
                <span className="text-sm text-gray-600">Certified DBAs</span>
              </div>
              <div className="flex items-center gap-2 group">
                <Users className="h-6 w-6 text-[#e06325] group-hover:animate-bounce" />
                <span className="text-sm text-gray-600 ">Expert Team</span>
              </div>
            </div>
          </div>

          {/* Right Visual Section */}
          <div className="relative animate-float">
            <div className="bg-white rounded-2xl shadow-2xl p-8 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#e06325]/5 to-blue-500/5"></div>
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse delay-100"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse delay-200"></div>
                  </div>
                  <span className="text-xs text-gray-500 font-mono">MongoDB Shell</span>
                </div>

                <div className="space-y-3 font-mono text-sm">
                  <div className="flex items-center gap-2 animate-type-writer">
                    <span className="text-[#e06325]">{">"}</span>
                    <span className="text-[#3d3e46]">db.users.find()</span>
                    <div className="w-2 h-4 bg-[#e06325] animate-blink"></div>
                  </div>
                  <div className="bg-gray-50 rounded p-3 animate-fade-in">
                    <div className="h-2 bg-gray-200 rounded animate-pulse mb-2"></div>
                    <div className="h-2 bg-gray-200 rounded animate-pulse w-3/4 mb-2"></div>
                    <div className="h-2 bg-[#e06325]/20 rounded animate-pulse w-1/2"></div>
                  </div>
                  <div className="flex items-center gap-2 text-green-600 animate-fade-in-delayed">
                    <span>✓</span>
                    <span>Query optimized — 85% faster</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="h-20 bg-gradient-to-br from-green-50 to-green-100 rounded-lg flex items-center justify-center group hover:scale-105 transition-transform">
                    <Database className="h-8 w-8 text-green-600 group-hover:animate-spin" />
                  </div>
                  <div className="h-20 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg flex items-center justify-center group hover:scale-105 transition-transform">
                    <Shield className="h-8 w-8 text-blue-600 group-hover:animate-pulse" />
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -top-4 -right-4 w-20 h-20 bg-[#e06325]/10 rounded-full animate-ping"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-blue-500/10 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
