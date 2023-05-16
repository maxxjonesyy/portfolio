import React from "react";

function SplashAnimation() {
  return (
    <div className='absolute flex flex-col gap-10 items-center justify-center h-screen w-screen bg-white z-[999] animate-fade-out'>
      <div className='animate-bounce'>
        <img src='/favicon.svg' alt='splash screen art' className='w-28' />
        <h1 className='pt-2 text-lg text-gray-500'>Loading Projects.</h1>
      </div>
    </div>
  );
}

export default SplashAnimation;
