import React, { useState, useEffect, useRef } from "react";
import { RiArrowDownSLine } from "react-icons/ri";

interface SearchSelectProps<T> {
  data: T[];
  labelKey: keyof T;
  idKey: keyof T;
  defaultValue?: T | null;
  onValueChange?: (item: T) => void;
  label?: string;
  loadingData?: boolean;
  value?: any;
}

const SearchSelect = <T,>({
  data,
  labelKey,
  idKey,
  defaultValue = null,
  onValueChange,
  label,
  loadingData,
}: SearchSelectProps<T>) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedItem, setSelectedItem] = useState<T | null>(defaultValue);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const filteredItems = data.filter((item) =>
    item[labelKey]?.toString().toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleToggleSelect = () => {
    setIsOpen((prev) => !prev);
    if (!isOpen) setSearchQuery(""); // Reiniciar búsqueda al abrir
  };

  const handleSelectItem = (item: T) => {
    setSelectedItem(item);
    setIsOpen(false);
    if (onValueChange) onValueChange(item); // Notificar al padre
  };

  const selectedItemName = selectedItem ? selectedItem[labelKey]?.toString() : "";

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={dropdownRef} className="relative w-full">
      {label && <label className="block mb-2 text-default font-medium text-gray-700">{label}</label>}
      <div className="flex flex-col">
        <div
          onClick={handleToggleSelect}
          className="flex items-center justify-between px-2 border border-light-border dark:border-dark-border rounded-md cursor-pointer bg-transparent shadow-sm"
        >
          <input
            type="text"
            value={isOpen ? searchQuery : selectedItemName}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search..."
            className="flex-grow p-2 bg-transparent border-none focus:outline-none"
            readOnly={!isOpen}
          />
          <RiArrowDownSLine className="w-6 h-6" />
        </div>
        {isOpen && (
          <div
            className="absolute left-0 z-10 mt-1 w-full max-h-60 overflow-y-auto bg-light-card dark:bg-dark-card opacity-95 border border-light-content-subtle dark:border-dark-content-subtle rounded-md shadow-lg"
            style={{ top: "100%" }}
          >
            {loadingData ? (
              <div className="p-2 text-center">Loading...</div>
            ) : filteredItems.length > 0 ? (
              filteredItems.map((item) => (
                <div
                  key={item[idKey]?.toString()}
                  onClick={() => handleSelectItem(item)}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
                >
                  {item[labelKey]?.toString()}
                </div>
              ))
            ) : (
              <div className="p-2 text-center text-gray-500">No results found</div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchSelect;
