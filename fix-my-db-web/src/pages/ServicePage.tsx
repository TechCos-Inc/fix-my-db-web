import Footer from "@/components/footer"
import Header from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
    Database,
    Settings,
    Shield,
    Zap,
    BarChart3,
    ArrowUpCircle,
    DollarSign,
    HardDrive,
    CheckCircle,
} from "lucide-react"
import { Link } from "react-router-dom"

export default function ServicesPage() {
    const services = [
        {
            icon: Settings,
            title: "Database Troubleshooting & Issue Resolution",
            description: "Expert diagnosis and resolution of complex database issues across MongoDB and MySQL systems.",
            features: [
                "Performance bottleneck identification",
                "Query optimization and tuning",
                "Connection and timeout issues",
                "Data corruption recovery",
                "Index optimization",
            ],
            pricing: "Starting at $150/hour",
        },
        {
            icon: ArrowUpCircle,
            title: "Version Upgrades & Schema Changes",
            description: "Seamless database version upgrades and schema modifications with zero downtime strategies.",
            features: [
                "MongoDB version upgrades (3.x to 7.x)",
                "MySQL version migrations",
                "Schema design and optimization",
                "Backward compatibility testing",
                "Rollback planning",
            ],
            pricing: "Project-based from $2,500",
        },
        {
            icon: DollarSign,
            title: "Cost Optimization",
            description: "Analyze and optimize your database infrastructure to reduce costs while maintaining performance.",
            features: [
                "Resource utilization analysis",
                "Cloud cost optimization",
                "Storage optimization",
                "Query performance tuning",
                "Infrastructure rightsizing",
            ],
            pricing: "ROI-based pricing available",
        },
        {
            icon: HardDrive,
            title: "Backup & Recovery Configuration",
            description: "Implement robust backup strategies and disaster recovery plans for your critical data.",
            features: [
                "Automated backup setup",
                "Point-in-time recovery",
                "Cross-region replication",
                "Disaster recovery testing",
                "Backup monitoring",
            ],
            pricing: "Starting at $1,200/month",
        },
        {
            icon: Database,
            title: "Data Migrations & Node Replacements",
            description: "Safe and efficient data migrations between systems and seamless node replacement operations.",
            features: [
                "Zero-downtime migrations",
                "Cross-platform data transfer",
                "Data validation and integrity",
                "Rollback procedures",
                "Performance optimization",
            ],
            pricing: "Project-based from $3,000",
        },
        {
            icon: Shield,
            title: "OS Patching & Maintenance",
            description: "Keep your database servers secure and up-to-date with professional maintenance services.",
            features: [
                "Security patch management",
                "System updates",
                "Vulnerability assessments",
                "Maintenance scheduling",
                "System monitoring",
            ],
            pricing: "Starting at $800/month",
        },
        {
            icon: BarChart3,
            title: "Architecture Design & Optimization",
            description: "Design scalable database architectures and optimize existing systems for peak performance.",
            features: [
                "Scalability planning",
                "High availability design",
                "Load balancing strategies",
                "Sharding implementation",
                "Performance benchmarking",
            ],
            pricing: "Consultation from $200/hour",
        },
        {
            icon: Zap,
            title: "Monitoring Setup & Performance Tuning",
            description: "Implement comprehensive monitoring solutions and fine-tune database performance.",
            features: [
                "Real-time monitoring setup",
                "Alert configuration",
                "Performance metrics tracking",
                "Capacity planning",
                "Automated reporting",
            ],
            pricing: "Setup from $1,500",
        },
        {
            icon: CheckCircle,
            title: "Database Auditing & Health Checks",
            description: "Regular health assessments and security audits to ensure your databases are running optimally.",
            features: [
                "Comprehensive health reports",
                "Security vulnerability scans",
                "Performance assessments",
                "Best practices review",
                "Recommendations report",
            ],
            pricing: "One-time from $500",
        },
    ]

    const supportedDatabases = [
        { name: "MongoDB", versions: "3.x - 7.x", features: ["Replica Sets", "Sharding", "Atlas"] },
        { name: "MySQL", versions: "5.7 - 8.x", features: ["InnoDB", "Replication", "Clustering"] },
        { name: "PostgreSQL", versions: "12+", features: ["Extensions", "Partitioning", "Streaming"] },
        { name: "Redis", versions: "6+", features: ["Clustering", "Sentinel", "Modules"] },
    ]

    return (
        <>
            <Header />
            <div className="min-h-screen">
                {/* Hero Section */}
                <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center animate-fade-in-up">
                            <h1 className="text-4xl lg:text-6xl font-bold text-[#3d3e46] mb-6">Our Database Services</h1>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
                                Comprehensive MongoDB and MySQL solutions delivered by certified DBAs with real-world experience
                            </p>
                            <div className="inline-flex items-center gap-4 bg-[#e06325]/10 rounded-full px-6 py-3">
                                <Database className="h-5 w-5 text-[#e06325]" />
                                <span className="text-[#3d3e46] font-medium">All versions and flavors supported</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Services Grid */}
                <section className="py-20 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid lg:grid-cols-3 gap-8">
                            {services.map((service, index) => (
                                <Card
                                    key={index}
                                    className="hover:shadow-xl transition-all duration-300 hover:scale-105 group animate-fade-in-up"
                                    style={{ animationDelay: `${index * 100}ms` }}
                                >
                                    <CardHeader>
                                        <div className="w-12 h-12 bg-[#e06325]/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#e06325]/20 transition-colors">
                                            <service.icon className="h-6 w-6 text-[#e06325] group-hover:scale-110 transition-transform" />
                                        </div>
                                        <CardTitle className="text-xl font-semibold text-[#3d3e46] group-hover:text-[#e06325] transition-colors">
                                            {service.title}
                                        </CardTitle>
                                        <CardDescription className="text-gray-600">{service.description}</CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="space-y-3 mb-6">
                                            {service.features.map((feature, idx) => (
                                                <div key={idx} className="flex items-center gap-2">
                                                    <CheckCircle className="h-4 w-4 text-[#e06325] flex-shrink-0" />
                                                    <span className="text-sm text-gray-600">{feature}</span>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="border-t pt-4">
                                            <div className="text-lg font-semibold text-[#e06325] mb-3">{service.pricing}</div>
                                            <Button className="w-full bg-[#e06325] hover:bg-[#c55420] text-white" asChild>
                                                <Link to="/contact">Get Quote</Link>
                                            </Button>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Supported Databases */}
                <section className="py-20 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16 animate-fade-in-up">
                            <h2 className="text-3xl lg:text-4xl font-bold text-[#3d3e46] mb-6">Supported Database Systems</h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                We support all versions and flavors of popular open-source databases
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {supportedDatabases.map((db, index) => (
                                <Card
                                    key={index}
                                    className="hover:shadow-lg transition-all duration-300 hover:scale-105 animate-fade-in-up"
                                    style={{ animationDelay: `${index * 100}ms` }}
                                >
                                    <CardContent className="p-6 text-center">
                                        <div className="w-16 h-16 bg-[#e06325]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                            <Database className="h-8 w-8 text-[#e06325]" />
                                        </div>
                                        <h3 className="text-xl font-semibold text-[#3d3e46] mb-2">{db.name}</h3>
                                        <p className="text-[#e06325] font-medium mb-4">{db.versions}</p>
                                        <div className="space-y-2">
                                            {db.features.map((feature, idx) => (
                                                <div key={idx} className="text-sm text-gray-600 bg-gray-50 rounded px-2 py-1">
                                                    {feature}
                                                </div>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Emergency Support */}
                <section className="py-20 bg-[#3d3e46]">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div className="text-white">
                                <h2 className="text-3xl lg:text-4xl font-bold mb-6">24/7 Emergency Support</h2>
                                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                                    Database down? Critical performance issues? Our emergency response team is available around the clock to
                                    get your systems back online quickly.
                                </p>
                                <div className="space-y-4 mb-8">
                                    <div className="flex items-center gap-3">
                                        <CheckCircle className="h-5 w-5 text-[#e06325]" />
                                        <span>15-minute response time</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <CheckCircle className="h-5 w-5 text-[#e06325]" />
                                        <span>Senior DBA on-call</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <CheckCircle className="h-5 w-5 text-[#e06325]" />
                                        <span>Remote access capabilities</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <CheckCircle className="h-5 w-5 text-[#e06325]" />
                                        <span>Post-incident analysis</span>
                                    </div>
                                </div>
                                <Button size="lg" className="bg-[#e06325] hover:bg-[#c55420] text-white px-8 py-3" asChild>
                                    <Link to="/contact">Contact Emergency Line</Link>
                                </Button>
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                                <div className="text-center">
                                    <div className="text-6xl font-bold text-[#e06325] mb-4">24/7</div>
                                    <div className="text-2xl font-semibold text-white mb-6">Emergency Support</div>
                                    <div className="space-y-4 text-gray-300">
                                        <div className="flex justify-between">
                                            <span>Response Time:</span>
                                            <span className="text-[#e06325] font-semibold">15 minutes</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>Availability:</span>
                                            <span className="text-[#e06325] font-semibold">24/7/365</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>Emergency Rate:</span>
                                            <span className="text-[#e06325] font-semibold">$300/hour</span>
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
