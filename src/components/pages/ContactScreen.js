import React from 'react';
import emailjs from 'emailjs-com';
import  './ContactScreen.css';

export default function ContactScreen() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_mo4w4o7', 'template_8sv225s', e.target, 'user_o5NZwG0Rr5judziekXVHe')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  }

  return (
    <div className="contact-container">
    <div className="contact-title"> Email Us!</div>

    <form className="contact-form" onSubmit={sendEmail}>
      <input type="hidden" name="contact_name"/>
      <label>Name</label>
      <input type="text" name="name" />
      <label>Email</label>
      <input type="email" name="email" />
      <label>Message</label>
      <textarea name="message" />
      <input className="submit" type="submit" value="Send" />
    </form>
    </div>
  );
}
