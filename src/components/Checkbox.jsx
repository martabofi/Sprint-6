import React, { useContext } from "react";
import { BudgetContext } from "../contexts/BudgetContext";
import WebOptions from "./WebOptions";

const CheckBox = ({ id, label, price, description }) => {
  const { handleCheckBoxChange } =
    useContext(BudgetContext);

  return (
    <div>
      <label
        className="grid grid-cols-3 mb-5 h-auto border rounded-xl shadow-lg items-center relative"
        htmlFor={id}
      >
        <div className="text-left ml-10 my-5">
          <h1 className="mb-2 font-bold text-2xl">{label}</h1>
          <p className="font-semibold">{description} </p>
        </div>
        <h1 className="text-center font-bold text-2xl">{price} €</h1>
        <div className="flex content-align-center justify-end mr-20">
          <input
            type="checkbox"
            id={id}
            onChange={() => {
              handleCheckBoxChange(id, price);
            }}
          />
          <p className="font-semibold ml-4">Afegir</p>
        </div>
        {id === 3 && (
          <div className="col-span-3 ml-10 mb-5 mr-10 border-t pt-4 justify-end">
            <WebOptions />
          </div>
        )}
      </label>
    </div>
  );
};

export default CheckBox;
