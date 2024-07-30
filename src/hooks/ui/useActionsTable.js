import { useState } from "react";

const useActionsTable = () => {
    const [detailsIsOpen, setDetailsIsOpen] = useState(false);
    const [selectDetailData, setSelectDetailData] = useState(null);
    const [createIsOpen, setCreateIsOpen] = useState(false);
    const [deleteIsOpen, setDeleteIsOpen] = useState(false);

    const handleCloseDetails = () => {
        setDetailsIsOpen(!detailsIsOpen);
    };

    const handleCloseDelete = () => {
        setDeleteIsOpen(!deleteIsOpen);
    };

    const handleSelectDetailData = (data) => {
        setSelectDetailData(data);
        setDetailsIsOpen(true);
    };

    const handleCloseCreate = () => {
        setCreateIsOpen(!createIsOpen);
    };

    return {
        detailsIsOpen,
        handleCloseDetails,
        selectDetailData,
        handleSelectDetailData,
        createIsOpen,
        handleCloseCreate,
        deleteIsOpen,
        handleCloseDelete
    };
};

export default useActionsTable;
