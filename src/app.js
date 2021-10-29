import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from "./routers/AppRouter";
import configureStore from './store/configureStore';
import {addExpense} from './actions/expenses';
import {setTextFilter} from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store=configureStore();

store.dispatch(addExpense({description:'Water Bill',amount:300}));
store.dispatch(addExpense({description:'Gas Bill' ,amount:200,createdAt:252552}));
store.dispatch(addExpense({description:'Rent bill',amount:130000}));
//store.dispatch(setTextFilter('water'));

// setTimeout(()=>{
//     store.dispatch(setTextFilter('bill')); 
// },3000);
const state=store.getState();
const visibleExpense=getVisibleExpenses(state.expense,state.filters);
console.log(visibleExpense);

const jsx =(
    <Provider store={store}>
    <AppRouter />
    </Provider>
)

ReactDOM.render(jsx,document.getElementById('app'));          