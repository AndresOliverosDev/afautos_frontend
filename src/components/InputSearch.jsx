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
      <div className="bg-lContainer dark:bg-dContainer flex w-full max-w-[400px] rounded-full px-2">
        <input
          type="text"
          className="flex w-full bg-[#0d1829] bg-transparent pl-2 text-[#cccccc] outline-0"
          placeholder="Buscar"
          onChange={handleInputChange}
          onBlur={focusOff}
        />
        <button
          type="submit"
          className="bg-dContainer relative m-1 rounded-full p-2 dark:bg-none"
        >
          <IconHome />
        </button>
        {query && (
          <ul className="bg-lContainer dark:bg-dContainer absolute top-full h-48 w-40 overflow-auto rounded-xl border-solid p-4">
            {results.map((result, index) => (
              <li
                className="text-lNeu dark:text-dTextNeu hover:bg-lBackground dark:hover:bg-dBackground cursor-pointer rounded-2xl p-2"
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
