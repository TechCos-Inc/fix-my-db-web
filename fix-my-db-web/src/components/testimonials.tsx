'use client'

import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"
import Slider from "react-slick"
import { useState } from "react"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechCorp Inc.",
      content: "FixMyDB saved our business! They optimized our database and reduced query times by 80%. Exceptional service and expertise.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      company: "DataFlow Solutions",
      content: "Professional, fast, and reliable. They migrated our entire database system with zero downtime. Highly recommended!",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      company: "StartupXYZ",
      content: "The team at FixMyDB is incredible. They not only fixed our database issues but also provided ongoing support and optimization.",
      rating: 5,
    },
    {
      name: "Amit Patel",
      company: "CloudNet",
      content: "Incredible results! Our DB performance has never been better. FixMyDB knows their stuff.",
      rating: 5,
    },
    {
      name: "Linda Carter",
      company: "AppVelocity",
      content: "Highly professional. FixMyDB solved issues our internal team struggled with for months.",
      rating: 5,
    },
  ]

  const [currentSlide, setCurrentSlide] = useState(0)

  const settings = {
    centerMode: true,
    centerPadding: "0px",
    slidesToShow: 3,
    infinite: true,
    arrows: true,
    dots: true,
      autoplay: true,             
  autoplaySpeed: 2800,        
    afterChange: (current: number) => setCurrentSlide(current),
    nextArrow: <CustomArrow direction="right" />,
    prevArrow: <CustomArrow direction="left" />,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 1 },
      },
    ],
  }

  return (
    <section className="py-20 bg-gray-50 scroll-mt-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 font-inter">What Our Clients Say</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-inter">
            Don&apos;t just take our word for it - hear from our satisfied customers
          </p>
        </div>

        <div className="relative">
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => {
              const isCenter = index === currentSlide % testimonials.length
              return (
                <div key={index} className="px-4 min-h-[360px]">
                  <div
                    className={`
                      transition-all duration-500 ease-in-out
                      ${isCenter ? 'scale-100 blur-0 z-10' : 'scale-90 blur-[1px] opacity-70'}
                    `}
                  >
                    <Card className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-gray-100">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-1 mb-4">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                        <p className="text-gray-700 mb-6 leading-relaxed italic">"{testimonial.content}"</p>
                        <div>
                          <div className="font-semibold text-gray-900 text-lg">{testimonial.name}</div>
                          <div className="text-sm text-gray-500">{testimonial.company}</div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              )
            })}
          </Slider>
        </div>
      </div>
    </section>
  )
}

function CustomArrow({ direction, onClick }: { direction: "left" | "right"; onClick?: () => void }) {
  const isLeft = direction === "left"
  const Icon = isLeft ? ChevronLeft : ChevronRight

  return (
    <div
      onClick={onClick}
      className={`
        absolute top-1/2 transform -translate-y-1/2 z-30
        ${isLeft ? "-left-6" : "-right-6"}
        bg-white hover:bg-gray-100 border border-gray-300
        shadow-md rounded-full p-2 cursor-pointer transition
      `}
    >
      <Icon className="w-6 h-6 text-gray-700" />
    </div>
  )
}
