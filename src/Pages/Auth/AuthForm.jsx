/** React Icons */
import { RiShieldUserLine, RiKeyFill } from "react-icons/ri";

import { BtnPrimary, CheckBox, FormInput } from "../../components/UI/indexUi";
import { Link } from "react-router-dom";

const AuthForm = ({ title }) => {
  return (
    <form className="flex  min-h-screen flex-col items-center justify-center gap-2">
      <div className="flex flex-col gap-5 rounded-xl bg-bg-dark bg-opacity-40 px-10 py-10">
        <h1 className="text-xl font-bold text-gray-200">{title}</h1>
        <div className="flex flex-col gap-2">
          <FormInput placeholder="Nombre de Usuario" icon={RiShieldUserLine} />
          <FormInput placeholder="Contraseña" icon={RiKeyFill} />
          <CheckBox text="Recuérdame" name="remember-me" />
        </div>
        <BtnPrimary text={title} />
      </div>
    </form>
  );
};

export default AuthForm;
