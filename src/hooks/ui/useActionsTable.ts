import { useState } from "react";

const useActionsTable = () => {
    const [detailsIsOpen, setDetailsIsOpen] = useState<boolean>(false);
    const [selectDetailData, setSelectDetailData] = useState<any>(null); // Puedes especificar un tipo más específico si conoces la forma de los datos
    const [createIsOpen, setCreateIsOpen] = useState<boolean>(false);
    const [deleteIsOpen, setDeleteIsOpen] = useState<boolean>(false);
    const [updateIsOpen, setUpdateIsOpen] = useState<boolean>(false);

    const handleCloseDetails = () => {
        setDetailsIsOpen(prev => !prev);
    };

    const handleCloseDelete = () => {
        setDeleteIsOpen(prev => !prev);
    };

    const handleSelectDetailData = (data: any) => { // Cambia `any` por un tipo específico si lo conoces
        setSelectDetailData(data);
        setDetailsIsOpen(true);
    };

    const handleCloseCreate = () => {
        setCreateIsOpen(prev => !prev);
    };

    const handleCloseUpdate = (data: any) => { // Cambia `any` por un tipo específico si lo conoces
        setSelectDetailData(data);
        setUpdateIsOpen(prev => !prev);
    };

    return {
        detailsIsOpen,
        handleCloseDetails,
        selectDetailData,
        handleSelectDetailData,
        createIsOpen,
        handleCloseCreate,
        deleteIsOpen,
        handleCloseDelete,
        updateIsOpen,
        handleCloseUpdate,
    };
};

export default useActionsTable;