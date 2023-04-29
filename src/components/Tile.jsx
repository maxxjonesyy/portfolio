import React from "react";

function Tile({ skill }) {
  return (
    <div className='flex flex-col items-center justify-center w-[100px] p-5 bg-lightTile dark:bg-darkTile rounded-md shadow-md xl:w-[125px]'>
      <img
        src={`icons/${skill.toLowerCase()}.svg`}
        alt={skill}
        className='w-1/2'
      />
      <p className='pt-1.5 text-lightText dark:text-darkText'>{skill}</p>
    </div>
  );
}

export default Tile;
