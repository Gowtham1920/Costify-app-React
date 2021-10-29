import {createStore} from 'redux';

const incrementcount=({incrementBy=1}={})=>({
        type:'INCREMENT',
        incrementBy
});
const decrementcount=({decrementBy=1}={})=>({
    type:'DECREMENT',
    decrementBy
});
const resetcount=()=>({
    type:'RESET'
});
const setcount=()=>({
    type:'SET'
});
const countReducer=(state={count:0},action)=>{
    switch(action.type){
        case 'INCREMENT':
            return{
                count:state.count +action.incrementBy
            };
            case 'DECREMENT':
                return{
                    count:state.count-action.decrementBy
            };
            case 'RESET':
                return{
                    count:0
                };
                case 'SET':
                return{
                    count:100
                };
            default:
                return state;
    }};

const store= createStore(countReducer);
store.subscribe(()=>{
    console.log(store.getState());
});

store.dispatch(incrementcount({incrementBy:5}));
store.dispatch(incrementcount( ));
store.dispatch(resetcount());
store.dispatch(setcount());
store.dispatch(decrementcount({decrementBy:10}));
store.dispatch(decrementcount());


