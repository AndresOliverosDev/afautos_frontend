/** React Router Dom */
import { Link } from "react-router-dom";

import { Icon } from "@tremor/react";

/** Icons */
import { RiArrowDownSLine } from "react-icons/ri";

const Accordion = ({ state, title, items, handle, icon }) => {
  /** Hover Tailwind Styles */

  return (
    <div className="w-full">
      {/** Accordion Title */}
      <button
        className="flex w-full px-4 rounded-lg py-1.5 text-gray-600 hover:bg-gray-100 dark:text-gray-400 hover:dark:bg-gray-600"
        onClick={handle}
      >
        <Icon icon={icon} variant="simple" size="md" className="self-start p-0 pr-2"/>
        <h2 className="pe-1 font-medium">{title}</h2>
        <RiArrowDownSLine
          className={`transition-all duration-300 h-5 w-5 self-center ${state ? "rotate-180" : ""}`}
        />
      </button>
      {/** Accordion List Items */}
      <ul className={`${state ? "flex" : "hidden"} flex-col `}>
        {items.map((item, index) => (
          <Link key={index} to={`${item.link}`}>
            <li className="hover:bg-color-light flex cursor-pointer items-center gap-1 rounded-md px-10 py-1.5 text-gray-500 hover:bg-gray-50 dark:text-gray-500 hover:dark:bg-gray-800">
              {item.name}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Accordion;
