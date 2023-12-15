import React from "react";
import { Link } from "react-router-dom";

const WelcomeScreen = () => {
  return (
    <div className="container mx-auto max-w-screen-lg p-4 flex items-center justify-center h-screen flex-col">
      <h1 className="text-3xl text-center font-bold mb-10">
        Visita la nostra web i calcula el teu pressupost!
      </h1>
      <Link to="/budget" className="bg-orange-600 text-white text-center w-40 mx-auto px-4 py-2 rounded inline-block">
        Començar
      </Link>
    </div>
  );
};

export default WelcomeScreen;
