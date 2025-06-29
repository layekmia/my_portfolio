import ScrollIndicator from "./ScrollIndicator";

const testimonials = [
  {
    name: "James Turner",
    role: "Project Manager, UK",
    feedback:
      "Layek delivered high-quality front-end work faster than expected. He’s focused, professional, and easy to work with. Highly recommended!",
  },
  {
    name: "Ayesha Rahman",
    role: "Startup Founder, BD",
    feedback:
      "I’m really impressed with the UI Layek created. He turned our messy idea into a beautiful, responsive website. Will definitely hire again.",
  },
  {
    name: "Tariq Ali",
    role: "Freelance Client",
    feedback:
      "Excellent communication and pixel-perfect design. Layek understood exactly what I wanted and made it happen with clean code.",
  },
  {
    name: "Tariq Ali",
    role: "Freelance Client",
    feedback:
      "Excellent communication and pixel-perfect design. Layek understood exactly what I wanted and made it happen with clean code.",
  },
];

const TestimonialSection = () => {
  return (
    <div className="py-20 px-4 text-textPrimary max-w-6xl mx-auto">
        <ScrollIndicator/>
      <h2 className="text-3xl font-sans text-center my-10 font-medium">
        Testimonials
      </h2>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((t, index) => (
          <div
            key={index}
            className="bg-surfaceDark p-6 rounded-lg shadow-md hover:shadow-lg transition-all border border-transparent hover:border-secondaryText"
          >
            <p className="text-textPrimary mb-4">“{t.feedback}”</p>
            <h4 className="text-secondaryText font-semibold">{t.name}</h4>
            <span className="text-sm text-textPrimary/70">{t.role}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialSection;
