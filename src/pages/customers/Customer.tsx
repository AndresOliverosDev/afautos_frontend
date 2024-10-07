import React from "react";
import CustomerTable from "./customerTable/CustomerTable";

const Customer = () => {

    return (
            <section className="flex flex-col gap-2 h-[97.5vh] w-full overflow-auto">
                <div className="overflow-auto">
                    <CustomerTable />
                </div>
            </section>
    );
}

export default Customer;