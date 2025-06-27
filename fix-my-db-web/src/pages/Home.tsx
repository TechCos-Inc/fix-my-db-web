import About from "@/components/about"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import Header from "@/components/header"
import Hero from "@/components/hero"
import Services from "@/components/services"
import Testimonials from "@/components/testimonials"
// import './home.css'

const Home = () => {
    return (
        <div>
            <Header />
            <Hero />
            <Services />
            <About />
            <Testimonials />
            <Contact />
            <Footer />
        </div>
    )
}

export default Home