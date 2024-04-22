import { Button, Card, Icon } from "@tremor/react";
import { RiTwitterXLine } from "react-icons/ri";
import TableFilters from "./TableFilters";

const TableHeader = ({ title, buttonAdd, filters }) => {
    return (
        <Card className="flex flex-col gap-1 p-0">
            <div className="flex items-center justify-between border-b dark:border-slate-700 p-5">
                <h1 className="text-tremor-title font-semibold">{title}</h1>
                <div className="flex gap-2">
                    <Button
                        tooltip={buttonAdd.text}
                        onClick={buttonAdd.onClick}
                    >
                        {buttonAdd.text}
                    </Button>
                    <Icon icon={RiTwitterXLine} variant="outlined" />
                </div>
            </div>
                <TableFilters filters={filters}/>
        </Card>
    );
}

export default TableHeader;