import { BtnPrimary } from "../ui/buttons";
import Input from "./Input";


const Form = ({ inputs }) => {

    const formInputs = inputs.map((input, index) => {
        let sizeClass;
        switch (input.size) {
            case '1':
                sizeClass = "w-[98%]";
                break;
            case '3/4':
                sizeClass = "w-[73%]"
                break;
            case '2/4':
                sizeClass = "w-[48%]";
                break;
            default:
                sizeClass = "w-[23%]";
                break;
        }

        return (
            <Input placeholder={input.title} twStyles={`m-[1%] ${sizeClass}`} key={index} />
        );
    });
    return (
        <form className="max-w-2xl flex flex-wrap justify-center">
            {formInputs}
            <div className="w-full text-center">
                <BtnPrimary text="Crear Producto" twStyles="m-2" />
            </div>
        </form>
    );
}

export default Form;