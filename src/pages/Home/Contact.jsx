import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Links from "../../components/Links";

function Contact({ theme }) {
  const form = useRef();

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_17lxe2c",
        "template_o9a0s3m",
        form.current,
        "iwCFiT7FYv44pEooo"
      )
      .then((result) => console.log(result.text)),
      (error) => {
        console.log(error.text);
      };
  }

  return (
    <div
      id='contact'
      className='flex flex-col items-center justify-center min-h-screen container-padding container-width'
    >
      <h1 className='pb-3 text-3xl font-bold underline drop-shadow-sm text-lightText dark:text-darkText lg:text-4xl'>
        Contact.
      </h1>

      <p className='pb-10 font-light lg:text-lg text-lightText dark:text-darkText'>
        Feel free to get in touch!
      </p>

      <div className='flex gap-10 py-5'>
        <div className='inline-flex items-center gap-3'>
          <img
            src={
              theme === "dark" ? "/icons/phone.svg" : "/icons/phone-light.svg"
            }
            alt='phone'
            className='w-5'
          />
          <span className='text-sm lg:text-base text-lightText dark:text-darkText'>
            0452 494 959
          </span>
        </div>
        <Links theme={theme} />
      </div>

      <form
        ref={form}
        onSubmit={sendEmail}
        className='flex flex-col items-center justify-center w-full gap-10 '
      >
        <input
          type='text'
          name='user_name'
          placeholder='Name'
          required
          className='w-full p-2 bg-transparent border-b-2 outline-none md:w-2/3 placeholder-lightText dark:placeholder-darkText border-gray dark:text-darkText text-lightText'
        />
        <input
          type='email'
          name='user_email'
          placeholder='Email'
          required
          className='w-full p-2 bg-transparent border-b-2 outline-none md:w-2/3 placeholder-lightText dark:placeholder-darkText border-gray dark:text-darkText text-lightText'
        />
        <textarea
          name='message'
          placeholder='Message'
          required
          className='w-full p-2 bg-transparent border-b-2 outline-none md:w-2/3 placeholder-lightText dark:placeholder-darkText border-gray dark:text-darkText text-lightText'
        />
        <button
          type='submit'
          className='w-full p-2 text-sm text-white transition duration-300 ease-in-out rounded-md shadow-md md:w-2/3 hover:cursor-pointer bg-accent'
        >
          Send
        </button>
      </form>
    </div>
  );
}

export default Contact;
