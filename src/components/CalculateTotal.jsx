import React, { useContext } from 'react';
import { BudgetContext } from '../contexts/BudgetContext';

const CalculateTotal = () => {
  const { total } = useContext(BudgetContext);

  return (
    <div>
      <h2 className="text-2xl font-bold mt-4 text-right">Pressupost: {total} €</h2>
    </div>
  );
};

export default CalculateTotal;