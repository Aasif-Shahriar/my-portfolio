import React from "react";
import GradientBar from "../../../components/navbar/GradientBar";
import SocialCard from "./SocialCard";
import ContactForm from "./ContactForm";

const ContactSection = () => {
  return (
    <section id="contact" className="bg-frame-9 text-frame-9 dark:bg-frame-1">
      <div className="section-styles">
        {/* top content */}
        <div className="flex flex-col items-center justify-center">
          <h1 className="section-title">Let's Work Together</h1>
          {/* horizontal bar */}
          <GradientBar />
          {/* sub title */}
          <p className="section-sub-title">
            Ready to bring your ideas to life? Let's discuss your next project
            and create something amazing together.
          </p>
        </div>
        {/* social card and contact form */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
          <div className="col-span-2">
            <SocialCard />
          </div>
          <div  className="col-span-3">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
