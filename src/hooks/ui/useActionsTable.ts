import { useState } from "react";

const useActionsTable = () => {
    const [detailsIsOpen, setDetailsIsOpen] = useState<boolean>(false);
    const [selectDetailData, setSelectDetailData] = useState<any>(null);
    const [createIsOpen, setCreateIsOpen] = useState<boolean>(false);
    const [deleteIsOpen, setDeleteIsOpen] = useState<boolean>(false);
    const [updateIsOpen, setUpdateIsOpen] = useState<boolean>(false);

    const handleCloseDetails = () => {
        setDetailsIsOpen(prev => !prev);
    };

    const handleCloseDelete = () => {
        setDeleteIsOpen(prev => !prev);
    };

    const handleSelectDetailData = (data: any) => {
        setSelectDetailData(data);
        setDetailsIsOpen(true);
    };

    const handleCloseCreate = () => {
        setCreateIsOpen(prev => !prev);
    };

    const handleCloseUpdate = (data: any) => {
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