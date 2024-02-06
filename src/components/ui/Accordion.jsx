/** Icons */
import { RiArrowDownSLine, RiArrowDropRightLine } from "react-icons/ri";

const Accordion = ({ state, title, items, handle, icon }) => {
  /** Hover Tailwind Styles */

  return (
    <div className="w-full">
      {/** Accordion Title */}
      <button
        className="flex w-full rounded-lg px-6 py-1 text-gray-900 hover:bg-color-hover-light dark:text-gray-400 hover:dark:bg-color-hover-dark"
        onClick={handle}
      >
        <span className="self-start pr-2">{icon}</span>
        <p className="pe-1 font-medium">{title}</p>
        <RiArrowDownSLine
          className={`self-center text-gray-900 dark:text-gray-400 ${state ? "rotate-180" : ""}`}
        />
      </button>
      {/** Accordion List Items */}
      <ul className={`${state ? "flex" : "hidden"} flex-col`}>
        {items.map((item, index) => (
          <li key={index} className="hover:bg-color-light flex cursor-pointer items-center gap-1 rounded-md px-10 py-1 text-gray-800 hover:bg-color-hover-light dark:text-gray-500 hover:dark:bg-color-hover-dark">
            {item}
            <RiArrowDropRightLine className="h-5 w-5" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Accordion;
