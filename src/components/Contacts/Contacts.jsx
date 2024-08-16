// src/Contact.js
// import React, { useState } from 'react';
// import './Contact.css';

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     subject: '',
//     message: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Here you can add your form submission logic
//     console.log('Form data submitted:', formData);
//   };

//   return (
//     <div className="contact">
//       <h2 className="contact-title">Contact Us</h2>
//       <form className="contact-form" onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label htmlFor="name">Name</label>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="email">Email</label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="subject">Subject</label>
//           <input
//             type="text"
//             id="subject"
//             name="subject"
//             value={formData.subject}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="message">Message</label>
//           <textarea
//             id="message"
//             name="message"
//             value={formData.message}
//             onChange={handleChange}
//             required
//           ></textarea>
//         </div>
//         <button type="submit" className="submit-btn">Send Message</button>
//       </form>
//     </div>
//   );
// };

// export default Contact;

import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
  const form = useRef();
  const [alertMessage, setAlertMessage] = useState('');
  const [alertType, setAlertType] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_fnpv9zb", "template_f8y3wx6", form.current, "65FkUK1aNvhiNTK3T")
      .then(
        () => {
          setAlertMessage('Your message has been sent successfully!');
          setAlertType('success');
          setTimeout(() => {
            setAlertMessage('');
            form.current.reset();
          }, 4000);
        },
        (error) => {
          setAlertMessage('Failed to send the message. Please try again later.');
          setAlertType('error');
          setTimeout(() => setAlertMessage(''), 4000);
        }
      );
  };

  return (
    <div className="contact">
      <h2 className="contact-title">Contact Us</h2>
      
      {alertMessage && (
        <div className={`alert ${alertType}`}>
          {alertMessage}
        </div>
      )}
      
      <form ref={form} className="contact-form" onSubmit={sendEmail}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="user_name"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="user_email"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            required
          />
        </div>
        <button type="submit" className="submit-btn">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
