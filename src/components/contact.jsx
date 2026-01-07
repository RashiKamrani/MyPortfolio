import emailjs from "emailjs-com";
import { useRef } from "react";

function Contact() {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_9te9iuf",        // SERVICE_ID
        "template_798qgpl",       // TEMPLATE_ID
        formRef.current,
        "_fg7jSB_bgJDQtfDX"       // PUBLIC_KEY
      )
      .then(
        () => {
          alert("Message sent successfully 💌");
          formRef.current.reset();
        },
        (error) => {
          console.error(error);
          alert("Something went wrong. Try again.");
        }
      );
  };

  return (
    <section id="contact" className="contactSection">
      <div className="contactCard">

        {/* LEFT */}
        <div className="contactLeft">
          <h2>
            Let’s <span>Work</span> Together!
          </h2>

          <p>
            Have a project in mind, an opportunity, or just want to connect?
            I’m always open to meaningful conversations and collaborations.
          </p>

          <div className="emailBox">
            <span>Email</span>
            <a href="mailto:rashikamrani@gmail.com">
              rashikamrani@gmail.com
            </a>
          </div>

          <div className="contactSocials">
            <a
              href="https://github.com/RashiKamrani"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/rashikamrani"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a href="/Rashi_Kamrani_Resume.pdf" download>
              Resume
            </a>
          </div>
        </div>

        {/* RIGHT */}
        <div className="contactRight">

          {/* cute element */}
          <div className="dropBubble">Drop your message 💌</div>

          <form ref={formRef} onSubmit={sendEmail}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />

            <textarea
              name="message"
              rows="4"
              placeholder="Your Message"
              required
            ></textarea>

            <button type="submit">Send Message</button>
          </form>

        </div>
      </div>
    </section>
  );
}

export default Contact;
