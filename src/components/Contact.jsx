import { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";
import { toast } from "react-toastify";
import ScrollIndicator from "./ScrollIndicator";

export default function ContactForm() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    setLoading(true);

    fetch(form.action, {
      method: "POST",
      body: new FormData(form),
    })
      .then(() => {
        setFormSubmitted(true);
        form.reset();
      })
      .catch(() => {
        toast.error("Failed to send message please try again");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className=" py-10 md:py-20 bg-[#0f1115] text-white flex flex-col items-center justify-center px-4 sm:px-20 lg:px-5">
      <ScrollIndicator/>
      <button className="my-10 px-6 py-2 border border-teal-400 rounded-full text-teal-400 hover:bg-teal-500 hover:text-black transition">
        Send Me A Message
      </button>

      {formSubmitted && (
        <div className="text-green-400 font-medium mb-6 text-center">
          ✅ Thanks for your message! I’ll get back to you as soon as possible.
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        action="https://formsubmit.co/layek.webdev@gmail.com"
        method="POST"
        className="w-full max-w-3xl space-y-6"
      >
        <div className="grid sm:grid-cols-2 gap-6">
          <div className="flex flex-col">
            <label className="text-sm text-teal-300 mb-1">Your name *</label>
            <input
              type="text"
              name="name"
              required
              placeholder="Enter your name"
              className="bg-transparent border-b border-gray-500 py-2 outline-none focus:border-teal-400"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-sm text-teal-300 mb-1">Your email *</label>
            <input
              type="email"
              name="email"
              required
              placeholder="Enter your email"
              className="bg-transparent border-b border-gray-500 py-2 outline-none focus:border-teal-400"
            />
          </div>
        </div>

        <div className="flex flex-col">
          <label className="text-sm text-teal-300 mb-1">Your message *</label>
          <input
            type="text"
            name="message"
            required
            placeholder="Enter your needs"
            className="bg-transparent border-b border-gray-500 py-2 outline-none focus:border-teal-400"
          />
        </div>

        {/* Hidden Fields */}
        <input type="hidden" name="_captcha" value="false" />

        <button
          type="submit"
          disabled={loading}
          className={`flex items-center gap-2 px-6 py-2 rounded-full transition
    ${
      loading
        ? "bg-teal-300 cursor-not-allowed"
        : "bg-teal-400 hover:bg-teal-300 text-black"
    }
  `}
        >
          {loading ? (
            <span className="flex items-center gap-2">
              <svg
                className="animate-spin h-4 w-4 text-black"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v8H4z"
                ></path>
              </svg>
              Sending...
            </span>
          ) : (
            <>
              Send <FaPaperPlane size={16} />
            </>
          )}
        </button>
      </form>
    </div>
  );
}
