import React from "react";

function Links({ theme }) {
  return (
    <div className='flex items-center gap-2'>
      <a href='https://github.com/maxxjonesyy' target='_blank'>
        <img
          src={
            theme === "dark" ? "/icons/github.svg" : "/icons/github-light.svg"
          }
          alt='github icon'
          className='opacity-75 w-7 hover:cursor-pointer'
        />
      </a>
      <a
        href='https://www.linkedin.com/in/max-jones-0a48b7144/'
        target='_blank'
      >
        <img
          src={
            theme === "dark"
              ? "/icons/linkedin.svg"
              : "/icons/linkedin-light.svg"
          }
          alt='linkedin icon'
          className='opacity-75 w-7 hover:cursor-pointer'
        />
      </a>
      <a href='https://www.instagram.com/maxxjonesyy/?hl=en' target='_blank'>
        <img
          src={
            theme === "dark"
              ? "/icons/instagram.svg"
              : "/icons/instagram-light.svg"
          }
          alt='instagram icon'
          className='w-6 opacity-75 hover:cursor-pointer'
        />
      </a>
    </div>
  );
}

export default Links;
