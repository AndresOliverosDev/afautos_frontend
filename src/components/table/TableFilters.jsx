import { Button, Select, SelectItem, TextInput } from "@tremor/react";

const TableFilters = ({ filters }) => {
    return (
        <div className="py-2 px-5 flex justify-between">
            <div className="">
            <TextInput placeholder="Buscar"/>
            </div>
            <div className="">
            <Select defaultValue="1">
                        {
                            filters.map((item) => (
                                <SelectItem value={item.index} key={item.index}>
                                    {item.name}
                                </SelectItem>
                            ))
                        }
                    </Select>
            </div>
        </div>
    );
}
 
export default TableFilters;