import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useForm, ValidationError } from "@formspree/react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [errors, setErrors] = useState({});
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });
  const [formState, handleFormspreeSubmit] = useForm("xwvqkdwg");

  const container = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.08 } },
  };

  const item = {
    hidden: { opacity: 0, y: 12 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 120, damping: 14 } },
  };

  const handleChange = (e) => setForm((s) => ({ ...s, [e.target.name]: e.target.value }));

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = "Please enter your name";
    if (!form.email.trim()) errs.email = "Please enter your email";
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) errs.email = "Please enter a valid email";
    if (form.phone && !/^\+?[0-9\s-]{7,20}$/.test(form.phone)) errs.phone = "Please enter a valid phone number";
    if (!form.message.trim()) errs.message = "Please enter a message";
    return errs;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    try {
      await handleFormspreeSubmit(e);
      // Formspree updates formState.succeeded when successful
      if (formState.succeeded) {
        setForm({ name: "", email: "", phone: "", message: "" });
        setErrors({});
      }
    } catch (err) {
      console.error("Formspree submit error:", err);
    }
  };

  return (
    <section id="contact" className="py-20 bg-[#0e0c1e]">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={container}
        className="max-w-3xl mx-auto px-6"
      >
        <motion.h2 variants={item} className="text-5xl md:text-4xl font-bold text-white text-center mb-3">
          Contact Me
        </motion.h2>
        <motion.p variants={item} className="text-gray-400 text-center mb-8">
          Have a project or a question? Send a message — I’d love to hear from you.
        </motion.p>

        <motion.form
          onSubmit={handleSubmit}
          variants={container}
          className="bg-gray-900 rounded-xl p-6 shadow-xl border border-gray-800"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <motion.div variants={item} className="flex flex-col">
              <label className="text-sm text-gray-300 mb-1">Full Name</label>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                className={`bg-gray-800 text-white rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 transition ${errors.name ? "ring-2 ring-red-500" : ""}`}
                placeholder="Your name"
                aria-invalid={errors.name ? "true" : "false"}
              />
              {errors.name && <span className="text-xs text-red-400 mt-1">{errors.name}</span>}
            </motion.div>

            <motion.div variants={item} className="flex flex-col">
              <label className="text-sm text-gray-300 mb-1">Email</label>
              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                className={`bg-gray-800 text-white rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 transition ${errors.email ? "ring-2 ring-red-500" : ""}`}
                placeholder="you@example.com"
                aria-invalid={errors.email ? "true" : "false"}
              />
              {errors.email && <span className="text-xs text-red-400 mt-1">{errors.email}</span>}
              <ValidationError prefix="Email" field="email" errors={formState.errors} />
            </motion.div>

            <motion.div variants={item} className="flex flex-col sm:col-span-2">
              <label className="text-sm text-gray-300 mb-1">Phone Number (optional)</label>
              <input
                name="phone"
                value={form.phone}
                onChange={handleChange}
                className={`bg-gray-800 text-white rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 transition ${errors.phone ? "ring-2 ring-red-500" : ""}`}
                placeholder="+1 555 555 5555"
                aria-invalid={errors.phone ? "true" : "false"}
              />
              {errors.phone && <span className="text-xs text-red-400 mt-1">{errors.phone}</span>}
            </motion.div>

            <motion.div variants={item} className="flex flex-col sm:col-span-2">
              <label className="text-sm text-gray-300 mb-1">Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={5}
                className={`bg-gray-800 text-white rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 transition resize-none ${errors.message ? "ring-2 ring-red-500" : ""}`}
                placeholder="Tell me about your project or question"
                aria-invalid={errors.message ? "true" : "false"}
              />
              {errors.message && <span className="text-xs text-red-400 mt-1">{errors.message}</span>}
              <ValidationError prefix="Message" field="message" errors={formState.errors} />
            </motion.div>
          </div>

          <motion.div variants={item} className="mt-5 flex items-center justify-between">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={formState.submitting}
              className="bg-gradient-to-r from-purple-600 to-purple-400 text-white px-5 py-2 rounded-full font-semibold shadow-md hover:opacity-95 transition disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {formState.submitting ? "Sending..." : "Send Message"}
            </motion.button>

            {formState.succeeded && (
              <motion.div
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-green-400 text-sm"
                aria-live="polite"
              >
                Message sent — thank you!
              </motion.div>
            )}
          </motion.div>
        </motion.form>
      </motion.div>
    </section>
  );
};

export default Contact;
