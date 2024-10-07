import { Icon, Select, SelectItem, TextInput } from "@tremor/react";
import { RiRestartLine } from "react-icons/ri";
import { ChangeEvent } from "react";
import React from "react";

interface Filter {
    index: string;
    name: string;
}

interface TableFiltersProps {
    filters?: Filter[]; // Hacer filters opcional
    globalFilter: string;
    setGlobalFilter: (value: string) => void;
    reloadAction: () => void;
}

const TableFilters: React.FC<TableFiltersProps> = ({ filters, globalFilter, setGlobalFilter, reloadAction }) => {
    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setGlobalFilter(e.target.value);
    };

    return (
        <div className="py-2 px-5 flex justify-between">
            <div>
                <TextInput 
                    placeholder="Buscar"
                    value={globalFilter} 
                    onChange={handleInputChange} 
                />
            </div>
            <div className="flex items-center gap-6"> 
                <Select defaultValue="1">
                    {/* Verificar si filters existe antes de hacer map */}
                    {filters?.map((item) => (
                        <SelectItem value={item.index} key={item.index}>
                            {item.name}
                        </SelectItem>
                    ))}
                </Select>
                <button onClick={reloadAction}>    
                    <Icon 
                        className="h-10 w-10"
                        icon={RiRestartLine}
                        variant="shadow"
                    />
                </button>
            </div>
        </div>
    );
}

export default TableFilters;