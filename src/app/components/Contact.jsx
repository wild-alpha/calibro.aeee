
"use client";

import { useState } from "react";
import { Mail, MessageCircle, Phone, ArrowUpRight } from "lucide-react";

const EMAIL = "info@calibro.ae";
const PHONE = "+971586045588";
const WHATSAPP = "971586045588";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  message: "",
  website: "",
};

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState({
    type: "",
    message: "",
  });

  const updateField = (field, value) => {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));

    if (feedback.message) {
      setFeedback({ type: "", message: "" });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (loading) return;

    setFeedback({ type: "", message: "" });

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setFeedback({
        type: "error",
        message: "Please complete all required fields.",
      });
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          phone: form.phone.trim(),
          message: form.message.trim(),
          website: form.website,
          source: "Calibro Homepage Contact Form",
        }),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(
          result.message ||
            "Unable to send your enquiry. Please try again."
        );
      }

      setFeedback({
        type: "success",
        message:
          "Thank you! Your enquiry has been sent successfully. Our team will contact you soon.",
      });

      setForm(initialForm);
    } catch (error) {
      setFeedback({
        type: "error",
        message:
          error.message ||
          "Something went wrong. Please contact us by WhatsApp or phone.",
      });
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "w-full border-0 border-b border-[#aab3bf] bg-transparent pb-4 text-[18px] text-[#172033] outline-none transition-colors placeholder:text-[#45546d] focus:border-[#702c42]";

  const labelClass =
    "text-[13px] font-bold uppercase tracking-[0.05em] text-[#45546d]";

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative w-full bg-[#eef2f7] px-4 py-16 text-[#1d1b1a] sm:px-6 lg:px-8 lg:py-24"
    >
      <div className="mx-auto grid max-w-[1600px] grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-20">
        {/* LEFT — CONTACT INFORMATION */}
        <div className="flex flex-col items-start">
          <p className="mb-12 text-[13px] font-bold uppercase tracking-[0.14em] text-[#702c42] md:mb-14">
            08 — CONTACT
          </p>

          <h2
            id="contact-heading"
            className="max-w-[720px] text-[clamp(42px,5vw,82px)] font-bold leading-[1.12] tracking-[-0.055em]"
          >
            Let’s talk about your space.
          </h2>

          <p className="mt-9 max-w-[650px] text-[18px] leading-[1.6] text-[#45546d] md:text-[22px]">
            Reach us directly, or send a message and we’ll get back to you
            within one business day.
          </p>

          <div className="mt-14 flex flex-col gap-8 md:mt-16 md:gap-10">
            <a
              href={`mailto:${EMAIL}`}
              className="group flex items-center gap-4 text-[16px] font-semibold text-[#172033] transition-colors hover:text-[#702c42] md:text-[20px]"
            >
              <Mail size={23} strokeWidth={1.7} />
              <span>{EMAIL}</span>
              <ArrowUpRight
                size={17}
                className="opacity-0 transition-opacity group-hover:opacity-100"
              />
            </a>

            <a
              href={`https://wa.me/${WHATSAPP}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 text-[16px] font-semibold text-[#172033] transition-colors hover:text-[#702c42] md:text-[20px]"
            >
              <MessageCircle size={23} strokeWidth={1.7} />
              <span>WhatsApp +971 58 604 5588</span>
              <ArrowUpRight
                size={17}
                className="opacity-0 transition-opacity group-hover:opacity-100"
              />
            </a>

            <a
              href={`tel:${PHONE}`}
              className="group flex items-center gap-4 text-[16px] font-semibold text-[#172033] transition-colors hover:text-[#702c42] md:text-[20px]"
            >
              <Phone size={23} strokeWidth={1.7} />
              <span>Call +971 58 604 5588</span>
              <ArrowUpRight
                size={17}
                className="opacity-0 transition-opacity group-hover:opacity-100"
              />
            </a>
          </div>
        </div>

        {/* RIGHT — CONTACT FORM */}
        <div className="w-full">
          <form onSubmit={handleSubmit} className="flex flex-col gap-8">
            {/* Honeypot — hidden from real visitors */}
            <div
              aria-hidden="true"
              className="absolute -left-[9999px] h-px w-px overflow-hidden"
            >
              <label htmlFor="contact-website">
                Leave this field empty
              </label>
              <input
                id="contact-website"
                type="text"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                value={form.website}
                onChange={(e) =>
                  updateField("website", e.target.value)
                }
              />
            </div>

            {/* Name and Email */}
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
              <div className="flex flex-col gap-4">
                <label htmlFor="contact-name" className={labelClass}>
                  NAME
                </label>

                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  autoComplete="name"
                  required
                  maxLength={120}
                  placeholder="Your name"
                  value={form.name}
                  onChange={(e) =>
                    updateField("name", e.target.value)
                  }
                  className={inputClass}
                />
              </div>

              <div className="flex flex-col gap-4">
                <label htmlFor="contact-email" className={labelClass}>
                  EMAIL
                </label>

                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  autoComplete="email"
                  required
                  maxLength={254}
                  placeholder="you@email.com"
                  value={form.email}
                  onChange={(e) =>
                    updateField("email", e.target.value)
                  }
                  className={inputClass}
                />
              </div>
            </div>

            {/* Phone */}
            <div className="flex flex-col gap-4">
              <label htmlFor="contact-phone" className={labelClass}>
                PHONE (OPTIONAL)
              </label>

              <input
                id="contact-phone"
                type="tel"
                name="phone"
                autoComplete="tel"
                maxLength={60}
                placeholder="+971 5X XXX XXXX"
                value={form.phone}
                onChange={(e) =>
                  updateField("phone", e.target.value)
                }
                className={inputClass}
              />
            </div>

            {/* Project Brief */}
            <div className="flex flex-col gap-4">
              <label htmlFor="contact-message" className={labelClass}>
                PROJECT BRIEF
              </label>

              <textarea
                id="contact-message"
                name="message"
                required
                rows={5}
                maxLength={5000}
                placeholder="Tell us about the project, location, scope and target timeline..."
                value={form.message}
                onChange={(e) =>
                  updateField("message", e.target.value)
                }
                className={`${inputClass} min-h-[160px] resize-y leading-[1.6]`}
              />
            </div>

            {/* Success / Error Feedback */}
            {feedback.message && (
              <p
                role={feedback.type === "error" ? "alert" : "status"}
                aria-live="polite"
                className={`text-sm font-medium ${
                  feedback.type === "success"
                    ? "text-green-700"
                    : "text-red-700"
                }`}
              >
                {feedback.message}
              </p>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-fit min-w-[200px] rounded-full bg-[#702c42] px-9 py-4 text-[16px] font-semibold text-white transition-all duration-300 hover:bg-[#542133] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? "Sending..." : "Send message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
