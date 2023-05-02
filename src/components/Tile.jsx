import React from "react";

function Tile({ skill }) {
  return (
    <div className='flex gap-1.5 p-2 rounded-md shadow-sm bg-lightTile dark:bg-darkTile'>
      <img
        src={`icons/${skill.toLowerCase()}.svg`}
        alt={skill}
        className='w-4'
      />
      <p className='text-sm text-lightText dark:text-darkText md:text-base'>
        {skill}
      </p>
    </div>
  );
}

export default Tile;
