import React, { useState } from "react";

interface SearchSelectProps<T> {
  data: T[];
  labelKey: keyof T;
  idKey: keyof T;
  defaultValue?: T | null;
  onValueChange?: (item: T) => void;
  label?: string;
  loadingData?: boolean;
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

  // Filtrar elementos según la consulta de búsqueda
  const filteredItems = data.filter((item) =>
    item[labelKey]?.toString().toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleToggleSelect = () => {
    setIsOpen((prev) => !prev);
    if (!isOpen) {
      setSearchQuery(""); // Reiniciar búsqueda al abrir
    }
  };

  const handleSelectItem = (item: T) => {
    setSelectedItem(item);
    setIsOpen(false);
    if (onValueChange) {
      onValueChange(item);
    }
  };

  const selectedItemName = selectedItem ? selectedItem[labelKey]?.toString() : "Select an option";

  return (
    <div className="relative w-full">
      {label && <label className="block mb-2 text-sm font-medium text-gray-700">{label}</label>}
      <div className="flex flex-col">
        <div
          onClick={handleToggleSelect}
          className="flex items-center justify-between p-2 border border-gray-300 rounded-md cursor-pointer bg-white dark:bg-gray-800 shadow-sm"
        >
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search..."
            className="flex-grow p-2 bg-transparent border-none focus:outline-none focus:ring focus:ring-blue-300"
          />
          <span className="material-icons ml-2">arrow_drop_down</span>
        </div>
        {isOpen && (
          <div className="absolute left-0 z-10 mt-1 w-full max-h-60 overflow-y-auto bg-white dark:bg-gray-800 border border-gray-300 rounded-md shadow-lg">
            <div className="max-h-60 overflow-y-auto">
              {loadingData ? (
                <div className="p-2 text-center">Loading...</div>
              ) : (
                filteredItems.length > 0 ? (
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
                )
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchSelect;
