import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilter from './ExpenseListFilter';


const ExpensifyDashboardPage=()=>{
    return(
    <div>
    <ExpenseListFilter/>
    <ExpenseList />
    </div>
    );
};
export default ExpensifyDashboardPage;