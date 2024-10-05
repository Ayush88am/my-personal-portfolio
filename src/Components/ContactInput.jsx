import React, { useState } from "react";
import emailjs from "emailjs-com";

const ContactInput = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [formSubmitMessage, setFormSubmitMessage] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    const emailData = {
      name: name,
      email: email,
      message: message,
    };

    emailjs
      .send(
        "service_ulkt2io",
        "template_99xwzoa",
        emailData,
        "TllzSLPIf-vzhiR1K"
      )
      .then(
        (result) => {
          console.log(result.text);
          setFormSubmitMessage(true);

          // Reset form fields
          setEmail("");
          setName("");
          setMessage("");

          // Hide the success message after 3 seconds
          setTimeout(() => {
            setFormSubmitMessage(false);
          }, 3000);
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send email. Please try again.");
        }
      );
  };

  return (
    <div className="flex items-center flex-col my-24 ">
      <h1 className="text-4xl text-purple-500">&#40;*&#41;</h1>
      <h1 className="text-6xl">&lt;contact_me&gt;</h1>
      <p className="my-6 mx-20 text-1xl text-yellow-300 md:mx-64">
        You can get in touch with me here! Just enter your name, email, and
        message, and I'll get back to you as soon as possible. 😊
      </p>

      <form
        onSubmit={sendEmail}
        className="flex flex-col gap-14 items-start mt-14 w-full pl-16 pr-3 text-2xl "
      >
        <input
          type="text"
          placeholder="_name* "
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border-gray-500 border-b focus:border-purple-500 py-4 text-purple-500 bg-black outline-none placeholder-purple-500"
          required
        />
        <input
          type="email"
          placeholder="_email*"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border-gray-500 border-b focus:border-purple-500 py-4 bg-black outline-none text-purple-500 placeholder-purple-500"
          required
        />
        <textarea
          placeholder="_message*"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          cols="30"
          rows="3"
          className="w-full text-purple-500 bg-black outline-none placeholder-purple-500 border-gray-500 border-b focus:border-purple-500 py-4"
          required
        ></textarea>

        {formSubmitMessage ? (
          <button className="bg-purple-300  text-pink-600 text-3xl mt-fit h-fit w-fit p-6   rounded mb-20">
            Message sent successfully ☺
          </button>
        ) : (
          <button
            type="submit"
            className="bg-sky-400 hover:bg-purple-500 mt-16 h-14 w-36 text-2xl rounded mb-20"
          >
            &#123;send&#125;
          </button>
        )}
      </form>
    </div>
  );
};

export default ContactInput;
