import React from "react";
import { motion } from "framer-motion";

const ContactForm = () => {
  return (
    <motion.div
      className="lg:col-span-3"
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      viewport={{ once: true }}
    >
      <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50">
        <h3 className="text-2xl font-semibold text-gray-100 mb-8">
          Send Message
        </h3>

        {/* {isSubmitted && (
          <motion.div
            className="mb-6 p-4 bg-green-500/20 border border-green-500/30 rounded-lg flex items-center gap-3"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <CheckCircle className="w-5 h-5 text-green-400" />
            <span className="text-green-400">
              Message sent successfully! I'll get back to you soon.
            </span>
          </motion.div>
        )} */}

        {/* onSubmit={handleSubmit} */}

        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-300 text-sm font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                name="name"
                // value={formData.name}
                // onChange={handleInputChange}
                required
                className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-lg text-gray-100 placeholder-gray-400 focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all duration-200"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-gray-300 text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                // value={formData.email}
                // onChange={handleInputChange}
                required
                className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-lg text-gray-100 placeholder-gray-400 focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all duration-200"
                placeholder="your@email.com"
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-300 text-sm font-medium mb-2">
              Subject
            </label>
            <input
              type="text"
              name="subject"
              //   value={formData.subject}
              //   onChange={handleInputChange}
              required
              className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-lg text-gray-100 placeholder-gray-400 focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all duration-200"
              placeholder="What's this about?"
            />
          </div>

          <div>
            <label className="block text-gray-300 text-sm font-medium mb-2">
              Message
            </label>
            <textarea
              name="message"
              //   value={formData.message}
              //   onChange={handleInputChange}
              required
              rows={6}
              className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-lg text-gray-100 placeholder-gray-400 focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all duration-200 resize-none"
              placeholder="Tell me about your project or just say hello..."
            />
          </div>

          {/* <motion.button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-4 bg-gray-100 text-gray-900 rounded-lg font-medium hover:bg-white transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            whileHover={{
              scale: isSubmitting ? 1 : 1.02,
              y: isSubmitting ? 0 : -1,
            }}
            whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
          >
            {isSubmitting ? (
              <>
                <div className="w-5 h-5 border-2 border-gray-600 border-t-transparent rounded-full animate-spin" />
                Sending...
              </>
            ) : (
              <>
                <Send className="w-5 h-5" />
                Send Message
              </>
            )}
          </motion.button> */}
        </form>
      </div>
    </motion.div>
  );
};

export default ContactForm;
