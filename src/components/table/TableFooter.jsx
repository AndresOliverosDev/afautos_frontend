import { Button, Card } from "@tremor/react";

const TableFooter = ({ pageCount, pageIndex, setPageIndex, canPreviousPage, canNextPage, nextPage, previousPage }) => {
    return (
        <Card className="flex flex-col md:flex-row justify-between items-center py-2 h-auto md:h-12 text-sm">
            <div className="flex-1 flex justify-start mb-2 md:mb-0">

            </div>
            <div className="flex-1 flex justify-center gap-4 mb-2 md:mb-0">
                <Button
                    variant="primary"
                    onClick={previousPage}
                    disabled={!canPreviousPage}
                >
                    Página Anterior
                </Button>
                <Button
                    variant="secondary"
                    onClick={nextPage}
                    disabled={!canNextPage}
                >
                    Página Siguiente
                </Button>
            </div>
            <div className="flex-1 flex justify-end">
                Página {pageIndex + 1} de {pageCount}
            </div>
        </Card>
    );
}

export default TableFooter;
