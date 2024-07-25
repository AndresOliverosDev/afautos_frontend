import { Card } from "@tremor/react"
import CategoryTable from "./categoryTable/CategoryTable";

const CategoryPage = () => {
    return (
        <Card className="h-full">
            <CategoryTable />
        </Card>
    )
}

export default CategoryPage;