import Footer from "@/components/footer"
import Header from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Shield,
  Lock,
  Eye,
  Database,
  Server,
  Users,
  Globe,
  FileText,
  Clock,
  Mail,
  Phone,
  MapPin,
  CheckCircle,
} from "lucide-react"
import { Link } from "react-router-dom"

export default function PrivacyPage() {
  const dataTypes = [
    "Name, email address, and contact information",
    "Company information and job title",
    "Database system details and configurations",
    "Technical information necessary to provide services",
    "Communication records and support tickets",
  ]

  const dataUsage = [
    "Provide, maintain, and improve our database services",
    "Process transactions and send related information",
    "Send technical notices, updates, and support messages",
    "Respond to your comments, questions, and customer service requests",
    "Monitor and analyze trends, usage, and activities",
    "Detect, investigate, and prevent fraudulent transactions",
  ]

  const securityMeasures = [
    { measure: "Encryption of data in transit and at rest", icon: Lock },
    { measure: "Regular security assessments and updates", icon: Shield },
    { measure: "Access controls and authentication mechanisms", icon: Users },
    { measure: "Employee training on data protection practices", icon: FileText },
    { measure: "Secure remote access protocols for database services", icon: Server },
  ]

  const databaseAccess = [
    "Accessing only the minimum data necessary to provide services",
    "Using secure, encrypted connections for all database access",
    "Not storing or copying client data unless explicitly required for service delivery",
    "Implementing strict access controls and audit logging",
    "Ensuring all team members sign comprehensive NDAs",
  ]

  const retentionPeriods = [
    { type: "Account information", period: "Until account deletion or 3 years of inactivity" },
    { type: "Service records", period: "7 years for business and legal purposes" },
    { type: "Support communications", period: "3 years from last interaction" },
    { type: "Database access logs", period: "1 year for security and audit purposes" },
  ]

  const userRights = [
    { right: "Access", description: "Request a copy of your personal information" },
    { right: "Correction", description: "Request correction of inaccurate information" },
    { right: "Deletion", description: "Request deletion of your personal information" },
    { right: "Portability", description: "Request transfer of your data to another service" },
    { right: "Objection", description: "Object to processing of your personal information" },
  ]

  const cookieTypes = [
    { type: "Essential cookies", purpose: "for website functionality" },
    { type: "Analytics cookies", purpose: "to understand website usage" },
    { type: "Preference cookies", purpose: "to remember your settings" },
    { type: "Security cookies", purpose: "to protect against fraud" },
  ]

  return (
    <>
      <Header />
      <div className="min-h-screen relative overflow-hidden">
        {/* Database-themed background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 animate-float">
            <Shield className="h-20 w-20 text-[#e06325]" />
          </div>
          <div className="absolute top-40 right-20 animate-float" style={{ animationDelay: "1s" }}>
            <Lock className="h-16 w-16 text-[#e06325]" />
          </div>
          <div className="absolute bottom-40 left-1/4 animate-float" style={{ animationDelay: "2s" }}>
            <Database className="h-18 w-18 text-[#e06325]" />
          </div>
          <div className="absolute bottom-20 right-1/3 animate-float" style={{ animationDelay: "0.5s" }}>
            <Eye className="h-14 w-14 text-[#e06325]" />
          </div>
        </div>

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-20 relative">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center animate-fade-in-up">
              <div className="inline-flex items-center gap-2 bg-[#e06325]/10 rounded-full px-4 py-2 mb-6">
                <Shield className="h-4 w-4 text-[#e06325]" />
                <span className="text-sm font-medium text-[#3d3e46]">Data Protection & Privacy</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-[#3d3e46] mb-6">Privacy Policy</h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Your privacy and data security are our top priorities. Learn how we protect and handle your information.
              </p>
              <div className="mt-6 inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2">
                <Clock className="h-4 w-4 text-[#e06325]" />
                <span className="text-sm text-[#3d3e46]">Last updated: December 2024</span>
              </div>
            </div>
          </div>
        </section>

        {/* Privacy Highlights */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-[#3d3e46] text-center mb-12">Privacy at a Glance</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105 animate-fade-in-up">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-[#e06325]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Lock className="h-8 w-8 text-[#e06325]" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#3d3e46] mb-3">Encrypted & Secure</h3>
                  <p className="text-gray-600">
                    All data is encrypted in transit and at rest using industry-standard protocols.
                  </p>
                </CardContent>
              </Card>
              <Card
                className="hover:shadow-lg transition-all duration-300 hover:scale-105 animate-fade-in-up"
                style={{ animationDelay: "100ms" }}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-[#e06325]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Eye className="h-8 w-8 text-[#e06325]" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#3d3e46] mb-3">Transparent</h3>
                  <p className="text-gray-600">Clear information about what data we collect and how we use it.</p>
                </CardContent>
              </Card>
              <Card
                className="hover:shadow-lg transition-all duration-300 hover:scale-105 animate-fade-in-up"
                style={{ animationDelay: "200ms" }}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-[#e06325]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-[#e06325]" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#3d3e46] mb-3">Your Control</h3>
                  <p className="text-gray-600">
                    Full control over your data with easy access, correction, and deletion rights.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="space-y-12">
            {/* Information We Collect */}
            <Card className="hover:shadow-lg transition-shadow animate-fade-in-up">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-[#e06325]/10 rounded-lg flex items-center justify-center">
                    <Database className="h-6 w-6 text-[#e06325]" />
                  </div>
                  <h2 className="text-3xl font-semibold text-[#3d3e46]">1. Information We Collect</h2>
                </div>
                <p className="text-gray-600 leading-relaxed text-lg mb-6">
                  FixMyDB collects information you provide directly to us, such as when you create an account, request
                  services, or contact us for support. This may include:
                </p>
                <div className="space-y-3">
                  {dataTypes.map((type, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                      <CheckCircle className="h-5 w-5 text-[#e06325] flex-shrink-0" />
                      <span className="text-gray-700">{type}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* How We Use Information */}
            <Card className="hover:shadow-lg transition-shadow animate-fade-in-up">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-[#e06325]/10 rounded-lg flex items-center justify-center">
                    <Server className="h-6 w-6 text-[#e06325]" />
                  </div>
                  <h2 className="text-3xl font-semibold text-[#3d3e46]">2. How We Use Your Information</h2>
                </div>
                <p className="text-gray-600 leading-relaxed text-lg mb-6">We use the information we collect to:</p>
                <div className="grid md:grid-cols-2 gap-4">
                  {dataUsage.map((usage, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-3 bg-gradient-to-r from-[#e06325]/5 to-transparent rounded-lg border-l-4 border-[#e06325]"
                    >
                      <CheckCircle className="h-5 w-5 text-[#e06325] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{usage}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Data Security */}
            <Card className="hover:shadow-lg transition-shadow animate-fade-in-up">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-[#e06325]/10 rounded-lg flex items-center justify-center">
                    <Shield className="h-6 w-6 text-[#e06325]" />
                  </div>
                  <h2 className="text-3xl font-semibold text-[#3d3e46]">4. Data Security</h2>
                </div>
                <p className="text-gray-600 leading-relaxed text-lg mb-6">
                  We implement appropriate technical and organizational security measures to protect your personal
                  information against unauthorized access, alteration, disclosure, or destruction. These measures include:
                </p>
                <div className="space-y-4">
                  {securityMeasures.map((security, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-4 p-4 bg-white border border-gray-200 rounded-lg hover:border-[#e06325]/30 transition-colors"
                    >
                      <div className="w-10 h-10 bg-[#e06325]/10 rounded-lg flex items-center justify-center">
                        <security.icon className="h-5 w-5 text-[#e06325]" />
                      </div>
                      <span className="text-gray-700 font-medium">{security.measure}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Database Access */}
            <Card className="hover:shadow-lg transition-shadow animate-fade-in-up bg-gradient-to-br from-[#e06325]/5 to-blue-500/5">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-[#e06325]/10 rounded-lg flex items-center justify-center">
                    <Database className="h-6 w-6 text-[#e06325]" />
                  </div>
                  <h2 className="text-3xl font-semibold text-[#3d3e46]">5. Database Access and Client Data</h2>
                </div>
                <p className="text-gray-600 leading-relaxed text-lg mb-6">
                  When providing database services, we may need access to your database systems and data. We commit to:
                </p>
                <div className="space-y-3">
                  {databaseAccess.map((commitment, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 bg-white rounded-lg">
                      <div className="w-6 h-6 bg-[#e06325] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle className="h-4 w-4 text-white" />
                      </div>
                      <span className="text-gray-700">{commitment}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Data Retention */}
            <Card className="hover:shadow-lg transition-shadow animate-fade-in-up">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-[#e06325]/10 rounded-lg flex items-center justify-center">
                    <Clock className="h-6 w-6 text-[#e06325]" />
                  </div>
                  <h2 className="text-3xl font-semibold text-[#3d3e46]">6. Data Retention</h2>
                </div>
                <p className="text-gray-600 leading-relaxed text-lg mb-6">
                  We retain personal information for as long as necessary to provide services and fulfill the purposes
                  outlined in this policy. Specific retention periods include:
                </p>
                <div className="space-y-4">
                  {retentionPeriods.map((retention, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <span className="font-medium text-[#3d3e46]">{retention.type}:</span>
                      <span className="text-[#e06325] font-semibold text-right">{retention.period}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Your Rights */}
            <Card className="hover:shadow-lg transition-shadow animate-fade-in-up">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-[#e06325]/10 rounded-lg flex items-center justify-center">
                    <Users className="h-6 w-6 text-[#e06325]" />
                  </div>
                  <h2 className="text-3xl font-semibold text-[#3d3e46]">7. Your Rights and Choices</h2>
                </div>
                <p className="text-gray-600 leading-relaxed text-lg mb-6">
                  You have the following rights regarding your personal information:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  {userRights.map((right, index) => (
                    <div
                      key={index}
                      className="p-4 bg-white border border-gray-200 rounded-lg hover:border-[#e06325]/30 transition-colors"
                    >
                      <div className="font-semibold text-[#e06325] mb-2">{right.right}</div>
                      <div className="text-gray-600 text-sm">{right.description}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Cookies */}
            <Card className="hover:shadow-lg transition-shadow animate-fade-in-up">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-[#e06325]/10 rounded-lg flex items-center justify-center">
                    <Globe className="h-6 w-6 text-[#e06325]" />
                  </div>
                  <h2 className="text-3xl font-semibold text-[#3d3e46]">8. Cookies and Tracking Technologies</h2>
                </div>
                <p className="text-gray-600 leading-relaxed text-lg mb-6">
                  We use cookies and similar tracking technologies to collect and use personal information about you. Our
                  use includes:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  {cookieTypes.map((cookie, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                      <div className="w-8 h-8 bg-[#e06325]/10 rounded-full flex items-center justify-center">
                        <Globe className="h-4 w-4 text-[#e06325]" />
                      </div>
                      <div>
                        <div className="font-medium text-[#3d3e46]">{cookie.type}</div>
                        <div className="text-sm text-gray-600">{cookie.purpose}</div>
                      </div>
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
                  <h2 className="text-3xl font-semibold text-[#3d3e46]">11. Contact Us</h2>
                </div>
                <p className="text-gray-600 leading-relaxed text-lg mb-6">
                  If you have any questions about this privacy policy or our data practices, please contact us:
                </p>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="flex items-center gap-3 p-4 bg-white rounded-lg">
                    <Mail className="h-5 w-5 text-[#e06325]" />
                    <div>
                      <div className="font-medium text-[#3d3e46]">Email</div>
                      <div className="text-gray-600 text-sm">privacy@fixmydb.com</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-white rounded-lg">
                    <Phone className="h-5 w-5 text-[#e06325]" />
                    <div>
                      <div className="font-medium text-[#3d3e46]">Phone</div>
                      <div className="text-gray-600 text-sm">+1 (555) 123-4567</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-white rounded-lg">
                    <MapPin className="h-5 w-5 text-[#e06325]" />
                    <div>
                      <div className="font-medium text-[#3d3e46]">Address</div>
                      <div className="text-gray-600 text-sm">123 Database Street</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-white rounded-lg">
                    <Shield className="h-5 w-5 text-[#e06325]" />
                    <div>
                      <div className="font-medium text-[#3d3e46]">DPO</div>
                      <div className="text-gray-600 text-sm">dpo@fixmydb.com</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <div className="bg-[#3d3e46] rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Questions About Your Privacy?</h3>
              <p className="text-gray-300 mb-6">
                Our privacy team is here to help with any questions about how we handle your data.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-[#e06325] hover:bg-[#c55420] text-white" asChild>
                  <Link to="/contact">Contact Privacy Team</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent text-white border-white hover:bg-white hover:text-[#3d3e46]"
                  asChild
                >
                  <Link to="/terms-of-service">View Terms & Conditions</Link>
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
