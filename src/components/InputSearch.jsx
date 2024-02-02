import IconHome from "../assets/icons/IconHome";
import { useState, useEffect } from "react";

const InputSearch = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  // Busqueda
  useEffect(() => {
    const resultadosSimulados = [
      "LLantas",
      "Rines",
      "Accesorios",
      "Lujos",
      "Luces",
      "Aires",
      "Espejos",
      "Limpieza",
      "Polarizados",
    ];

    const results = resultadosSimulados.filter((result) =>
      result.toLowerCase().includes(query.toLowerCase()),
    );
    setResults(results);
  }, [query]);

  // Lmpiar el query
  useEffect(() => {
    setQuery("");
  }, []);

  // Funcion controladora de eventos
  function handleInputChange(e) {
    setQuery(e.target.value);
  }
  const focusOff = () => {
    setQuery("");
  };

  return (
    <div className="relative flex items-center justify-center">
      <div className="flex rounded-full bg-lContainer px-2 w-full max-w-[400px] dark:bg-dContainer">
        <input
          type="text"
          className="w-full bg-[#0d1829] flex bg-transparent pl-2 text-[#cccccc] outline-0"
          placeholder="Buscar"
          onChange={handleInputChange}
          onBlur={focusOff}
        />
        <button
          type="submit"
          className="relative p-2 m-1 bg-dContainer rounded-full dark:bg-none"
        >
          <IconHome />
        </button>
        {query && (
          <ul className="absolute top-full h-48 w-40 bg-lContainer p-4 dark:bg-dContainer rounded-xl border-solid overflow-auto">
            {results.map((result, index) => (
              <li
                className="p-2 text-lNeu dark:text-dTextNeu hover:bg-lBackground dark:hover:bg-dBackground cursor-pointer rounded-2xl"
                key={index}
              >
                {result}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
export default InputSearch;
