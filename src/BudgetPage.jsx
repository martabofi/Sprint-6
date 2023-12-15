import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import CheckBox from "./components/Checkbox";
import CalculateTotal from "./components/CalculateTotal";
import { BudgetContext } from "./contexts/BudgetContext";

const BudgetPage = () => {
  const { selections, total, clientDataList, handleSubmitRequest } =
    useContext(BudgetContext);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const handleClientData = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Dades del client: ", formData);
    console.log("Productes seleccionats: ", selections);
    console.log("Preu total: ", total);
    handleSubmitRequest(formData, selections, total);
    setFormData({ name: "", phone: "", email: "" });
  };

  return (
    <div className="container mx-auto max-w-screen-lg p-4 h-screen mt-10">
      <Link
        to="/"
        className="bg-white border border-orange-600 text-orange-600 font-bold px-4 py-2 rounded"
      >
        ⤺ Tornar a la pantalla de benvinguda
      </Link>
      <h1 className="text-3xl text-center font-bold mb-10 my-10">
        Aconsegueix la millor qualitat
      </h1>
      <CheckBox
        id={1}
        label="SEO"
        description="Optimització del posicionament de la teva web"
        price={300}
      />
      <CheckBox
        id={2}
        label="Ads"
        description="Gestió d'anuncis amb Facebook Ads"
        price={400}
      />
      <CheckBox
        id={3}
        label="Web"
        description="Programació d'una web responsive completa"
        price={500}
      />
      <CalculateTotal />

      <form
        onSubmit={handleSubmit}
        className="mt-10 flex justify-between flex-col"
      >
        <div className="mb-5 h-auto border rounded-xl shadow-lg items-center relative">
          <h1 className="font-bold text-2xl mb-3 ml-10 mt-5">
            Demanar pressupost
          </h1>
          <div className="ml-10 grid grid-cols mr-10">
            <label htmlFor="name" className="font-semibold my-2">
              Nom complet
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleClientData}
              required
              className="border rounded-lg py-1 px-2"
            />
            <label htmlFor="phone" className="mt-5 font-semibold mb-2">
              Telèfon
            </label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleClientData}
              required
              className="border rounded-lg py-1 px-2"
            />
            <label htmlFor="email" className="mt-5 font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleClientData}
              required
              className="border rounded-lg py-1 px-2"
            />
            <button
              type="submit"
              className="bg-orange-600 text-white px-4 py-2 rounded w-52 mx-auto my-8"
            >
              Sol·licitar pressupost ➞
            </button>
          </div>
        </div>
      </form>

      {clientDataList.map((clientData, index) => (
        <div key={index} className="border rounded-xl p-4 my-5">
          <h2 className="text-xl text-orange-600 font-semibold mb-4">
            Detalls del pressupost {index + 1}
          </h2>
          <p>
            <span className="font-semibold">Nom del client: </span>
            {clientData.name}
          </p>
          <p>
            <span className="font-semibold"> Telèfon del client: </span>
            {clientData.phone}
          </p>
          <p>
            <span className="font-semibold">Email del client: </span>
            {clientData.email}
          </p>
          <p>
            <span className="font-semibold">Productes seleccionats: </span>
            {clientData.productSelection.join(", ")}
          </p>
          <p>
            <span className="font-semibold"> Preu total: </span>
            {clientData.totalPrice} €
          </p>
        </div>
      ))}
    </div>
  );
};

export default BudgetPage;
