import { Button, Card, Icon, TextInput } from "@tremor/react";
import { useState } from "react";
import { RiKey2Fill, RiUserFill } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/authentication/useAuth";

const Login = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const { login, error} = useAuth();
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        const userData = await login(username, password);
        if (userData) {
            navigate("/")
        }
    }

    return (
        <div className="flex w-full justify-center items-center">
            <Card className="w-[95%] sm:w-[55%] md:w-[45%] lg:w-[30%] h-[92%] p-3 flex flex-col gap-2">
                {/** Icon Business */}
                <div className="bg-black h-[30%] flex items-center justify-center bg-opacity-5 rounded-xl">
                    <p className="font-bold text-4xl bg-black p-4 rounded-full bg-opacity-30">AF</p>
                </div>
                {/** Form Login */}
                <form onSubmit={handleLogin} className="bg-black rounded-xl bg-opacity-15 h-[70%] flex items-center justify-center flex-col gap-4">
                    {/** Form title */}
                    <h1 className="text-xl ">
                        Iniciar sesión
                    </h1>
                    {/** Form Inputs */}
                    <div className="bg-dark w-full px-8 flex flex-col gap-3">
                        {/** Form Input username */}
                        <div className="flex items-center gap-2">
                            <Icon icon={RiUserFill} color="gray" />
                            <TextInput placeholder="Nombre de usuario"
                                onChange={(e) => setUsername(e.target.value)}/>
                        </div>
                        {/** Form Input password */}
                        <div className="flex items-center gap-2">
                            <Icon icon={RiKey2Fill} color="gray" />
                            <TextInput placeholder="Contraseña"
                                type="password"
                                onChange={(e) => setPassword(e.target.value)}/>
                        </div>
                        {/** Form link Forgot password */}
                        <a
                            href="https://www.doctoralia.es/preguntas-respuestas/podria-a-traves-de-la-hipnosis-recordar-una-contrasena-que-he-olvidado-se-que-hay-muchos-mitos"
                            target="_blank"
                            className="text-tremor-default text-gray-500 cursor-pointer hover:text-gray-400">
                            ¿Olvidaste tu contraseña?
                        </a>
                    </div>
                    {/** Form Button */}
                    <div className="px-8 w-full">
  
                            <Button type="submit" variant="secondary" className="w-full">
                                Iniciar sesión
                            </Button>

                    </div>
                </form>
            </Card>
        </div>
    );
}
export default Login;