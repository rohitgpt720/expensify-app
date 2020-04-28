import React from 'react';
import { connect } from 'react-redux';
import selectedExpenses from '../selectors/expenses.js'
import expensesTotal from '../selectors/expenses-total';
import numeral from 'numeral';

const ExpensesSummary = (props) => {
  const expenseWord = props.expenseCount === 1 ? 'expense' : 'expenses';
  return (
    <div>
      <h2>{`You have 
          ${props.expensesCount} ${expenseWord} 
          summing up to 
          ${numeral(props.expensesTotal / 100 ).format('$0,0.00')}.`}</h2>
    </div>
  )
}

const mapStateToProps = (state) => {
  
  const visibleExpenses = selectedExpenses(state.expenses,state.filters); 

  return {
    expensesCount : visibleExpenses.length,
    expensesTotal : expensesTotal(visibleExpenses)
  }
};


export default connect(mapStateToProps)(ExpensesSummary);;