"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mail, Phone, MapPin, Clock, MessageSquare, Zap } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function ContactPage() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        company: "",
        phone: "",
        service: "",
        urgency: "",
        message: "",
    })

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Handle form submission
        console.log("Form submitted:", formData)
    }

    const contactMethods = [
        {
            icon: Mail,
            title: "Email Support",
            description: "Get detailed responses within 4 hours",
            contact: "support@fixmydb.com",
            availability: "24/7",
        },
        {
            icon: Phone,
            title: "Phone Consultation",
            description: "Speak directly with our DBAs",
            contact: "+1 (555) 123-4567",
            availability: "Mon-Fri 9AM-6PM EST",
        },
        {
            icon: Zap,
            title: "Emergency Hotline",
            description: "Critical issues - immediate response",
            contact: "+1 (555) 999-0000",
            availability: "24/7/365",
        },
        {
            icon: MessageSquare,
            title: "Live Chat",
            description: "Quick questions and initial consultation",
            contact: "Available on website",
            availability: "Mon-Fri 9AM-6PM EST",
        },
    ]

    const offices = [
        {
            city: "New York",
            address: "123 Database Street, Tech City, NY 10001",
            phone: "+1 (555) 123-4567",
            email: "ny@fixmydb.com",
        },
        {
            city: "San Francisco",
            address: "456 MongoDB Ave, Silicon Valley, CA 94105",
            phone: "+1 (555) 987-6543",
            email: "sf@fixmydb.com",
        },
        {
            city: "Remote Team",
            address: "Available worldwide via remote support",
            phone: "+1 (555) 123-4567",
            email: "remote@fixmydb.com",
        },
    ]

    return (
        <>
            <Header />
            <div className="min-h-screen">
                {/* Hero Section */}
                <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center animate-fade-in-up">
                            <h1 className="text-4xl lg:text-6xl font-bold text-[#3d3e46] mb-6">Get In Touch</h1>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                                Ready to optimize your database? Our certified DBAs are here to help with your MongoDB and MySQL
                                challenges.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Contact Methods */}
                <section className="py-20 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16 animate-fade-in-up">
                            <h2 className="text-3xl lg:text-4xl font-bold text-[#3d3e46] mb-6">How to Reach Us</h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                Choose the best way to connect with our database experts
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {contactMethods.map((method, index) => (
                                <Card
                                    key={index}
                                    className="hover:shadow-lg transition-all duration-300 hover:scale-105 animate-fade-in-up"
                                    style={{ animationDelay: `${index * 100}ms` }}
                                >
                                    <CardContent className="p-6 text-center">
                                        <div className="w-16 h-16 bg-[#e06325]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                            <method.icon className="h-8 w-8 text-[#e06325]" />
                                        </div>
                                        <h3 className="text-xl font-semibold text-[#3d3e46] mb-2">{method.title}</h3>
                                        <p className="text-gray-600 mb-4">{method.description}</p>
                                        <div className="space-y-2">
                                            <div className="font-medium text-[#e06325]">{method.contact}</div>
                                            <div className="text-sm text-gray-500">{method.availability}</div>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Contact Form */}
                <section className="py-20 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid lg:grid-cols-2 gap-12">
                            <div className="animate-fade-in-left">
                                <h2 className="text-3xl lg:text-4xl font-bold text-[#3d3e46] mb-6">Send us a Message</h2>
                                <p className="text-lg text-gray-600 mb-8">
                                    Fill out the form below and we'll get back to you within 4 hours during business hours, or the next
                                    business day for after-hours submissions.
                                </p>

                                <Card>
                                    <CardContent className="p-6">
                                        <form onSubmit={handleSubmit} className="space-y-6">
                                            <div className="grid grid-cols-2 gap-4">
                                                <div className="space-y-2">
                                                    <Label htmlFor="firstName">First Name *</Label>
                                                    <Input
                                                        id="firstName"
                                                        value={formData.firstName}
                                                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                                                        required
                                                    />
                                                </div>
                                                <div className="space-y-2">
                                                    <Label htmlFor="lastName">Last Name *</Label>
                                                    <Input
                                                        id="lastName"
                                                        value={formData.lastName}
                                                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                                                        required
                                                    />
                                                </div>
                                            </div>

                                            <div className="space-y-2">
                                                <Label htmlFor="email">Email *</Label>
                                                <Input
                                                    id="email"
                                                    type="email"
                                                    value={formData.email}
                                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                    required
                                                />
                                            </div>

                                            <div className="grid grid-cols-2 gap-4">
                                                <div className="space-y-2">
                                                    <Label htmlFor="company">Company</Label>
                                                    <Input
                                                        id="company"
                                                        value={formData.company}
                                                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                                                    />
                                                </div>
                                                <div className="space-y-2">
                                                    <Label htmlFor="phone">Phone</Label>
                                                    <Input
                                                        id="phone"
                                                        value={formData.phone}
                                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                                    />
                                                </div>
                                            </div>

                                            <div className="grid grid-cols-2 gap-4">
                                                <div className="space-y-2">
                                                    <Label htmlFor="service">Service Needed</Label>
                                                    <Select
                                                        value={formData.service}
                                                        onValueChange={(value) => setFormData({ ...formData, service: value })}
                                                    >
                                                        <SelectTrigger>
                                                            <SelectValue placeholder="Select a service" />
                                                        </SelectTrigger>
                                                        <SelectContent>
                                                            <SelectItem value="troubleshooting">Database Troubleshooting</SelectItem>
                                                            <SelectItem value="optimization">Performance Optimization</SelectItem>
                                                            <SelectItem value="migration">Data Migration</SelectItem>
                                                            <SelectItem value="backup">Backup & Recovery</SelectItem>
                                                            <SelectItem value="monitoring">Monitoring Setup</SelectItem>
                                                            <SelectItem value="consultation">General Consultation</SelectItem>
                                                        </SelectContent>
                                                    </Select>
                                                </div>
                                                <div className="space-y-2">
                                                    <Label htmlFor="urgency">Urgency Level</Label>
                                                    <Select
                                                        value={formData.urgency}
                                                        onValueChange={(value) => setFormData({ ...formData, urgency: value })}
                                                    >
                                                        <SelectTrigger>
                                                            <SelectValue placeholder="Select urgency" />
                                                        </SelectTrigger>
                                                        <SelectContent>
                                                            <SelectItem value="low">Low - Planning phase</SelectItem>
                                                            <SelectItem value="medium">Medium - Within a week</SelectItem>
                                                            <SelectItem value="high">High - Within 24 hours</SelectItem>
                                                            <SelectItem value="emergency">Emergency - Immediate</SelectItem>
                                                        </SelectContent>
                                                    </Select>
                                                </div>
                                            </div>

                                            <div className="space-y-2">
                                                <Label htmlFor="message">Message *</Label>
                                                <Textarea
                                                    id="message"
                                                    placeholder="Please describe your database issue or requirements..."
                                                    className="min-h-[120px]"
                                                    value={formData.message}
                                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                                    required
                                                />
                                            </div>

                                            <Button type="submit" className="w-full bg-[#e06325] hover:bg-[#c55420] text-white py-3">
                                                Send Message
                                            </Button>
                                        </form>
                                    </CardContent>
                                </Card>
                            </div>

                            <div className="space-y-8 animate-fade-in-right">
                                <div>
                                    <h3 className="text-2xl font-semibold text-[#3d3e46] mb-6">Our Offices</h3>
                                    <div className="space-y-6">
                                        {offices.map((office, index) => (
                                            <Card key={index} className="hover:shadow-lg transition-shadow">
                                                <CardContent className="p-6">
                                                    <h4 className="font-semibold text-[#3d3e46] mb-3">{office.city}</h4>
                                                    <div className="space-y-2 text-gray-600">
                                                        <div className="flex items-start gap-2">
                                                            <MapPin className="h-4 w-4 text-[#e06325] mt-1 flex-shrink-0" />
                                                            <span className="text-sm">{office.address}</span>
                                                        </div>
                                                        <div className="flex items-center gap-2">
                                                            <Phone className="h-4 w-4 text-[#e06325] flex-shrink-0" />
                                                            <span className="text-sm">{office.phone}</span>
                                                        </div>
                                                        <div className="flex items-center gap-2">
                                                            <Mail className="h-4 w-4 text-[#e06325] flex-shrink-0" />
                                                            <span className="text-sm">{office.email}</span>
                                                        </div>
                                                    </div>
                                                </CardContent>
                                            </Card>
                                        ))}
                                    </div>
                                </div>

                                <div className="bg-[#e06325]/5 rounded-lg p-6 border-l-4 border-[#e06325]">
                                    <div className="flex items-center gap-2 mb-3">
                                        <Clock className="h-5 w-5 text-[#e06325]" />
                                        <h4 className="font-semibold text-[#3d3e46]">Response Times</h4>
                                    </div>
                                    <div className="space-y-2 text-sm text-gray-600">
                                        <div className="flex justify-between">
                                            <span>Emergency Issues:</span>
                                            <span className="font-medium text-[#e06325]">15 minutes</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>High Priority:</span>
                                            <span className="font-medium text-[#e06325]">2 hours</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>Standard Inquiries:</span>
                                            <span className="font-medium text-[#e06325]">4 hours</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>General Questions:</span>
                                            <span className="font-medium text-[#e06325]">24 hours</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    )
}
