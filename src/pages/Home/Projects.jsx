import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { checkMobileWidth } from "../../utils/windowWidth";
import { Link } from "react-router-dom";
import projectData from "../../utils/projectData";

import "swiper/css";

function Projects() {
  const [swiperSlides, setSwiperSlides] = useState(
    window.innerWidth < 768 ? 1 : 1.25
  );

  function setSlidesPerView() {
    checkMobileWidth() === true ? setSwiperSlides(1) : setSwiperSlides(1.25);
  }

  window.addEventListener("resize", setSlidesPerView);

  return (
    <div
      id='projects'
      className='flex flex-col justify-center h-screen container-padding container-width'
    >
      <div className=''>
        <h2 className='pb-10 text-3xl font-bold underline drop-shadow-sm text-lightText dark:text-darkText lg:text-4xl'>
          Projects.
        </h2>

        <Swiper
          slidesPerView={swiperSlides}
          spaceBetween={30}
          centeredSlides={false}
          pagination={{
            clickable: true,
          }}
        >
          {projectData.map((project, index) => {
            return (
              <SwiperSlide key={index} className='hover:cursor-grab'>
                {({ isActive }) => {
                  return (
                    <>
                      <h2 className='text-2xl font-bold text-accent lg:font-4xl'>
                        {project.heading}
                      </h2>
                      <p className='pb-5 text-xl text-lightText dark:text-darkText'>
                        {project.subheading}
                      </p>
                      <div
                        className={`relative transition-all ease-in-out ${
                          isActive ? "" : "blur-[0.85px]"
                        }`}
                      >
                        <div className='w-full'></div>
                        <img
                          src={project.src}
                          alt={project.alt}
                          className='object-contain'
                        />
                        <div className='absolute flex items-center gap-2 p-2 shadow-md rounded-r-md top-1/2 bg-accent'>
                          <img
                            src='/icons/project.svg'
                            alt='project icon'
                            className='w-6'
                          />
                          <Link
                            to={`/project/`}
                            state={{ data: project }}
                            className='text-sm text-white hover:cursor-pointer lg:text-base'
                          >
                            Project Info
                          </Link>
                        </div>
                      </div>
                    </>
                  );
                }}
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}

export default Projects;
