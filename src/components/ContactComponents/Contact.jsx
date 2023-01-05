import React, { useRef } from "react";
import "./contact.css";
import { AiTwotoneMail } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_gatj0nk",
        "template_0z2umin",
        form.current,
        "eQq2KyrP4VtfiCcCY"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <AiTwotoneMail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>benjiaelo@yahoo.com</h5>
            <a href="maito:benjiaelo@yahoo.com">Send a message</a>
          </article>

          <article className="contact__option">
            <FaTwitter className="contact__option-icon" />
            <h4>Twitter</h4>
            <h5>@benjiaelo</h5>
            <a href="https://twitter.com/compose/tweet" target="_blank">
              Tweet Me
            </a>
          </article>

          <article className="contact__option">
            <FaWhatsappSquare className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>+233244910550</h5>
            <a
              href="https://api.whatsapp.com/send?phone+233244910550"
              target="_blank">
              Text Me
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Full Name" required />
          <input type="email" name="email" placeholder="Full Email" required />
          <textarea
            name="message"
            rows="7"
            required
            placeholder="Your Message"></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
