import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { LuSend } from "react-icons/lu";
import { AiOutlineMail } from "react-icons/ai";
import { BsMessenger } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";

import { useTranslation } from "next-i18next";

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Check form.current is not null before proceeding
    if (form.current) {
      const formElement = form.current; // Capture the current form reference
      emailjs
        .sendForm(
          `${process.env.NEXT_PUBLIC_YOUR_SERVICE_ID}`,
          `${process.env.NEXT_PUBLIC_YOUR_TEMPLATE_ID}`,
          formElement,
          `${process.env.NEXT_PUBLIC_YOUR_PUBLIC_KEY}`
        )
        .then(
          (result) => {
            toast.success("Email send successfully !", {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
              transition: Bounce,
            });
            // Safe to call reset as we're using the captured reference
            formElement.reset();
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
    } else {
      // Handle the case where form.current is null if necessary
      console.log("Form is not available.");
    }
  };

  const { t } = useTranslation("common");

  const cards = [
    {
      icon: <AiOutlineMail className="text-[30px] text-primary" />,
      title: "Email",
      content: "amcheachamroeun20@kit.edu.kh",
    },
    {
      icon: <BsMessenger className="text-[30px] text-primary" />,
      title: "Messenger",
      content: "Cham Roeun",
    },
    {
      icon: <BsWhatsapp className="text-[30px] text-primary" />,
      title: "WhatsApp",
      content: "+855 78220698",
    },
  ];

  return (
    <div id="contact" className="pb-20">
      <ToastContainer />
      <div className="section">
        <div className="text-center">
          <p className="text-center" data-aos="fade-up">
            Get in touch
          </p>
          <div className="relative inline-block mt-5" data-aos="fade-up">
            <div className="bg-secondColor w-8 md:w-12 h-7 md:h-9 absolute bottom-2 md:bottom-3 right-0"></div>
            <h2 className="font-title mt-2 text-2xl font-bold leading-tight text-titleColor relative z-10 md:text-3xl lg:text-3xl xl:text-4xl 2xl:text-4xl">
              Contact.
            </h2>
          </div>
        </div>

        <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-20 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2 "></div>

        <div className="grid grid-cols-1 md:grid-cols-2 mt-20 gap-5" >
          <div className="flex flex-col items-center gap-5" data-aos="fade-up">
            {cards.map((card) => (
              <div
                key={card.title}
                className="contact-icon md:w-full lg:w-[300px] w-[350px] bg-bodyColor   cursor-pointer flex flex-col items-center justify-center  border h-auto py-4 px-5 rounded-xl"
              >
                <div>{card.icon}</div>
                <h5 className="font-medium mt-2 text-[0.95rem] text-textColor">
                  {card.title}
                </h5>
                <p className="text-sm mt-3 text-[0.7rem] text-textColor">
                  {card.content}
                </p>
              </div>
            ))}
          </div>

          <form ref={form} onSubmit={sendEmail} data-aos="fade-up">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <input
                  type="text"
                  id="user_name"
                  name="user_name"
                  className="w-full px-4 py-2 border rounded-lg"
                  placeholder="Name"
                />
              </div>
              <div>
                <input
                  type="email"
                  id="user_email"
                  name="user_email"
                  className="w-full px-4 py-2 border rounded-lg"
                  placeholder="Email"
                />
              </div>

              <div className="col-span-1 md:col-span-2">
                <input
                  type="text"
                  id="user_subject"
                  name="user_subject"
                  className="w-full px-4 py-2 border rounded-lg"
                  placeholder="Subject"
                />
              </div>

              <div className="col-span-1 md:col-span-2">
                <textarea
                  id="message"
                  name="user_message"
                  rows={8}
                  className="w-full px-4 py-2 border rounded-lg"
                  placeholder="Enter your message"
                />
              </div>

              <div className="col-span-1 md:col-span-2">
                <button
                  type="submit"
                  className="text-textContrast bg-blackColor flex gap-5 items-center rounded-md py-2 px-5 md:py-3 md:px-7 bg-primary2 hover:bg-primary1 transition-all duration-500 from-primary to-secondary hover:bg-blend-darken"
                >
                  Send
                  <span className="text-xl">
                    <LuSend />
                  </span>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
