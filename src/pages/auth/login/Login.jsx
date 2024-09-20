import { Button, Card, Icon, TextInput } from "@tremor/react";
import { RiKey2Fill, RiUserFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/authentication/useAuth";
import { useForm } from "react-hook-form";

const Login = () => {
    const { login, errorAuth } = useAuth();
    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        const success = await login(data.username, data.password);
        if (success) {
            navigate("/inicio");
        }
    }

    return (
        <div className="flex w-full justify-center items-center">
            <Card className="w-[95%] sm:w-[55%] md:w-[45%] lg:w-[30%] h-[92%] p-3 flex flex-col gap-2">
                <div className="bg-black h-[30%] flex items-center justify-center bg-opacity-5 rounded-xl">
                    <img className="w-44 h-44" src="../../../../public/logo_afautos.svg" />
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className="bg-black rounded-xl bg-opacity-15 h-[70%] flex items-center justify-center flex-col gap-4">
                    <h1 className="text-xl">
                        Iniciar sesión
                    </h1>
                    {errorAuth && (
                        <span className="text-red-500 text-sm">{errorAuth}</span>
                    )}
                    <div className="bg-dark w-full px-8 flex flex-col gap-3">
                        <div className="flex flex-col gap-1 items-end">
                            <div className="flex items-center gap-2 w-full">
                                <Icon icon={RiUserFill} color="gray" />
                                <TextInput
                                    placeholder="Nombre de usuario"
                                    error={errors.username}
                                    {...register("username", {
                                        required: {
                                            value: true,
                                            message: "Debes ingresar tu nombre de usuario"
                                        },
                                        maxLength: {
                                            value: 30,
                                            message: "Longitud máxima excedida"
                                        }
                                    })}
                                />
                            </div>
                            {errors.username && (
                                <span className="text-red-500 text-sm">{errors.username.message}</span>
                            )}
                        </div>
                        <div className="flex flex-col gap-1 items-end">
                            <div className="flex items-center gap-2 w-full">
                                <Icon icon={RiKey2Fill} color="gray" />
                                <TextInput
                                    placeholder="Contraseña"
                                    type="password"
                                    error={errors.password}
                                    {...register("password", {
                                        required: {
                                            value: true,
                                            message: "Debes ingresar tu contraseña"
                                        }
                                    })}
                                />
                            </div>
                            {errors.password && (
                                <span className="text-red-500 text-sm">{errors.password.message}</span>
                            )}
                        </div>
                        <a
                            href="https://www.doctoralia.es/preguntas-respuestas/podria-a-traves-de-la-hipnosis-recordar-una-contrasena-que-he-olvidado-se-que-hay-muchos-mitos"
                            target="_blank"
                            className="text-tremor-default text-gray-500 cursor-pointer hover:text-gray-400"
                            rel="noopener noreferrer">
                            ¿Olvidaste tu contraseña?
                        </a>
                    </div>
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
