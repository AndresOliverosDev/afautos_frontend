import OrderTable from "./OrderTable";

const Orders = () => {
    return (
        <section className="flex flex-col gap-2 h-[97.5vh] w-full overflow-auto">
            <div className="overflow-auto">
                <OrderTable />
            </div>
        </section>
);
}

export default Orders;