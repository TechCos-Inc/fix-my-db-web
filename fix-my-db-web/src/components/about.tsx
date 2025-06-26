import { Button } from "@/components/ui/button"
import { CheckCircle, Heart } from "lucide-react"

export default function About() {
  const features = [
    "Certified MongoDB & MySQL DBAs",
    "Support for all open-source databases",
    "Flexible team of senior experts",
    "Real-world mission-critical experience",
    "On-demand professional support",
    "Production-grade solutions",
  ]

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-left">
            <div className="inline-flex items-center gap-2 bg-[#e06325]/10 rounded-full px-4 py-2 mb-6">
              <Heart className="h-4 w-4 text-[#e06325] animate-pulse" />
              <span className="text-sm font-medium text-[#3d3e46]">Founded in Honor of Family</span>
            </div>

            <h2 className="text-3xl lg:text-4xl font-bold text-[#3d3e46] mb-6">Why Choose FixMyDB?</h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              FixMyDB is a dedicated database consulting and support company specializing in MongoDB, MySQL, and other
              open-source databases. <strong className="text-[#3d3e46]">Founded in honor of my mother</strong>, FixMyDB
              operates with a lean and passionate team of certified DBAs.
            </p>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our team currently works with leading organizations and contributes to FixMyDB during their available
              hours, providing flexible, expert-level support when you need it most.
            </p>

            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 animate-slide-in-right"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CheckCircle className="h-5 w-5 text-[#e06325] flex-shrink-0" />
                  <span className="text-[#3d3e46]">{feature}</span>
                </div>
              ))}
            </div>

            <div className="bg-[#e06325]/5 rounded-lg p-6 mb-8 border-l-4 border-[#e06325]">
              <h4 className="font-semibold text-[#3d3e46] mb-2">Our Mission</h4>
              <p className="text-gray-600">
                To provide reliable, expert-level support and consulting for businesses using open-source databases,
                ensuring optimal performance, data integrity, and system resilience.
              </p>
            </div>

            <Button
              size="lg"
              className="bg-[#e06325] hover:bg-[#c55420] text-white transform hover:scale-105 transition-all duration-200"
            >
              Learn More About Our Story
            </Button>
          </div>

          <div className="relative animate-fade-in-right">
            <div className="bg-white rounded-2xl shadow-xl p-8 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#e06325]/5 to-blue-500/5"></div>
              <div className="relative z-10">
                <div className="text-center mb-6">
                  <div className="text-4xl font-bold text-[#e06325] mb-2 animate-count-up">500+</div>
                  <div className="text-[#3d3e46] font-medium">Databases Optimized</div>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center group">
                    <div className="text-2xl font-bold text-[#3d3e46] mb-1 group-hover:text-[#e06325] transition-colors">
                      MongoDB
                    </div>
                    <div className="text-sm text-gray-600">Certified DBAs</div>
                  </div>
                  <div className="text-center group">
                    <div className="text-2xl font-bold text-[#3d3e46] mb-1 group-hover:text-[#e06325] transition-colors">
                      MySQL
                    </div>
                    <div className="text-sm text-gray-600">Senior Experts</div>
                  </div>
                  <div className="text-center group">
                    <div className="text-2xl font-bold text-[#3d3e46] mb-1 group-hover:text-[#e06325] transition-colors">
                      24/7
                    </div>
                    <div className="text-sm text-gray-600">On-Demand</div>
                  </div>
                  <div className="text-center group">
                    <div className="text-2xl font-bold text-[#3d3e46] mb-1 group-hover:text-[#e06325] transition-colors">
                      100%
                    </div>
                    <div className="text-sm text-gray-600">Dedicated</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating badges */}
            <div className="absolute -top-4 -right-4 bg-[#e06325] text-white px-3 py-1 rounded-full text-sm font-medium animate-bounce-subtle">
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
