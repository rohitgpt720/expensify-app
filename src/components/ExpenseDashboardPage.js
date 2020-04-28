import React from 'react';
import ExpenseList from './ExpenseList.js';
import ExpenseListFilter from './ExpenseListFilter.js';
import ExpenseListHeader from './ExpenseListHeader';


const ExpenseDashboardPage = () => (
  <div>
    <ExpenseListHeader />
    <ExpenseListFilter />
    <ExpenseList />
  </div>
);

export default ExpenseDashboardPage;
