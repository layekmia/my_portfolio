import About from "../components/About";
import ContactForm from "../components/Contact";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import NavBar from "../components/NavBar";
import SkillSection from "../components/Skills";
import TestimonialSection from "../components/Testimonials";
import WorkSection from "../components/WorkSection";

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
        <section id="work" className="bg-surfaceDark"><WorkSection/></section>
        <section id="Testimonial" className="bg-surface"><TestimonialSection/></section>
        <section id="contact" className="bg-surfaceDark"><ContactForm/></section>
      </main>
      <Footer />
    </>
  );
}
