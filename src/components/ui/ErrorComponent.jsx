import { Button, Card } from "@tremor/react"
import { GiDeadWood } from "react-icons/gi";
import { Link } from "react-router-dom";

const ErrorComponent = ({ codeError, textError }) => {
    return (
        <Card className="md:w-2/5 sm:w-3/5 lg:w-1/3 h-5/6 flex flex-col items-center justify-center gap-4 text-red-500">
            <GiDeadWood className="h-3/5 w-3/5" />
            <span className="flex flex-col items-center gap-1">
                <h4 className="font-extrabold text-6xl">{codeError}</h4>
                <p>{textError}</p>
            </span>
            <Link to={"/inicio"}>
                <Button variant="secondary" color="red">
                    Inicio
                </Button>
            </Link>
        </Card>
    )
}

export default ErrorComponent;