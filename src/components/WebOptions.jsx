import React, { useContext } from "react";
import { BudgetContext } from "../contexts/BudgetContext";

const WebOptions = () => {
  const { handleWebOptionsChange, numPages, numLanguages } =
    useContext(BudgetContext);

  const handleIncrement = (type) => {
    if (type === "pages") {
      handleWebOptionsChange("pages", numPages + 1);
    } else if (type === "languages") {
      handleWebOptionsChange("languages", numLanguages + 1);
    }
  };

  const handleDecrement = (type) => {
    if (type === "pages" && numPages > 0) {
      handleWebOptionsChange("pages", numPages - 1);
    } else if (type === "languages" && numLanguages > 0) {
      handleWebOptionsChange("languages", numLanguages - 1);
    }
  };

  return (
    <div className="flex justify-end">
      <div className="flex flex-col">
        <div className="mb-2 flex justify-end">
          <label htmlFor="numPages" className="mr-2 font-semibold">
            Número de pàgines:
          </label>
          <div className="flex items-center">
          <button
              className="bg-gray-200 text-gray-700 px-2 py-1 rounded-3xl h-6 w-6 align-middle flex justify-center items-center text-center"
              onClick={() => handleDecrement("pages")}
            >
              -
            </button>
          <input
            type="number"
            id="numPages"
            value={numPages}
            onChange={(e) =>
              handleWebOptionsChange("pages", parseInt(e.target.value))
            }
            className="border text-center w-16 h-8 rounded-lg mx-2"
          />
          <button
              className="bg-gray-200 text-gray-700 px-2 py-1 rounded-3xl h-6 w-6 align-middle flex justify-center items-center text-center"
              onClick={() => handleIncrement("pages")}
            >
              +
            </button>
        </div>
        </div>
        <div className="mb-2 flex justify-end">
          <label htmlFor="numLanguages" className="mr-2 font-semibold">
            Número d'idiomes:
          </label>
          <div className="flex items-center">
          <button
              className="bg-gray-200 text-gray-700 px-2 py-1 rounded-3xl h-6 w-6 align-middle flex justify-center items-center text-center"
              onClick={() => handleDecrement("languages")}
            >
              -
            </button>
          <input
            type="number"
            id="numLanguages"
            value={numLanguages}
            onChange={(e) =>
              handleWebOptionsChange("languages", parseInt(e.target.value))
            }
            className="border text-center w-16 h-8 rounded-lg mx-2"
          />
                    <button
              className="bg-gray-200 text-gray-700 px-2 py-1 rounded-3xl h-6 w-6 align-middle flex justify-center items-center text-center"
              onClick={() => handleIncrement("languages")}
            >
              +
            </button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default WebOptions;
