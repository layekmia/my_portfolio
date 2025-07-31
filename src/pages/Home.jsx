import About from "../components/About";
import ContactForm from "../components/Contact";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import NavBar from "../components/NavBar";
import Projects from "../components/Projects";
import SkillSection from "../components/Skills";
import TestimonialSection from "../components/Testimonials";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Sidebar from "../components/Sidebar";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true,
    });
  }, []);

  return (
    <div className="bg-surface">
      <NavBar />
      <main className="overflow-hidden">
        <section data-aos="fade-up" id="home">
          <Hero />
        </section>
        <section data-aos="fade-up" id="about" className="bg-surfaceDark">
          <About />
        </section>
        <section data-aos="fade-up" id="skill">
          <SkillSection />
        </section>
        <section data-aos="fade-up" id="work" className="bg-surfaceDark">
          <Projects />
        </section>
        <section data-aos="fade-up" id="testimonial" className="bg-surface">
          <TestimonialSection />
        </section>
        <section data-aos="fade-up" id="contact" className="bg-surfaceDark">
          <ContactForm />
        </section>
      </main>
      <Footer />
      <ToastContainer autoClose={1000} position="top-center" />
      <div className="hide-1024-1320 max-lg:hidden">
        <Sidebar />
      </div>
    </div>
  );
}
