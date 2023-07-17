import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./FormStyle.css";

const Form = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_h1297vt",
        "template_eq7y0ib",
        form.current,
        "2r3yaKf_EDJAwyNyJ"
      )
     
      .then(
        (result) => {
          console.log(result.text);
          console.log("message successfully sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="form">
      <form ref={form} onSubmit={sendEmail}>
        <label> Your Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label> subject</label>
        <input type="text" name="from_name" />
        <label>Message</label>
        <textarea
          name="message"
          className="textarea"
          row="6"
          placeholder="Type your message here"
        />
        <button className="btn">Submit</button>
      </form>
    </div>
  );
};

export default Form;
