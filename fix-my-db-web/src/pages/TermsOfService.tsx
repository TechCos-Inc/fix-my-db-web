import Footer from "@/components/footer"
import Header from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Shield,
  FileText,
  Clock,
  AlertTriangle,
  CheckCircle,
  Database,
  Server,
  Zap,
  Mail,
  Phone,
  MapPin,
} from "lucide-react"
import { Link } from "react-router-dom"

export default function TermsPage() {
  const sections = [
    {
      id: "agreement",
      title: "Agreement to Terms",
      icon: FileText,
      content: `By accessing and using FixMyDB services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.`,
    },
    {
      id: "services",
      title: "Services Description",
      icon: Database,
      content: `FixMyDB provides database consulting, optimization, troubleshooting, and support services for MongoDB, MySQL, and other open-source database systems.`,
    },
    {
      id: "availability",
      title: "Service Availability",
      icon: Clock,
      content: `FixMyDB operates with a flexible team model where certified DBAs contribute based on their availability alongside their full-time roles.`,
    },
    {
      id: "payment",
      title: "Payment Terms",
      icon: CheckCircle,
      content: `Payment terms vary by service type and are clearly outlined in service agreements.`,
    },
    {
      id: "security",
      title: "Data Security and Confidentiality",
      icon: Shield,
      content: `We maintain the highest standards of data security and confidentiality with comprehensive NDAs and industry-standard security practices.`,
    },
    {
      id: "liability",
      title: "Limitation of Liability",
      icon: AlertTriangle,
      content: `FixMyDB's liability is limited to the amount paid for the specific service in question.`,
    },
  ]

  const servicesList = [
    "Database troubleshooting and issue resolution",
    "Version upgrades and schema changes",
    "Cost optimization and performance tuning",
    "Backup and recovery configuration",
    "Data migrations and node replacements",
    "OS patching and maintenance",
    "Architecture design and optimization",
    "Monitoring setup and performance tuning",
    "Database auditing and health checks",
  ]

  const paymentTerms = [
    { type: "Hourly services", terms: "Payment due within 30 days of invoice" },
    { type: "Project-based work", terms: "50% upfront, 50% upon completion" },
    { type: "Monthly retainers", terms: "Payment due in advance" },
    { type: "Emergency services", terms: "Payment due within 15 days" },
  ]

  const responseTimes = [
    { level: "Emergency support", time: "15-minute response time" },
    { level: "High priority issues", time: "2-hour response time" },
    { level: "Standard support", time: "4-hour response time during business hours" },
    { level: "General inquiries", time: "24-hour response time" },
  ]

  return (
    <>
      <Header />
      <div className="min-h-screen relative overflow-hidden">
        {/* Database-themed background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 animate-float">
            <Database className="h-20 w-20 text-[#e06325]" />
          </div>
          <div className="absolute top-40 right-20 animate-float" style={{ animationDelay: "1s" }}>
            <Server className="h-16 w-16 text-[#e06325]" />
          </div>
          <div className="absolute bottom-40 left-1/4 animate-float" style={{ animationDelay: "2s" }}>
            <Shield className="h-18 w-18 text-[#e06325]" />
          </div>
          <div className="absolute bottom-20 right-1/3 animate-float" style={{ animationDelay: "0.5s" }}>
            <Zap className="h-14 w-14 text-[#e06325]" />
          </div>
        </div>

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-20 relative">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center animate-fade-in-up">
              <div className="inline-flex items-center gap-2 bg-[#e06325]/10 rounded-full px-4 py-2 mb-6">
                <FileText className="h-4 w-4 text-[#e06325]" />
                <span className="text-sm font-medium text-[#3d3e46]">Legal Documentation</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-[#3d3e46] mb-6">Terms and Conditions</h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Please read these terms carefully before using our database consulting services
              </p>
              <div className="mt-6 inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2">
                <Clock className="h-4 w-4 text-[#e06325]" />
                <span className="text-sm text-[#3d3e46]">Last updated: December 2024</span>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Navigation */}
        <section className="py-12 bg-white border-b">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-semibold text-[#3d3e46] mb-6 text-center">Quick Navigation</h2>
            <div className="grid md:grid-cols-3 gap-4">
              {sections.map((section, index) => (
                <a
                  key={index}
                  href={`#${section.id}`}
                  className="flex items-center gap-3 p-4 bg-gray-50 hover:bg-[#e06325]/5 rounded-lg transition-all duration-300 hover:scale-105 group"
                >
                  <div className="w-10 h-10 bg-[#e06325]/10 rounded-lg flex items-center justify-center group-hover:bg-[#e06325]/20 transition-colors">
                    <section.icon className="h-5 w-5 text-[#e06325]" />
                  </div>
                  <span className="font-medium text-[#3d3e46] group-hover:text-[#e06325] transition-colors">
                    {section.title}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="space-y-12">
            {/* Agreement to Terms */}
            <Card id="agreement" className="hover:shadow-lg transition-shadow animate-fade-in-up">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-[#e06325]/10 rounded-lg flex items-center justify-center">
                    <FileText className="h-6 w-6 text-[#e06325]" />
                  </div>
                  <h2 className="text-3xl font-semibold text-[#3d3e46]">1. Agreement to Terms</h2>
                </div>
                <p className="text-gray-600 leading-relaxed text-lg">
                  By accessing and using FixMyDB services, you accept and agree to be bound by the terms and provision of
                  this agreement. If you do not agree to abide by the above, please do not use this service.
                </p>
              </CardContent>
            </Card>

            {/* Services Description */}
            <Card id="services" className="hover:shadow-lg transition-shadow animate-fade-in-up">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-[#e06325]/10 rounded-lg flex items-center justify-center">
                    <Database className="h-6 w-6 text-[#e06325]" />
                  </div>
                  <h2 className="text-3xl font-semibold text-[#3d3e46]">2. Services Description</h2>
                </div>
                <p className="text-gray-600 leading-relaxed text-lg mb-6">
                  FixMyDB provides database consulting, optimization, troubleshooting, and support services for MongoDB,
                  MySQL, and other open-source database systems. Our services include but are not limited to:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  {servicesList.map((service, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                      <CheckCircle className="h-5 w-5 text-[#e06325] flex-shrink-0" />
                      <span className="text-gray-700">{service}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Service Availability */}
            <Card id="availability" className="hover:shadow-lg transition-shadow animate-fade-in-up">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-[#e06325]/10 rounded-lg flex items-center justify-center">
                    <Clock className="h-6 w-6 text-[#e06325]" />
                  </div>
                  <h2 className="text-3xl font-semibold text-[#3d3e46]">3. Service Availability</h2>
                </div>
                <p className="text-gray-600 leading-relaxed text-lg">
                  FixMyDB operates with a flexible team model where certified DBAs contribute based on their availability
                  alongside their full-time roles. While we strive to provide timely service, availability may vary based
                  on team member schedules and workload.
                </p>
              </CardContent>
            </Card>

            {/* Payment Terms */}
            <Card id="payment" className="hover:shadow-lg transition-shadow animate-fade-in-up">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-[#e06325]/10 rounded-lg flex items-center justify-center">
                    <CheckCircle className="h-6 w-6 text-[#e06325]" />
                  </div>
                  <h2 className="text-3xl font-semibold text-[#3d3e46]">4. Payment Terms</h2>
                </div>
                <p className="text-gray-600 leading-relaxed text-lg mb-6">Payment terms vary by service type:</p>
                <div className="space-y-4">
                  {paymentTerms.map((term, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-4 p-4 bg-gradient-to-r from-[#e06325]/5 to-transparent rounded-lg border-l-4 border-[#e06325]"
                    >
                      <div className="font-semibold text-[#3d3e46] min-w-0 flex-1">{term.type}:</div>
                      <div className="text-gray-600 flex-2">{term.terms}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Data Security */}
            <Card id="security" className="hover:shadow-lg transition-shadow animate-fade-in-up">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-[#e06325]/10 rounded-lg flex items-center justify-center">
                    <Shield className="h-6 w-6 text-[#e06325]" />
                  </div>
                  <h2 className="text-3xl font-semibold text-[#3d3e46]">5. Data Security and Confidentiality</h2>
                </div>
                <p className="text-gray-600 leading-relaxed text-lg">
                  We understand the critical nature of your database systems and commit to maintaining the highest
                  standards of data security and confidentiality. All team members sign comprehensive NDAs, and we
                  implement industry-standard security practices for remote access and data handling.
                </p>
              </CardContent>
            </Card>

            {/* Service Level Agreements */}
            <Card className="hover:shadow-lg transition-shadow animate-fade-in-up">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-[#e06325]/10 rounded-lg flex items-center justify-center">
                    <Zap className="h-6 w-6 text-[#e06325]" />
                  </div>
                  <h2 className="text-3xl font-semibold text-[#3d3e46]">7. Service Level Agreements</h2>
                </div>
                <p className="text-gray-600 leading-relaxed text-lg mb-6">Response times vary by service level:</p>
                <div className="grid md:grid-cols-2 gap-4">
                  {responseTimes.map((response, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <span className="font-medium text-[#3d3e46]">{response.level}:</span>
                      <span className="text-[#e06325] font-semibold">{response.time}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card className="hover:shadow-lg transition-shadow animate-fade-in-up bg-gradient-to-br from-[#e06325]/5 to-blue-500/5">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-[#e06325]/10 rounded-lg flex items-center justify-center">
                    <Mail className="h-6 w-6 text-[#e06325]" />
                  </div>
                  <h2 className="text-3xl font-semibold text-[#3d3e46]">10. Contact Information</h2>
                </div>
                <p className="text-gray-600 leading-relaxed text-lg mb-6">
                  For questions about these terms and conditions, please contact us at:
                </p>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="flex items-center gap-3 p-4 bg-white rounded-lg">
                    <Mail className="h-5 w-5 text-[#e06325]" />
                    <div>
                      <div className="font-medium text-[#3d3e46]">Email</div>
                      <div className="text-gray-600">legal@fixmydb.com</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-white rounded-lg">
                    <Phone className="h-5 w-5 text-[#e06325]" />
                    <div>
                      <div className="font-medium text-[#3d3e46]">Phone</div>
                      <div className="text-gray-600">+1 (555) 123-4567</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-white rounded-lg">
                    <MapPin className="h-5 w-5 text-[#e06325]" />
                    <div>
                      <div className="font-medium text-[#3d3e46]">Address</div>
                      <div className="text-gray-600">123 Database Street, Tech City, NY 10001</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <div className="bg-[#3d3e46] rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Questions About Our Terms?</h3>
              <p className="text-gray-300 mb-6">
                Our team is here to help clarify any questions you may have about our terms and conditions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-[#e06325] hover:bg-[#c55420] text-white" asChild>
                  <Link to="/contact">Contact Legal Team</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent text-white border-white hover:bg-white hover:text-[#3d3e46]"
                  asChild
                >
                  <Link to="/privacy-policy">View Privacy Policy</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
