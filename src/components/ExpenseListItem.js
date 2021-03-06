import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {removeExpense} from '../actions/expenses';



     const ExpenseListItem=({id,dispatch, description,amount,createdAt})=>(
            <div>
            <Link to={`/edit/${id}`}>
            <h3>{description}</h3>
            </Link>
            <p>{amount} -{createdAt}</p>
            <button onClick={()=>{
                
                    dispatch(removeExpense({id}))
                
            }}>Remove</button>
            </div>
        );
            

export default connect()(ExpenseListItem);

//can be used like this
// const ExpenseListItem=(props)=>(
//     <div>
//     <h3>{props.description}</h3>
//     <p>{props.amount} -{props.createdAt}</p>
//     </div>
// );
