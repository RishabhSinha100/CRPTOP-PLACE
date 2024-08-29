// import React, { useRef } from 'react';
// import emailjs from '@emailjs/browser';
// import './Contact.css';

// const Contact = () => {
//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs
//       .sendForm("service_fnpv9zb", "template_f8y3wx6", form.current, "65FkUK1aNvhiNTK3T")
//       .then(
//         () => {
//           console.log('SUCCESS!');
//           alert('Message sent successfully!');
//         },
//         (error) => {
//           console.log('FAILED...', error.text);
//           alert('Failed to send the message. Please try again later.');
//         }
//       );
//   };

//   return (
//     <div className="contact">
//       <h2 className="contact-title">Contact Us</h2>
//       <form ref={form} className="contact-form" onSubmit={sendEmail}>
//         <div className="form-group">
//           <label htmlFor="name">Name</label>
//           <input
//             type="text"
//             id="name"
//             name="user_name"
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="email">Email</label>
//           <input
//             type="email"
//             id="email"
//             name="user_email"
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="message">Message</label>
//           <textarea
//             id="message"
//             name="message"
//             required
//           />
//         </div>
//         <button type="submit" className="submit-btn">Send Message</button>
//       </form>
//     </div>
//   );
// };

// export default Contact;
// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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
