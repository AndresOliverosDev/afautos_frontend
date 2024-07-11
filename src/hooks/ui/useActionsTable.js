import { useState } from "react";

const useActionsTable = () => {
    const [detailsIsOpen, setDetailsIsOpen] = useState(false);
    const [selectDetailData, setSelectDetailData] = useState(null);
    const [createIsOpen, setCreateIsOpen] = useState(false);

    const handleCloseDetails = () => {
        setDetailsIsOpen(!detailsIsOpen);
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
        handleCloseCreate
    };
};

export default useActionsTable;
