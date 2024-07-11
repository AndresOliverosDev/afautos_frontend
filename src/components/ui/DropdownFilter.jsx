import React, { useState, useRef, useEffect } from 'react';
import { Select, SelectItem, TextInput } from "@tremor/react";

const DropdownFilter = ({ column, setColumnFilters, filterOptions }) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef();

    const handleDocumentClick = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleDocumentClick);
        return () => {
            document.removeEventListener('mousedown', handleDocumentClick);
        };
    }, []);

    const handleFilterChange = (value) => {
        setColumnFilters(column.id, value);
        setIsOpen(false);
    };

    return (
        <div className="relative" ref={dropdownRef}>
            <span
                className="cursor-pointer flex items-center gap-1"
                onClick={() => setIsOpen(!isOpen)}
            >
                {column.columnDef.header} &gt;
            </span>
            {isOpen && (
                <div className="absolute z-10 mt-1 bg-white border border-gray-300 rounded shadow-lg p-2">
                    {filterOptions.length > 0 ? (
                        <Select
                            value={columnFilters[column.id] || ""}
                            onChange={(e) => handleFilterChange(e.target.value)}
                        >
                            {filterOptions.map((option) => (
                                <SelectItem key={option.value} value={option.value}>
                                    {option.label}
                                </SelectItem>
                            ))}
                        </Select>
                    ) : (
                        <TextInput
                            placeholder={`Filtrar ${column.columnDef.header}`}
                            value={columnFilters[column.id] || ""}
                            onChange={(e) => handleFilterChange(e.target.value)}
                        />
                    )}
                </div>
            )}
        </div>
    );
};

export default DropdownFilter;
