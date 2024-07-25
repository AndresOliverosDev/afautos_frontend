import { RiLoader5Line } from "react-icons/ri"

const LoadingComponent = ({ name }) => {
    return (
        <div className="h-full w-full flex flex-col justify-center items-center">
            <RiLoader5Line size={80} className="animate-spin " />
            <p>Cargando {name}</p>
        </div>
    )
}
export default LoadingComponent;