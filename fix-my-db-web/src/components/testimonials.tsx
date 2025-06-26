import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechCorp Inc.",
      content:
        "FixMyDB saved our business! They optimized our database and reduced query times by 80%. Exceptional service and expertise.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      company: "DataFlow Solutions",
      content:
        "Professional, fast, and reliable. They migrated our entire database system with zero downtime. Highly recommended!",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      company: "StartupXYZ",
      content:
        "The team at FixMyDB is incredible. They not only fixed our database issues but also provided ongoing support and optimization.",
      rating: 5,
    },
  ]

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it - hear from our satisfied customers
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.company}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
