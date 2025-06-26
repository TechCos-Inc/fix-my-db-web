import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Database,
  Settings,
  Shield,
  Zap,
  BarChart3,
  HeadphonesIcon,
  ArrowUpCircle,
  DollarSign,
  HardDrive,
} from "lucide-react"

export default function Services() {
  const services = [
    {
      icon: Settings,
      title: "Database Troubleshooting & Issue Resolution",
      description: "Expert diagnosis and resolution of complex database issues across MongoDB and MySQL systems.",
    },
    {
      icon: ArrowUpCircle,
      title: "Version Upgrades & Schema Changes",
      description: "Seamless database version upgrades and schema modifications with zero downtime strategies.",
    },
    {
      icon: DollarSign,
      title: "Cost Optimization",
      description: "Analyze and optimize your database infrastructure to reduce costs while maintaining performance.",
    },
    {
      icon: HardDrive,
      title: "Backup & Recovery Configuration",
      description: "Implement robust backup strategies and disaster recovery plans for your critical data.",
    },
    {
      icon: Database,
      title: "Data Migrations & Node Replacements",
      description: "Safe and efficient data migrations between systems and seamless node replacement operations.",
    },
    {
      icon: Shield,
      title: "OS Patching & Maintenance",
      description: "Keep your database servers secure and up-to-date with professional maintenance services.",
    },
    {
      icon: BarChart3,
      title: "Architecture Design & Optimization",
      description: "Design scalable database architectures and optimize existing systems for peak performance.",
    },
    {
      icon: Zap,
      title: "Monitoring Setup & Performance Tuning",
      description: "Implement comprehensive monitoring solutions and fine-tune database performance.",
    },
    {
      icon: HeadphonesIcon,
      title: "Database Auditing & Health Checks",
      description: "Regular health assessments and security audits to ensure your databases are running optimally.",
    },
  ]

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#3d3e46] mb-4">Our Database Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive MongoDB and MySQL solutions to keep your business running smoothly
          </p>
          <div className="mt-6 inline-flex items-center gap-4 bg-[#e06325]/10 rounded-full px-6 py-3">
            <Database className="h-5 w-5 text-[#e06325]" />
            <span className="text-[#3d3e46] font-medium">All versions and flavors supported</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-all duration-300 hover:scale-105 group animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <div className="w-12 h-12 bg-[#e06325]/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#e06325]/20 transition-colors">
                  <service.icon className="h-6 w-6 text-[#e06325] group-hover:scale-110 transition-transform" />
                </div>
                <CardTitle className="text-xl font-semibold text-[#3d3e46] group-hover:text-[#e06325] transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 leading-relaxed">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
