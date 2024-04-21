import { Button, Card } from "@tremor/react";

const TableFooter = () => {
    return (
        <Card className="flex justify-center gap-4 py-2 h-12 text-sm">
            <Button

                variant="primary"
            >
                Pagina Anterior
            </Button>

            <Button
                variant="secondary"
            >
                Pagina Siguiente
            </Button>

        </Card>
    );
}

export default TableFooter;