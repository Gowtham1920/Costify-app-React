import {createStore,combineReducers} from 'redux';
import uuid from 'uuid';
/////Action generators:
//Add Expense
const addExpense=(
        {
        description='',
        note='',
        amount=0,
        createdAt=0
    }={}
)=>({
    type:'ADD_EXPENSE',
    expense:{
        id:uuid(),
        description,
        note,
        amount,
        createdAt
    }
});
//Remove Expense
const removeExpense=({id}={})=>({
    type:'REMOVE_EXPENSE',
    id
    
});

//Edit Expense
const editExpense=(id,updates)=>({
        type:'EDIT_EXPENSE',
        id,
        updates
});
//Set_Text_Filter
const setTextFilter=(text='')=>({
    type:'SET_TEXT_FILTER',
    text
});
//Sort_By_Date
const sortByAmount=()=>({
    type:'SORT_BY_AMOUNT',
    
});
//Sort_By_Amount
const sortByDate=()=>({
    type:'SORT_BY_DATE',
    
});
//Set_Start_Date
const  setStartDate=(startDate=undefined)=>({
    type:'SET_START_DATE',
    startDate
});
//Set_End_Date
const  setEndDate=(endDate=undefined)=>({
    type:'SET_END_DATE',
    endDate
});

//Expense reducer
const expenseReducerDefaultState=[];

const expenseReducer=(state=expenseReducerDefaultState,action)=>{
    switch(action.type){
        case 'ADD_EXPENSE':
            return [
                ...state,
                action.expense
            ]; 
        case 'REMOVE_EXPENSE':
            return state.filter(({id})=>{
                return id !== action.id;
            });
        case 'EDIT_EXPENSE':
            return state.map((expense)=>{
                if(expense.id === action.id){
                    return {
                        ...expense,
                        ...action.updates
                    };
                }else{
                    return expense;
                }
            });
        default:
            return state;
    }
};
//Filter reducer
const filterReducerDefaultState={
    text:'',
    sortBy:'date',
    startDate:undefined,
    endDate:undefined
}

const filterReducer=(state=filterReducerDefaultState,action)=>{
    switch(action.type){
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                 text:action.text//not changing state just like appending
            };
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy:'amount'
            };
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy:'date'
            };
        case 'SET_START_DATE':
            return {
                ...state,
                startDate:action.startDate
            };
         case 'SET_END_DATE':
                return {
                    ...state,
                   endDate:action.endDate
                };           
        default:
            return state;
    }
};
//get visisble expenses
 const getVisibileExpense=(expense,{text,sortBy,startDate,endDate})=>{
    return expense.filter((expense)=>{
        const startDateMatch=typeof startDate !=='number'||expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number'|| expense.createdAt <= endDate;
        const textMatch=expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a,b)=>{
        if(sortBy ==='date'){
            return a.createdAt < b.createdAt? 1:-1;
        }
        if(sortBy ==='amount'){
            return a.amount<b.amount?1:-1;
        }
    });
 };
//store creation
const store=createStore(
    combineReducers({
        expense:expenseReducer,
        filters:filterReducer
    })
);
store.subscribe(()=>{
    const state=store.getState();
    const visibleExpense=getVisibileExpense(state.expense,state.filters);
    console.log(visibleExpense);
});
 const expenseOne=store.dispatch(addExpense({description:'Rent',amount:100, createdAt:1000}));
const expenseTwo=store.dispatch(addExpense({description:'coffee',amount:300 ,createdAt:-1000}));
// store.dispatch(removeExpense({id:expenseOne.expense.id}));
// store.dispatch(editExpense(expenseTwo.expense.id,{amount:500}));
// store.dispatch(setTextFilter('rent'));
// store.dispatch(setTextFilter());
store.dispatch(sortByAmount());
// store.dispatch(sortByDate());
// store.dispatch(setStartDate(125));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(1250));

const demoState={
    expense:[{
        id:'snkskvkvncdcsdc',
        description:'January rent',
        amount:2500,
        createdAt:0
    }],
    filters:{
        text:'rent',
        sortBy:'amount',//amount or date
        startDate:undefined,
        endDate:undefined
    }
};







////example of object spread operator
// const user={
//     name:'Gow',
//     age:'24'
// };

// console.log({
//     ...user
// });