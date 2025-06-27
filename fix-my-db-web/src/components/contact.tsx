import { useRef, useState } from "react"
import emailjs from "@emailjs/browser"
import PhoneInput from "react-phone-input-2"
import "react-phone-input-2/lib/style.css"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mail, Phone, MapPin } from "lucide-react"
import React from "react"

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null)
  const [phone, setPhone] = useState("")
  const [preferred, setPreferred] = useState<string[]>([])
  const [database, setDatabase] = useState("")

  const handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, checked } = e.target
    setPreferred((prev) =>
      checked ? [...prev, id] : prev.filter((x) => x !== id)
    )
  }

const sendEmail = (e: React.FormEvent) => {
  e.preventDefault()
  if (!formRef.current) return

  const form = formRef.current
  const name = form.user_name.value.trim()
  const email = form.user_email.value.trim()
  const message = form.message.value.trim()

  if (!name) {
    alert("Please enter your name.")
    return
  }

  if (!email) {
    alert("Please enter your email.")
    return
  }

  // Basic email format check
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    alert("Please enter a valid email address.")
    return
  }

  if (!phone) {
    alert("Please enter your phone number.")
    return
  }

  if (!database) {
    alert("Please select a database.")
    return
  }

  if (!message) {
    alert("Please enter your message.")
    return
  }

  if (preferred.length === 0) {
    alert("Please select at least one preferred contact option.")
    return
  }

  emailjs
    .sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID as string,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string,
      formRef.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string
    )
    .then(() => {
      alert("Message sent!")
      form.reset()
      setPhone("")
      setPreferred([])
      setDatabase("")
    })
    .catch(() => alert("Error sending message."))
}


  return (
    <section id="contact" className="py-20 bg-[#f8f9fa] scroll-mt-15 font-body">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-gray-900 mb-4 font-inter">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-inter">
            Ready to fix your database issues? Contact us for a free consultation
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <Card className="border border-gray-300 shadow-md rounded-xl">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-gray-900 mb-4 font-inter">
                Send us a message
              </CardTitle>
            </CardHeader>

            <CardContent>
              <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="user_name" className="font-inter">Name*</Label>
                  <Input id="user_name" name="user_name" className="font-inter" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="user_email" className="font-inter">Email*</Label>
                  <Input id="user_email" name="user_email" type="email" className="font-inter" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="font-inter">Mobile No.*</Label>
                  <PhoneInput
                    country="in"
                    value={phone}
                    onChange={setPhone}
                    inputStyle={{ width: "100%", borderRadius: "0.5rem", height: "42px" }}
                  />
                  <input type="hidden" name="phone" value={phone} />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="database" className="font-inter">Select Database*</Label>
                  <Select onValueChange={setDatabase}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Choose any one option" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="MySQL">MySQL</SelectItem>
                      <SelectItem value="PostgreSQL">PostgreSQL</SelectItem>
                      <SelectItem value="MongoDB">MongoDB</SelectItem>
                      <SelectItem value="Oracle">Oracle</SelectItem>
                      <SelectItem value="SQL Server">SQL Server</SelectItem>
                    </SelectContent>
                  </Select>
                  <input type="hidden" name="database" value={database} />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="font-inter">Message*</Label>
                  <Textarea
                    id="message"
                    name="message"
                    className="font-inter min-h-[120px]"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label className="font-inter">Preferred Contact Option</Label>
                  <div className="flex items-center gap-4 flex-wrap">
                   {["phone", "email", "whatsapp"].map((type) => (
                    <div key={type} className="flex items-center space-x-2">
                      <Checkbox
                      id={type}
                      checked={preferred.includes(type)}
                      onCheckedChange={(checked) =>
                        handleCheckbox({ target: { id: type, checked } } as React.ChangeEvent<HTMLInputElement>)
                      }
                    />
                      <Label htmlFor={type} className="font-inter">
                        {type.charAt(0).toUpperCase() + type.slice(1)}
                      </Label>
                    </div>
                  ))}
                  </div>
                  <input type="hidden" name="preferred_contact" value={preferred.join(", ")} />
                </div>

              <div className="flex justify-center">
  <Button
    type="submit"
    className="bg-[#ff6a00] hover:bg-[#e85c00] text-white text-lg py-2.5 px-8 rounded-md font-inter"
  >
    Get a Free Consultation
  </Button>
</div>

              </form>
            </CardContent>
          </Card>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6 font-display font-inter">
                Contact Information
              </h3>
              <div className="space-y-6 text-base">
                {[
                  { icon: <Mail />, title: "Email", details: ["technical-team@fixmydb.com", "fixmydbteam@gmail.com"] },
                  { icon: <Phone />, title: "Phone", details: ["+91 7093495068", "24/7 Emergency: +91 7093495068"] },
                  { icon: <MapPin />, title: "Office", details: ["123 Database Street", "Tech City, India"] },
                ].map((info, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                      {React.cloneElement(info.icon, { className: "h-6 w-6 text-orange-600" })}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 font-inter">{info.title}</h4>
                      {info.details.map((txt) => (
                        <p key={txt} className="text-gray-600 font-inter">{txt}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-orange-50 rounded-lg p-6">
              <h4 className="font-semibold text-gray-900 font-inter">Emergency Support</h4>
              <p className="text-gray-600 font-inter">
                Database down? We offer 24/7 emergency support for critical issues.
              </p>
              <Button variant="outline" className="bg-white text-orange-600 border-orange-600 hover:bg-orange-100 font-inter">
                Call Emergency Line
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
