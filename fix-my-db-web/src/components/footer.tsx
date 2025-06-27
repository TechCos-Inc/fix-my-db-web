
import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import logo from '../assets/logo.png'
import {
  Database,
  Mail,
  Phone,
  MapPin,
  Clock,
  Github,
  Linkedin,
  Twitter,
  Youtube,
  Instagram,
  Facebook,
  Send,
  Server,
  Shield,
  Zap,
} from "lucide-react"

export default function Footer() {
  const [email, setEmail] = useState("")

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter signup
    console.log("Newsletter signup:", email)
    setEmail("")
  }

  const socialLinks = [
    { icon: Twitter, href: "https://twitter.com/fixmydb", label: "Twitter" },
    { icon: Linkedin, href: "https://linkedin.com/company/fixmydb", label: "LinkedIn" },
    { icon: Github, href: "https://github.com/fixmydb", label: "GitHub" },
    { icon: Youtube, href: "https://youtube.com/@fixmydb", label: "YouTube" },
    { icon: Instagram, href: "https://instagram.com/fixmydb", label: "Instagram" },
    { icon: Facebook, href: "https://facebook.com/fixmydb", label: "Facebook" },
  ]

  const quickLinks = [
    { name: "Database Troubleshooting", href: "/services" },
    { name: "Performance Optimization", href: "/services" },
    { name: "Data Migration", href: "/services" },
    { name: "Emergency Support", href: "/contact" },
  ]

  const resources = [
    { name: "Documentation", href: "#" },
    { name: "API Reference", href: "#" },
    { name: "Best Practices", href: "#" },
    { name: "Case Studies", href: "#" },
  ]

  return (
    <footer className="relative bg-[#3d3e46] text-white overflow-hidden">
      {/* Database-themed background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 animate-float">
          <Database className="h-16 w-16 text-[#e06325]" />
          {/* <img src={logo} alt="" className="w-15 h-15" /> */}
        </div>
        <div className="absolute top-20 right-20 animate-float" style={{ animationDelay: "1s" }}>
          <Server className="h-12 w-12 text-[#e06325]" />
        </div>
        <div className="absolute bottom-20 left-1/4 animate-float" style={{ animationDelay: "2s" }}>
          <Shield className="h-14 w-14 text-[#e06325]" />
        </div>
        <div className="absolute bottom-10 right-1/3 animate-float" style={{ animationDelay: "0.5s" }}>
          <Zap className="h-10 w-10 text-[#e06325]" />
        </div>

        {/* Animated grid pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#e06325]/5 to-transparent">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
              linear-gradient(rgba(224, 99, 37, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(224, 99, 37, 0.1) 1px, transparent 1px)
            `,
              backgroundSize: "50px 50px",
              animation: "grid-move 20s linear infinite",
            }}
          ></div>
        </div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {/* Company Info & Newsletter */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="relative">
                  {/* <Database className="h-10 w-10 text-[#e06325] animate-pulse" /> */}
                  <img src={logo} alt="" className="w-10 h-10" />
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-[#e06325] rounded-full animate-ping opacity-75"></div>
                </div>
                <h3 className="text-3xl font-bold">FixMyDB</h3>
              </div>

              <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
                Dedicated MongoDB and MySQL consulting founded in honor of family values. Expert database support when
                you need it most, available 24/7 for critical issues.
              </p>

              {/* Contact Info */}
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3 text-gray-300 hover:text-[#e06325] transition-colors">
                  <Mail className="h-5 w-5 text-[#e06325]" />
                  <span>support@fixmydb.com</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300 hover:text-[#e06325] transition-colors">
                  <Phone className="h-5 w-5 text-[#e06325]" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300 hover:text-[#e06325] transition-colors">
                  <MapPin className="h-5 w-5 text-[#e06325]" />
                  <span>123 Database Street, Tech City, NY 10001</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <Clock className="h-5 w-5 text-[#e06325]" />
                  <span>24/7 Emergency Support Available</span>
                </div>
              </div>

              {/* Newsletter Signup */}
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
                <h4 className="font-semibold text-[#e06325] mb-3 flex items-center gap-2">
                  <Send className="h-4 w-4" />
                  Database Tips Newsletter
                </h4>
                <p className="text-gray-300 text-sm mb-4">
                  Get weekly MongoDB and MySQL optimization tips directly to your inbox.
                </p>
                <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-[#e06325]"
                    required
                  />
                  <Button type="submit" className="bg-[#e06325] hover:bg-[#c55420] text-white px-6 shrink-0">
                    Subscribe
                  </Button>
                </form>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-6 text-[#e06325] text-lg">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-[#e06325] transition-colors flex items-center gap-2 group"
                    >
                      <div className="w-1 h-1 bg-[#e06325] rounded-full group-hover:scale-150 transition-transform"></div>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>

              <h4 className="font-semibold mb-4 text-[#e06325] text-lg mt-8">Resources</h4>
              <ul className="space-y-3">
                {resources.map((resource, index) => (
                  <li key={index}>
                    <a
                      href={resource.href}
                      className="text-gray-300 hover:text-[#e06325] transition-colors flex items-center gap-2 group"
                    >
                      <div className="w-1 h-1 bg-[#e06325] rounded-full group-hover:scale-150 transition-transform"></div>
                      {resource.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services & Legal */}
            <div>
              <h4 className="font-semibold mb-6 text-[#e06325] text-lg">Services</h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="/services"
                    className="text-gray-300 hover:text-[#e06325] transition-colors flex items-center gap-2 group"
                  >
                    <div className="w-1 h-1 bg-[#e06325] rounded-full group-hover:scale-150 transition-transform"></div>
                    MongoDB Consulting
                  </a>
                </li>
                <li>
                  <a
                    href="/services"
                    className="text-gray-300 hover:text-[#e06325] transition-colors flex items-center gap-2 group"
                  >
                    <div className="w-1 h-1 bg-[#e06325] rounded-full group-hover:scale-150 transition-transform"></div>
                    MySQL Optimization
                  </a>
                </li>
                <li>
                  <a
                    href="/services"
                    className="text-gray-300 hover:text-[#e06325] transition-colors flex items-center gap-2 group"
                  >
                    <div className="w-1 h-1 bg-[#e06325] rounded-full group-hover:scale-150 transition-transform"></div>
                    Database Migration
                  </a>
                </li>
                <li>
                  <a
                    href="/services"
                    className="text-gray-300 hover:text-[#e06325] transition-colors flex items-center gap-2 group"
                  >
                    <div className="w-1 h-1 bg-[#e06325] rounded-full group-hover:scale-150 transition-transform"></div>
                    24/7 Support
                  </a>
                </li>
              </ul>

              <h4 className="font-semibold mb-4 text-[#e06325] text-lg mt-8">Legal</h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="/privacy"
                    className="text-gray-300 hover:text-[#e06325] transition-colors flex items-center gap-2 group"
                  >
                    <div className="w-1 h-1 bg-[#e06325] rounded-full group-hover:scale-150 transition-transform"></div>
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="/terms"
                    className="text-gray-300 hover:text-[#e06325] transition-colors flex items-center gap-2 group"
                  >
                    <div className="w-1 h-1 bg-[#e06325] rounded-full group-hover:scale-150 transition-transform"></div>
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a
                    href="/contact"
                    className="text-gray-300 hover:text-[#e06325] transition-colors flex items-center gap-2 group"
                  >
                    <div className="w-1 h-1 bg-[#e06325] rounded-full group-hover:scale-150 transition-transform"></div>
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 bg-black/20 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              {/* Copyright */}
              <div className="text-gray-400 text-sm">
                © 2024 FixMyDB. All rights reserved. Founded with ❤️ in honor of family.
              </div>

              {/* Social Media Links */}
              <div className="flex items-center gap-4">
                <span className="text-gray-400 text-sm mr-2">Follow us:</span>
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/10 hover:bg-[#e06325] rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5 text-gray-300 group-hover:text-white transition-colors" />
                  </a>
                ))}
              </div>

              {/* Emergency Contact */}
              <div className="flex items-center gap-2 bg-red-600/20 border border-red-500/30 rounded-full px-4 py-2">
                <Zap className="h-4 w-4 text-red-400 animate-pulse" />
                <span className="text-red-300 text-sm font-medium">Emergency: +1 (555) 999-0000</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
