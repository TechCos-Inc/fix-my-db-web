import Footer from "@/components/footer"
import Header from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Heart, Users, Award, Target } from "lucide-react"
import { Link } from "react-router-dom"

export default function AboutPage() {
    const teamMembers = [
        {
            name: "Senior MongoDB DBA",
            role: "Certified MongoDB Professional",
            experience: "8+ years",
            specialties: ["Replica Sets", "Sharding", "Performance Tuning"],
        },
        {
            name: "MySQL Expert",
            role: "Senior Database Administrator",
            experience: "10+ years",
            specialties: ["Query Optimization", "Replication", "High Availability"],
        },
        {
            name: "Database Architect",
            role: "Solutions Designer",
            experience: "12+ years",
            specialties: ["System Design", "Migration Planning", "Cost Optimization"],
        },
    ]

    const values = [
        {
            icon: Heart,
            title: "Family Values",
            description: "Founded in honor of family, we bring personal dedication to every project.",
        },
        {
            icon: Award,
            title: "Excellence",
            description: "Certified professionals delivering production-grade solutions.",
        },
        {
            icon: Users,
            title: "Collaboration",
            description: "Working alongside your team to achieve optimal results.",
        },
        {
            icon: Target,
            title: "Results-Driven",
            description: "Focused on measurable improvements and business outcomes.",
        },
    ]

    return (
        <>
            <Header />
            <div className="min-h-screen ">
                {/* Hero Section */}
                <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center animate-fade-in-up">
                            <div className="inline-flex items-center gap-2 bg-[#e06325]/10 rounded-full px-4 py-2 mb-6">
                                <Heart className="h-4 w-4 text-[#e06325] animate-pulse" />
                                <span className="text-sm font-medium text-[#3d3e46]">Founded in Honor of Family</span>
                            </div>
                            <h1 className="text-4xl lg:text-6xl font-bold text-[#3d3e46] mb-6">About FixMyDB</h1>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                                A dedicated database consulting company specializing in MongoDB, MySQL, and open-source databases, founded
                                with family values at our core.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Story Section */}
                <section className="py-20 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div className="animate-fade-in-left">
                                <h2 className="text-3xl lg:text-4xl font-bold text-[#3d3e46] mb-6">Our Story</h2>
                                <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                                    <p>
                                        <strong className="text-[#3d3e46]">FixMyDB was founded in honor of my mother</strong>, embodying the
                                        values of dedication, care, and excellence that she instilled in me. What started as a personal
                                        mission has grown into a trusted partner for businesses worldwide.
                                    </p>
                                    <p>
                                        We operate with a lean and passionate team of certified DBAs who currently work with leading
                                        organizations and contribute to FixMyDB during their available hours. This unique model allows us to
                                        bring enterprise-level expertise to businesses of all sizes.
                                    </p>
                                    <p>
                                        Our flexible approach means you get access to senior-level database professionals without the overhead
                                        of full-time hires. We're here when you need us most, providing reliable, expert-level support that
                                        keeps your databases running smoothly.
                                    </p>
                                </div>
                            </div>
                            <div className="relative animate-fade-in-right">
                                <div className="bg-gradient-to-br from-[#e06325]/10 to-blue-500/10 rounded-2xl p-8">
                                    <div className="bg-white rounded-xl shadow-lg p-6">
                                        <div className="text-center mb-6">
                                            <div className="text-4xl font-bold text-[#e06325] mb-2 animate-count-up">500+</div>
                                            <div className="text-[#3d3e46] font-medium">Databases Optimized</div>
                                        </div>
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="text-center p-4 bg-gray-50 rounded-lg">
                                                <div className="text-2xl font-bold text-[#3d3e46] mb-1">MongoDB</div>
                                                <div className="text-sm text-gray-600">All Versions</div>
                                            </div>
                                            <div className="text-center p-4 bg-gray-50 rounded-lg">
                                                <div className="text-2xl font-bold text-[#3d3e46] mb-1">MySQL</div>
                                                <div className="text-sm text-gray-600">All Flavors</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Mission & Values */}
                <section className="py-20 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16 animate-fade-in-up">
                            <h2 className="text-3xl lg:text-4xl font-bold text-[#3d3e46] mb-6">Our Mission & Values</h2>
                            <div className="bg-[#e06325]/5 rounded-lg p-8 max-w-4xl mx-auto border-l-4 border-[#e06325]">
                                <h3 className="text-2xl font-semibold text-[#3d3e46] mb-4">Our Mission</h3>
                                <p className="text-lg text-gray-600 leading-relaxed">
                                    To provide reliable, expert-level support and consulting for businesses using open-source databases,
                                    ensuring optimal performance, data integrity, and system resilience.
                                </p>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {values.map((value, index) => (
                                <Card
                                    key={index}
                                    className="hover:shadow-lg transition-all duration-300 hover:scale-105 animate-fade-in-up"
                                    style={{ animationDelay: `${index * 100}ms` }}
                                >
                                    <CardContent className="p-6 text-center">
                                        <div className="w-16 h-16 bg-[#e06325]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                            <value.icon className="h-8 w-8 text-[#e06325]" />
                                        </div>
                                        <h3 className="text-xl font-semibold text-[#3d3e46] mb-3">{value.title}</h3>
                                        <p className="text-gray-600">{value.description}</p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Team Section */}
                <section className="py-20 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16 animate-fade-in-up">
                            <h2 className="text-3xl lg:text-4xl font-bold text-[#3d3e46] mb-6">Our Expert Team</h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                Certified professionals with real-world experience in managing mission-critical databases
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {teamMembers.map((member, index) => (
                                <Card
                                    key={index}
                                    className="hover:shadow-lg transition-all duration-300 hover:scale-105 animate-fade-in-up"
                                    style={{ animationDelay: `${index * 100}ms` }}
                                >
                                    <CardContent className="p-6">
                                        <div className="w-20 h-20 bg-gradient-to-br from-[#e06325]/20 to-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                            <Users className="h-10 w-10 text-[#e06325]" />
                                        </div>
                                        <h3 className="text-xl font-semibold text-[#3d3e46] mb-2 text-center">{member.name}</h3>
                                        <p className="text-[#e06325] font-medium text-center mb-2">{member.role}</p>
                                        <p className="text-gray-600 text-center mb-4">{member.experience}</p>
                                        <div className="space-y-2">
                                            {member.specialties.map((specialty, idx) => (
                                                <div key={idx} className="flex items-center gap-2">
                                                    <CheckCircle className="h-4 w-4 text-[#e06325]" />
                                                    <span className="text-sm text-gray-600">{specialty}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-20 bg-[#3d3e46]">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Ready to Work With Us?</h2>
                        <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                            Let's discuss how our expert team can help optimize your database infrastructure
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" className="bg-[#e06325] hover:bg-[#c55420] text-white px-8 py-3" asChild>
                                <Link to="/contact">Get Free Consultation</Link>
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                className="bg-transparent text-white border-white hover:bg-white hover:text-[#3d3e46] px-8 py-3"
                                asChild
                            >
                                <Link to="/services">View Our Services</Link>
                            </Button>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    )
}
