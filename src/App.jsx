import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import WelcomePage from "./WelcomePage";
import BudgetPage from "./BudgetPage";
import { BudgetProvider } from "./contexts/BudgetContext";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WelcomePage />}></Route>
        <Route
          path="/budget"
          element={
            <BudgetProvider>
              <BudgetPage />
            </BudgetProvider>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
