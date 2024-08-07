import SalesTable from "./SalesTable/SalesTable";


const Sales = () => {

    return (
            <section className="flex flex-col gap-2 h-[97.5vh] w-full overflow-auto">
                <div className="overflow-auto">
                    <SalesTable />
                </div>
            </section>
    );
}

export default Sales;