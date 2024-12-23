/** React Router Dom */
import { Link } from "react-router-dom";
import { Icon } from "@tremor/react";

/** Icons */
import { RiArrowDownSLine } from "react-icons/ri";
import React from "react";

interface Item {
  name: string;
  link: string;
}

interface AccordionProps {
  state: boolean;
  title: string;
  items?: Item[];
  handle: () => void;
  icon: any;
}

const Accordion: React.FC<AccordionProps> = ({ state, title, items, handle, icon }) => {
  return (
    <div className="w-full">
      {/** Accordion Title */}
      <button
        className="flex w-full px-4 rounded-lg py-1.5 text-gray-600 hover:bg-gray-100 dark:text-gray-400 hover:dark:bg-gray-600"
        onClick={handle}
      >
        <Icon icon={icon} variant="simple" size="md" className="self-start p-0 pr-2" />
        <h2 className="pe-1 font-medium">{title}</h2>
        <RiArrowDownSLine
          className={`transition-all duration-150 h-5 w-5 self-center ${state ? "rotate-180" : ""}`}
        />
      </button>
      {/** Accordion List Items */}
      <ul className={`transition-max-height ${state ? 'max-h-screen' : 'max-h-0'} overflow-hidden flex flex-col`}>
        {
          items &&
          items.map((item, index) => (
            <Link key={index} to={`${item.link}`}>
              <li className="hover:bg-color-light flex cursor-pointer items-center gap-1 rounded-md px-10 py-1 text-gray-500 hover:bg-gray-50 dark:text-gray-500 hover:dark:bg-gray-800">
                {item.name}
              </li>
            </Link>
          ))
        }
      </ul>
    </div>
  );
};

export default Accordion;