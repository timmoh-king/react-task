import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
// import styled from "./styled-components";

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_od2aqmc",
        "template_ppbixiw",
        form.current,
        "OhSpR0qimsuwFOYnR"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="mt-[70px] mb-[70px] bg-green-100">
      <div className="container w-[400px] pt-5 pb-5 justify-between items-center mx-auto">
      <p className="text-center font-bold text-2xl mb-10">Contact us </p>
        <form
          className=""
          ref={form}
          onSubmit={sendEmail}
        >
          <label className="text-xl">Name</label>
          <input
            className="w-full h-[35px] p-5 rounded-[5px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg"
            type="text"
            name="user_name"
          />
          <label className="text-xl">Email</label>
          <input
            className="w-full h-[35px]  p-5 rounded-[5px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg"
            type="email"
            name="user_email"
          />
          <label className="text-xl">Message</label>
          <textarea
            className="w-full p-5 rounded-[5px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg"
            name="message"
          />
          <button
            className="mt-2 cursor-pointer text-2xl text-center text-white w-full rounded-[5px] h-[35px] bg-[#0083ce]"
            type="submit"
            value="Send"> Send
            </button>
        </form>
      </div>
    </div>
  );
};