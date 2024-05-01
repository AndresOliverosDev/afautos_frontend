import addProduct from "../../../JSON/forms/inputs/addProduct.json"
import { Form } from "../../components/form";


const SignIn = () => {

    return (
        <Form inputs={addProduct} />
    );
}

export default SignIn;