import { Button, TextInput } from "@tremor/react";

const TableFilters = () => {
    return (
        <div className="py-2 px-5 flex justify-between">
            <div className="">
            <TextInput placeholder="Buscar"/>
            </div>
            <div className="">
                <Button>
                    Hola
                </Button>
            </div>
        </div>
    );
}
 
export default TableFilters;