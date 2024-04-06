import {Card} from '@tremor/react'
const TableTest = ( {button} ) => {
    return (
        <Card className='w-1/2 text-center flex flex-col gap-4'>
            Tabla
            {button}
        </Card>
    );
}

export default TableTest;