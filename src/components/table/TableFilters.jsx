import { Icon, Select, SelectItem, TextInput } from "@tremor/react";
import { RiRestartLine } from "react-icons/ri";

const TableFilters = ({ filters, globalFilter, setGlobalFilter, reloadAction }) => {
    return (
        <div className="py-2 px-5 flex justify-between">
            <div>
                <TextInput 
                    placeholder="Buscar"
                    value={globalFilter} 
                    onChange={(e) => setGlobalFilter(e.target.value)} 
                />
            </div>
            <div className="flex items-center gap-6"> 
                <Select defaultValue="1">
                    {filters.map((item) => (
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
                    ></Icon>
                </button>
            </div>
        </div>
    );
}

export default TableFilters;
