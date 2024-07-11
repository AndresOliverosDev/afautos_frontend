import { Select, SelectItem, TextInput } from "@tremor/react";

const TableFilters = ({ filters, globalFilter, setGlobalFilter }) => {
    return (
        <div className="py-2 px-5 flex justify-between">
            <div>
                <TextInput 
                    placeholder="Buscar"
                    value={globalFilter} 
                    onChange={(e) => setGlobalFilter(e.target.value)} 
                />
            </div>
            <div>
                <Select defaultValue="1">
                    {filters.map((item) => (
                        <SelectItem value={item.index} key={item.index}>
                            {item.name}
                        </SelectItem>
                    ))}
                </Select>
            </div>
        </div>
    );
}

export default TableFilters;
