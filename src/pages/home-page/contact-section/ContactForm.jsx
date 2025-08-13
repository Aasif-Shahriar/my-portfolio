import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const form = useRef();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Send email to yourself
    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY }
      )
      .then(
        () => {
          // Send auto-reply to user
          emailjs.send(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_AUTOREPLY_TEMPLATE_ID,
            {
              user_name: form.current.user_name.value,
              user_email: form.current.user_email.value,
              message: form.current.message.value,
            },
            { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY }
          );

          console.log("SUCCESS!");
          setIsSubmitted(true);
          setIsSubmitting(false);
          e.target.reset();
          setTimeout(() => setIsSubmitted(false), 4000);
        },
        (error) => {
          console.log("FAILED...", error.text);
          setIsSubmitting(false);
        }
      );
  };

  return (
    <motion.div
      className="lg:col-span-3"
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      viewport={{ once: true }}
    >
      <div className="bg-white/70 dark:bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-300 dark:border-gray-700/50">
        <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-8">
          Send Message
        </h3>

        {isSubmitted && (
          <motion.div
            className="mb-6 p-4 bg-green-100 dark:bg-green-500/20 border border-green-300 dark:border-green-500/30 rounded-lg flex items-center gap-3"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <span className="text-green-700 dark:text-green-400">
              ✅ Message sent successfully! I’ll get back to you soon.
            </span>
          </motion.div>
        )}

        <form ref={form} onSubmit={sendEmail} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-800 dark:text-gray-300 text-sm font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                name="user_name"
                required
                className="w-full px-4 py-3 bg-gray-100 dark:bg-gray-700/50 border border-gray-300 dark:border-gray-600/50 rounded-lg text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-500 focus:border-transparent transition-all duration-200"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-gray-800 dark:text-gray-300 text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                name="user_email"
                required
                className="w-full px-4 py-3 bg-gray-100 dark:bg-gray-700/50 border border-gray-300 dark:border-gray-600/50 rounded-lg text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-500 focus:border-transparent transition-all duration-200"
                placeholder="your@email.com"
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-800 dark:text-gray-300 text-sm font-medium mb-2">
              Subject
            </label>
            <input
              type="text"
              name="subject"
              required
              className="w-full px-4 py-3 bg-gray-100 dark:bg-gray-700/50 border border-gray-300 dark:border-gray-600/50 rounded-lg text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-500 focus:border-transparent transition-all duration-200"
              placeholder="What's this about?"
            />
          </div>

          <div>
            <label className="block text-gray-800 dark:text-gray-300 text-sm font-medium mb-2">
              Message
            </label>
            <textarea
              name="message"
              required
              rows={6}
              className="w-full px-4 py-3 bg-gray-100 dark:bg-gray-700/50 border border-gray-300 dark:border-gray-600/50 rounded-lg text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-500 focus:border-transparent transition-all duration-200 resize-none"
              placeholder="Tell me about your project or just say hello..."
            />
          </div>

          <motion.button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-4 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 rounded-lg font-medium hover:bg-gray-800 dark:hover:bg-white transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
            whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
          >
            {isSubmitting ? (
              <>
                <div className="w-5 h-5 border-2 border-white dark:border-gray-600 border-t-transparent rounded-full animate-spin" />
                Sending...
              </>
            ) : (
              <>Send Message</>
            )}
          </motion.button>
        </form>
      </div>
    </motion.div>
  );
};

export default ContactForm;
