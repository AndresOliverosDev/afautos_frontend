/** React Icons */
import { RiShieldUserLine, RiKeyFill } from "react-icons/ri";

import { BtnPrimary, CheckBox, FormInput } from "../../components/UI/indexUi";
import { Link } from "react-router-dom";

const AuthForm = ({title}) => {
    return (
        <form className="flex  flex-col gap-2 items-center justify-center min-h-screen">
            <div className="bg-bg-dark py-10 px-10 gap-5 flex flex-col rounded-xl">
                <h1 className="font-bold text-xl text-gray-200" >{title}</h1>
                <div className="flex flex-col gap-2">
                    <FormInput placeholder='Nombre de Usuario' icon={RiShieldUserLine} />
                    <FormInput placeholder='Contraseña' icon={RiKeyFill} />
                    <CheckBox text='Recuérdame' name='remember-me' />
                </div>
                <BtnPrimary text={title}/>
            </div>
            <p className="text-sm">
                No tienes cuenta?
                <Link to='/SignUp' className="text-blue-900 font-bold"> Crear Cuenta</Link>    
            </p>
            <Link className="text-sm text-blue-900 font-bold">Olvidaste tu Contraseña</Link>
        </form>
    );
}

export default AuthForm;