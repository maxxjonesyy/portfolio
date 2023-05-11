import React from "react";

function Tile({ skill, img }) {
  return (
    <div className='flex gap-1.5 p-2 rounded-md shadow-sm bg-lightTile dark:bg-darkTile'>
      {img === true ? (
        <img
          src={`icons/${skill.toLowerCase()}.svg`}
          alt={skill}
          className='w-4'
        />
      ) : null}
      <p className='text-sm text-lightText dark:text-darkText lg:text-base'>
        {skill}
      </p>
    </div>
  );
}

export default Tile;
