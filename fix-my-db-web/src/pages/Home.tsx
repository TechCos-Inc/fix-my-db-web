import About from "@/components/about"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import Hero from "@/components/hero"
import Services from "@/components/services"
import Testimonials from "@/components/testimonials"
// import './home.css'

const Home = () => {
    return (
        <div>
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