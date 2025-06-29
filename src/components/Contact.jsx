import { FaPaperPlane } from "react-icons/fa";

export default function ContactForm() {
  return (
    <div className="min-h-screen bg-[#0f1115] text-white flex flex-col items-center justify-center px-4">

      <button className="mb-10 px-6 py-2 border border-teal-400 rounded-full text-teal-400 hover:bg-teal-500 hover:text-black transition">
        Send Me A Message
      </button>

      <form className="w-full max-w-3xl space-y-6">
        <div className="grid sm:grid-cols-2 gap-6">
          <div className="flex flex-col">
            <label className="text-sm text-teal-300 mb-1">Your name *</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="bg-transparent border-b border-gray-500 py-2 outline-none focus:border-teal-400"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-sm text-teal-300 mb-1">Your email *</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-transparent border-b border-gray-500 py-2 outline-none focus:border-teal-400"
            />
          </div>
        </div>

        <div className="flex flex-col">
          <label className="text-sm text-teal-300 mb-1">Your message *</label>
          <input
            type="text"
            placeholder="Enter your needs"
            className="bg-transparent border-b border-gray-500 py-2 outline-none focus:border-teal-400"
          />
        </div>

        <button
          type="submit"
          className="flex items-center gap-2 bg-teal-400 text-black px-6 py-2 rounded-full hover:bg-teal-300 transition"
        >
          Send <FaPaperPlane size={16} />
        </button>
      </form>
    </div>
  );
}
