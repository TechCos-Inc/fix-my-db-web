import { CheckCircle, Heart } from "lucide-react"
import { useEffect, useState } from "react"

export default function About() {
  const features = [
    "Certified MongoDB & MySQL DBAs",
    "Support for all open-source databases",
    "Flexible team of senior experts",
    "Real-world mission-critical experience",
    "On-demand professional support",
    "Production-grade solutions",
  ]

  // Animated stats
  const [dbCount, setDbCount] = useState(0)

  useEffect(() => {
    let dbTarget = 500
    let dbStep = Math.ceil(dbTarget / 40)
    let dbInterval = setInterval(() => {
      setDbCount((prev) => {
        if (prev < dbTarget) return Math.min(prev + dbStep, dbTarget)
        clearInterval(dbInterval)
        return dbTarget
      })
    }, 20)
    return () => {
      clearInterval(dbInterval)
    }
  }, [])

  return (
    <section id="about" className="py-20 bg-gray-50 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-fade-in-left">
            <div className="inline-flex items-center gap-2 bg-orange-500/10 rounded-full px-4 py-2 mb-6">
              <Heart className="h-4 w-4 text-orange-500 animate-pulse" />
              <span className="text-sm font-medium text-[#3d3e46] font-inter">
                Rooted in Legacy, Driven by Innovation
              </span>
            </div>

            <h2 className="font-inter text-3xl lg:text-4xl font-bold text-[#3d3e46] mb-6">
              Why Choose FixMyDB?
            </h2>

            <p className="font-inter text-lg text-gray-600 mb-6 leading-relaxed">
              FixMyDB offers top-tier database consulting focused on MongoDB, MySQL, and open-source technologies.
              Inspired by legacy, we're a mission-driven team of certified DBAs delivering reliable, high-performance solutions.
            </p>

            <p className="font-inter text-lg text-gray-600 mb-8 leading-relaxed">
              Our professionals support global clients around the clock—ensuring uptime, performance, and peace of mind when you need it most.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 animate-slide-in-right"
                  style={{ animationDelay: `${index * 80}ms` }}
                >
                  <CheckCircle className="h-5 w-5 text-orange-500 flex-shrink-0" />
                  <span className="font-inter text-[#3d3e46]">{feature}</span>
                </div>
              ))}
            </div>

            <div className="bg-orange-500/10 rounded-lg p-6 mb-8 border-l-4 border-orange-500">
              <h4 className="font-inter font-semibold text-[#3d3e46] mb-2">Our Mission</h4>
              <p className="font-inter text-gray-600">
                To deliver expert-level database support for businesses leveraging open-source infrastructure—
                ensuring peak performance, data resilience, and enterprise-grade integrity.
              </p>
            </div>

            

            {/* <Button
              size="lg"
              className="bg-orange-500 hover:bg-orange-600 text-white transform hover:scale-105 transition-all duration-200"
            >
              Learn More About Our Story
            </Button> */}
          </div>

          {/* Right Panel */}
          <div className="relative animate-fade-in-right">
            <div className="bg-white rounded-2xl shadow-xl p-8 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-100 to-blue-100"></div>
              <div className="relative z-10">
                <div className="text-center mb-6">
                  <div className="text-4xl font-bold text-orange-500 mb-2 animate-count-up">{dbCount}+</div>
                  <div className="text-[#3d3e46] font-medium">Databases Optimized</div>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center group">
                    <div className="text-2xl font-bold text-[#3d3e46] mb-1 group-hover:text-orange-500 transition-colors">
                      MongoDB
                    </div>
                    <div className="text-sm text-gray-600">Certified DBAs</div>
                  </div>
                  <div className="text-center group">
                    <div className="text-2xl font-bold text-[#3d3e46] mb-1 group-hover:text-orange-500 transition-colors">
                      MySQL
                    </div>
                    <div className="text-sm text-gray-600">Senior Experts</div>
                  </div>
                  <div className="text-center group">
                    <div className="text-2xl font-bold text-[#3d3e46] mb-1 group-hover:text-orange-500 transition-colors">
                      24/7
                    </div>
                    <div className="text-sm text-gray-600">On-Demand</div>
                  </div>
                  <div className="text-center group">
                    <div className="text-2xl font-bold text-[#3d3e46] mb-1 group-hover:text-orange-500 transition-colors">
                      100%
                    </div>
                    <div className="text-sm text-gray-600">Dedicated</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating badges */}
            <div className="absolute -top-4 -right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium animate-bounce-subtle">
              MongoDB Certified
            </div>
            <div className="absolute -bottom-4 -left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium animate-bounce-subtle delay-500">
              MySQL Expert
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
