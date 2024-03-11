import { Link } from "react-router-dom";

function LinkButton({
  internalRoute,
  externalRoute,
  text,
}: {
  internalRoute: string;
  externalRoute?: string;
  text: string;
}) {
  return (
    <button aria-label={text} className='relative inline-block text-lg group'>
      <span className='relative z-10 block px-7 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white'>
        <span className='absolute inset-0 w-full h-full px-7 py-3 rounded-lg bg-gray-50'></span>
        <span className='absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease'></span>
        {internalRoute ? (
          <Link to={internalRoute} className='relative'>
            {text}
          </Link>
        ) : null}

        {externalRoute ? (
          <a
            href={externalRoute}
            target='_blank'
            rel='noreferrer'
            className='relative'>
            {text}
          </a>
        ) : null}
      </span>
      <span
        className='absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0'
        data-rounded='rounded-lg'></span>
    </button>
  );
}

export default LinkButton;