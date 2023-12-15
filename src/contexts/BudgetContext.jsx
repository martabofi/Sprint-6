import React, { createContext, useState } from "react";

export const BudgetContext = createContext();

export const BudgetProvider = ({ children }) => {
  const [selections, setSelections] = useState([]);
  const [total, setTotal] = useState(0);
  const [numPages, setNumPages] = useState(0);
  const [numLanguages, setNumLanguages] = useState(0);
  const [clientDataList, setClientDataList] = useState([]);

  const handleCheckBoxChange = (id, price) => {
    const isSelected = selections.includes(id);

    if (isSelected) {
      const updatedSelections = selections.filter((item) => item !== id);
      setSelections(updatedSelections);
      setTotal((prevTotal) => prevTotal - price);

      if (id === 3) {
        setNumPages(0);
        setNumLanguages(0);
      }
    } else {
      setSelections([...selections, id]);
      setTotal((prevTotal) => prevTotal + price);
    }
  };

  const handleWebOptionsChange = (type, value) => {
    if (selections.includes(3)) {
      if (type === "pages") {
        if (value >= 0) {
          setNumPages(value);
        }
      } else if (type === "languages") {
        if (value >= 0) {
          setNumLanguages(value);
        }
      }
    }
  };

  const webPrice = (numPages + numLanguages) * 30;
  const totalPrice = total + webPrice;
  const productDetails = {
    1: "SEO - Optimització del posicionament de la teva web",
    2: "Ads - Gestió d'anuncis amb Facebook Ads",
    3: "Web - Programació d'una web responsive completa",
  };

  const handleSubmitRequest = (formData, selections, totalPrice) => {
    const selectedProducts = selections.map((id) => productDetails[id]);
    const newClientData = {
      ...formData,
      productSelection: selectedProducts,
      totalPrice: totalPrice,
    };

    setClientDataList([...clientDataList, newClientData]);

    setSelections([]);
    setTotal(0);
    setNumPages(0);
    setNumLanguages(0);
  };

  return (
    <BudgetContext.Provider
      value={{
        selections,
        total: totalPrice,
        clientDataList,
        handleCheckBoxChange,
        handleWebOptionsChange,
        numPages,
        numLanguages,
        handleSubmitRequest,
      }}
    >
      {children}
    </BudgetContext.Provider>
  );
};
