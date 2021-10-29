
//Set_Text_Filter
export const setTextFilter=(text='')=>({
    type:'SET_TEXT_FILTER',
    text
});
//Sort_By_Date
export const sortByAmount=()=>({
    type:'SORT_BY_AMOUNT',
    
});
//Sort_By_Amount
export const sortByDate=()=>({
    type:'SORT_BY_DATE',
    
});
//Set_Start_Date
export const  setStartDate=(startDate=undefined)=>({
    type:'SET_START_DATE',
    startDate
});
//Set_End_Date
export const  setEndDate=(endDate=undefined)=>({
    type:'SET_END_DATE',
    endDate
});
