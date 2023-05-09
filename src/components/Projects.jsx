import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { checkMobileWidth } from "../utils/windowWidth";

import "swiper/css";

function Projects() {
  const [swiperSlides, setSwiperSlides] = useState(
    window.innerWidth < 768 ? 1 : 1.25
  );

  const projects = [
    {
      heading: "Finance WebApp",
      subheading: "Shiftwork Buddy",
      src: "/projects/shiftworkbuddy.jpg",
      alt: "shiftworkbuddy project",
    },
    {
      heading: "Ecommerce Store",
      subheading: "Fuji Apparel",
      src: "/projects/ecommerce.jpg",
      alt: "ecommerce project",
    },
    {
      heading: "Chat app",
      subheading: "Maxcord",
      src: "/projects/maxcord.jpg",
      alt: "maxcord project",
    },
    {
      heading: "Spotify Clone",
      subheading: "Spotify",
      src: "/projects/spotifyclone.jpg",
      alt: "spotify clone project",
    },
    {
      heading: "Interior Design Site",
      subheading: "Farrugia Design",
      src: "/projects/farrugiadesign.jpg",
      alt: "farrugia design project",
    },
  ];

  function setSlidesPerView() {
    checkMobileWidth() === true ? setSwiperSlides(1) : setSwiperSlides(1.25);
  }

  window.addEventListener("resize", setSlidesPerView);

  return (
    <div className='container-padding container-width'>
      <Swiper
        slidesPerView={swiperSlides}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
      >
        {projects.map((project, index) => {
          return (
            <SwiperSlide key={index} className='hover:cursor-grab'>
              <h2 className='text-2xl font-bold text-accent lg:font-4xl'>
                {project.heading}
              </h2>
              <p className='pb-5 text-xl text-lightText dark:text-darkText'>
                {project.subheading}
              </p>
              <img src={project.src} alt={project.alt} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default Projects;
