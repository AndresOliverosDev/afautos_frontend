import React, { useState, useRef, useEffect } from 'react';
import { Select, SelectItem, TextInput } from "@tremor/react";

interface FilterOption {
  value: string;
  label: string;
}

interface Column {
  id: string;
  columnDef: {
    header: string;
  };
}

interface DropdownFilterProps {
  column: Column;
  setColumnFilters: (id: string, value: string) => void;
  filterOptions: FilterOption[];
  columnFilters: Record<string, string>;
}

const DropdownFilter: React.FC<DropdownFilterProps> = ({ column, setColumnFilters, filterOptions, columnFilters }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const handleDocumentClick = (event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleDocumentClick);
        return () => {
            document.removeEventListener('mousedown', handleDocumentClick);
        };
    }, []);

    const handleFilterChange = (value: string) => {
        setColumnFilters(column.id, value);
        setIsOpen(false);
    };

    const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        handleFilterChange(e.target.value);
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
                            onChange={() => handleSelectChange} // Cambia esto
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
