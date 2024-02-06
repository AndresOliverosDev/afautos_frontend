/** React Icons */
import { RiNotificationLine } from "react-icons/ri";
import { ToggleButton } from "../components/UI/indexUi.js"

const Hero = () => {
    return (
        <div className="bg-box-dark w-full h-full rounded-xl flex items-center justify-between">
            <div className="">
                <h1 className='dark:text-gray-200 text-gray-200 font-bold text-xl'><span className='bg-red-400 rounded-sm py-0.5 px-1 mr-0.5 ml-3'>AF</span>autos</h1>
            </div>
            <div className="flex gap-5 items-center mr-4">
                <ToggleButton />
                <RiNotificationLine className='text-gray-200 w-5 h-5 cursor-pointer' />
            </div>
        </div>
    )
}
export default Hero;