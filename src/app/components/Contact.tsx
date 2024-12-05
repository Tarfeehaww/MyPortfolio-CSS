import { MdMailOutline } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import "./style/Contact.css"; 

export default function Contact() {
  return (
    <div id="contact" className="contact-section">
      <div className="contact-container">
        <div className="contact-info">
          <h2 className="contact-title">Get In Touch</h2>
          <p className="contact-description">
            Contact me by submitting the form
          </p>
          <div className="contact-item">
            <MdMailOutline size={30} />
            <span>Tarfeehahussain@gmail.com</span>
          </div>
          <div className="contact-item">
            <FaPhoneAlt size={30} />
            <span>0316-2698192</span>
          </div>
          <div className="contact-item">
            <FaLinkedin size={30} />
            <span>TarfeehaHussain01</span>
          </div>
        </div>

        <div className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" className="form-input" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="text" id="email" className="form-input" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" rows={8} className="form-textarea"></textarea>
          </div>
          <button className="submit-button">Send</button>
        </div>
      </div>
    </div>
  );
}
