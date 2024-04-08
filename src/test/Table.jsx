import {Card} from '@tremor/react'
import { MyContext } from '../AppTest';
const TableTest = ( {button} ) => {
    const valueFromContext = React.useContext(MyContext)
    return (
        <Card className='w-1/2 text-center flex flex-col gap-4'>
            Tabla
            {button}
        </Card>
    );
}

export default TableTest;