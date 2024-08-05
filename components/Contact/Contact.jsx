import React from 'react';
import './Contact.css';

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "Y64c378c4-9eec-4165-971e-fe54e5505adf");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });
      const result = await res.json();

      if (result.success) {
        console.log("Success", result);
      } else {
        console.error("Error:", result);
      }
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's Engage</h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad nam voluptates quisquam facere in dolorum, quasi animi tempora odit, rem nemo. Labore beatae doloribus cum quasi rem. Fugit, temporibus voluptatum.</p>
          <div className="contact-details">
            <div className="contact-detail">
              <p>joe-techsolutions@gmail.com</p>
            </div>
            <div className="contact-detail">
              <p>+24793837398</p>
            </div>
            <div className="contact-detail">
              <p>Nairobi cbd</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor="name">Your name</label>
          <input type="text" placeholder="Enter your name" name="name" />
          <label htmlFor="email">Your Email</label>
          <input type="email" placeholder="Enter your Email" name="email" />
          <label htmlFor="message">Write your message here</label>
          <textarea name="message" rows="8" placeholder="Enter your message"></textarea>
          <button type="submit" className="contact-submit">Submit now</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
