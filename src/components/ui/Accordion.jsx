/** Icons */
import { RiArrowDownSLine,RiArrowDropRightLine } from "react-icons/ri";

const Accordion = ({state, title, items, handle,icon}) => {
  /** Hover Tailwind Styles */

  return (
    <div className="w-full">
    {/** Accordion Title */}
    <button className="hover:bg-color-light hover:dark:bg-color-hover-dark flex text-gray-900 dark:text-gray-400 py-1 px-6 rounded-lg w-full" onClick={handle}>
      <span className="pr-2 self-start">
      {icon}
      </span>
      <p className="pe-1 font-medium">
        {title}
      </p>
      <RiArrowDownSLine className={`self-center text-gray-900 dark:text-gray-400 ${state ? 'rotate-180':''}`}/>
    </button>
    {/** Accordion List Items */}
    <ul className={`${state ? 'flex':'hidden'} flex-col`}>
      {
        items.map((item)=>(
          <li className="flex items-center gap-1 hover:bg-color-light hover:dark:bg-color-hover-dark rounded-md px-10 py-1 text-gray-800 dark:text-gray-500 cursor-pointer">
            {item}
            <RiArrowDropRightLine className="h-5 w-5" />
          </li>
        ))
      }
    </ul>
    </div>
  );
};

export default Accordion;
