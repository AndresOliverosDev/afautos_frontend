import { RiUser5Line } from "react-icons/ri";
import { TextInputIcon } from "../../components/ui/input";

const AddressPage = () => {
    return (
        <div>
            <TextInputIcon Icon={RiUser5Line} error={true} errorMessage={"Se debe ingresar texto"} label={"Nombres"}/>
        </div>
    )
}

export default AddressPage;