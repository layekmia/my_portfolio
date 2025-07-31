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


export default function Home() { 
  return (
    <>
      <NavBar />
      <main>
        <section id="home"><Hero/></section>
        <section id="about" className="bg-surfaceDark">
            <About/>
        </section>
        <section id="skill"><SkillSection/></section>
        <section id="work" className="bg-surfaceDark"><Projects/></section>
        <section id="testimonial" className="bg-surface"><TestimonialSection/></section>
        <section id="contact" className="bg-surfaceDark"><ContactForm/></section>
      </main>
      <Footer />
      <ToastContainer autoClose={1000} position='top-center'/>
    </>
  );
}
