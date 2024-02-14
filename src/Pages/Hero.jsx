/** React Icons */
import { RiNotificationLine } from "react-icons/ri";
import { ToggleButton } from "../components/UI/indexUi.js";

const Hero = () => {
  return (
    <div className="flex h-full w-full items-center justify-between rounded-xl bg-box-dark">
      <div className="">
        <h1 className="text-xl font-bold text-gray-200 dark:text-gray-200">
          <span className="ml-3 mr-0.5 rounded-sm bg-red-400 px-1 py-0.5">
            AF
          </span>
          autos
        </h1>
      </div>
      <div className="mr-4 flex items-center gap-5">
        <ToggleButton />
        <RiNotificationLine className="h-5 w-5 cursor-pointer text-gray-200" />
      </div>
    </div>
  );
};
export default Hero;
