import React, { useRef, useState, useContext, useEffect } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
import { HoverContext } from "../../utils/HoverContext";

import "react-custom-alert/dist/index.css";

import { github, linkedin } from "../../assets/icons";

const Contact = () => {
  const formRef = useRef();
  const { handleHover, handleLeave, handleClick } = useContext(HoverContext);

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevState) => ({ ...prevState, [name]: value }));
  };

  const alertInfo = () =>
    toast.success(
      "Thank you for your message. I will get back to you as soon as possible."
    );
  const alertError = () => toast.error("Something went wrong! :(");

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    /**
     * The parameters for this send function are:
     * serviceid, templateid, email object, public key
     */
    emailjs
      .send(
        "service_1m8dvsx",
        "template_uf9r19u",
        {
          from_name: form.name,
          to_name: "Bryan",
          from_email: form.email,
          to_email: "bmagistrado@yahoo.com",
          message: form.message,
        },
        "hcYiIcMpq_2DDaKc4"
      )
      .then(
        () => {
          setLoading(false)
          handleClick();
          alertInfo();
          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          alertError();
        }
      );
  };

  const handleMouseEnter = () => {
    handleHover();
  };

  const handleMouseLeave = () => {
    handleLeave();
  };

  return (
    <div
      id="Contact"
      className="flex flex-col justify-start items-start px-5 pb-5 md:px-[10vw] min-w-[100vw] mt-[7.5rem]"
    >
      <h1 className="text-[3rem]">Contact Me</h1>
      <div className="w-full border-b-2 border-stone-500" />
      <p className="mt-4">
        Feel free to reach out if you’re looking for a developer, have a
        question about my projects or if you want to know more about me:
      </p>

      <div className="flex flex-col md:flex-row justify-between w-full md:w-[80%] mt-4 gap-y-2 gap-x-[10rem]">
        <p className="flex flex-row justify-start items-center gap-x-4 md:w-[30%]">
          <img className="w-[40px]" src={linkedin} alt="LinkedIn" />
          <a
            className="italic underline"
            href="https://linkedin.com/in/bryan-magistrado"
            target="_blank"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            linkedin.com/bryan-magistrado
          </a>
        </p>
        <p className="flex flex-row justify-start items-center gap-x-4 md:w-[40%]">
          <img className="w-[40px] md:w-[35px]" src={github} alt="github" />
          <a
            className="italic underline"
            href="https://github.com/Exiturn"
            target="_blank"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            github.com/Exiturn
          </a>
        </p>
      </div>

      <form
        ref={formRef}
        className="flex flex-col justify-start items-start mt-4 w-full md:w-[80%]"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col md:flex-row justify-between md:gap-x-[10rem] w-full">
          <div className="md:w-[30%]">
            <label className="flex flex-col mt-4 pointer-events-none">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your name"
              className="w-full bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg p-2 mt-2"
            />
          </div>
          <div className="md:w-[40%]">
            <label className="flex flex-col mt-4 pointer-events-none">
              Email
            </label>
            <input
              type="text"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Your email"
              className="w-full bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg p-2 mt-2"
            />
          </div>
        </div>
        <div className="flex flex-col mt-4 w-full">
          <label className="pointer-events-none">Message</label>
          <textarea
            name="message"
            rows="10"
            value={form.message}
            onChange={handleChange}
            placeholder="Your message"
            className="outline-none w-full mt-2 border-none p-2 bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg"
          />
        </div>
        <button
          type="submit"
          className="mt-4 py-3 px-8 border-[1px]"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {loading ? "Sending..." : "Send"}
        </button>
      </form>
    </div>
  );
};

export default Contact;
