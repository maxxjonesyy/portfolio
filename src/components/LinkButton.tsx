import { LinkButton } from "../types/types";
import { Link } from "react-router-dom";

function LinkButton({ download, route, external, text, textSize }: LinkButton) {
  if (external) {
    return (
      <a
        download={download}
        href={route}
        target={external ? "_blank" : "_self"}
        className='relative inline-block text-lg group'>
        <span className='relative z-10 block px-4 py-2 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white'>
          <span className='absolute inset-0 w-full h-full px-2 py-1 rounded-lg bg-gray-50'></span>
          <span className='absolute left-0 w-52 h-52 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-8 bg-gray-900 dark:bg-accentText group-hover:-rotate-180 ease'></span>
          <span className={`relative ${textSize || "text-base"}`}>{text}</span>
        </span>
        <span
          className='absolute bottom-0 right-0 w-full h-10 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 dark:bg-accentText rounded-lg group-hover:mb-0 group-hover:mr-0'
          data-rounded='rounded-lg'></span>
      </a>
    );
  } else {
    return (
      <Link className='relative inline-block text-lg group' to={route}>
        <span className='relative z-10 block px-4 py-2 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white'>
          <span className='absolute inset-0 w-full h-full px-2 py-1 rounded-lg bg-gray-50'></span>
          <span className='absolute left-0 w-52 h-52 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-8 bg-gray-900 dark:bg-accentText group-hover:-rotate-180 ease'></span>
          <span className={`relative ${textSize || "text-base"}`}>{text}</span>
        </span>
        <span
          className='absolute bottom-0 right-0 w-full h-10 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 dark:bg-accentText rounded-lg group-hover:mb-0 group-hover:mr-0'
          data-rounded='rounded-lg'></span>
      </Link>
    );
  }
}

export default LinkButton;
