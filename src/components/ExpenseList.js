import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem.js';
import selectedExpenses from '../selectors/expenses.js'

const ExpenseList = (props) => (
  <div>
    {
      (props.expenses.length === 0) ? (
        <p>No Expenses</p>
      ) : (
        props.expenses.map((expense) => (
          <ExpenseListItem key={expense.id} {...expense}/>
        ))
      )      
    }  
  </div>
);

const mapStateToProps = (state) => {
  return {
    expenses : selectedExpenses(state.expenses,state.filters)
  }
};


export default connect(mapStateToProps)(ExpenseList);;
