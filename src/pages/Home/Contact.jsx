import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Links from "../../components/Links";

function Contact({ theme }) {
  const form = useRef();

  function clearInput() {}

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_17lxe2c",
        "template_o9a0s3m",
        form.current,
        "iwCFiT7FYv44pEooo"
      )
      .then(() => {
        document
          .querySelectorAll("input")
          .forEach((input) => (input.value = ""));
        document.getElementsByTagName("textarea").message.value = "";
        document.getElementById("send-button").classList.toggle("hidden");
        document.getElementById("alert").classList.toggle("hidden");

        setTimeout(() => {
          document.getElementById("send-button").classList.toggle("hidden");
          document.getElementById("alert").classList.toggle("hidden");
        }, 5000);
      });
  }

  return (
    <div
      id='contact'
      className='flex flex-col items-center justify-center min-h-screen container-padding container-width max-w-[45rem]'
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
          className='w-full p-2 transition-all bg-transparent border-b-2 outline-none placeholder-lightText dark:placeholder-darkText border-gray dark:text-darkText text-lightText'
        />
        <input
          type='email'
          name='user_email'
          placeholder='Email'
          required
          className='w-full p-2 transition-all bg-transparent border-b-2 outline-none placeholder-lightText dark:placeholder-darkText border-gray dark:text-darkText text-lightText'
        />
        <textarea
          name='message'
          placeholder='Message'
          required
          className='w-full p-2 transition-all bg-transparent border-b-2 outline-none placeholder-lightText dark:placeholder-darkText border-gray dark:text-darkText text-lightText'
        />
        <button
          id='send-button'
          type='submit'
          className='w-full p-2 text-sm text-white transition-all duration-300 ease-in-out rounded-md shadow-md hover:cursor-pointer bg-accent'
        >
          Send
        </button>

        <div
          id='alert'
          className='relative flex-col hidden w-full p-2 bg-white rounded-md shadow sm:flex-row sm:items-center sm:pr-6'
        >
          <div className='flex flex-row items-center justify-center w-full'>
            <div className='text-green-500'>
              <svg
                className='w-6 h-6 sm:w-5 sm:h-5'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
                ></path>
              </svg>
            </div>
            <div className='ml-3 text-sm font-medium'>Email has been sent!</div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Contact;
