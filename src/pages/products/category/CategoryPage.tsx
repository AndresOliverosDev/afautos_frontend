import CategoryTable from "./categoryTable/CategoryTable";
import React from "react";
import { Card } from "../../../components/ui";

const CategoryPage = () => {
    return (
        <Card className="p-0">
            <CategoryTable /> 
        </Card>
    )
}

export default CategoryPage;