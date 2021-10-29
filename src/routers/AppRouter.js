import React from 'react';
import { BrowserRouter,Route,Switch } from "react-router-dom";
import NotFoundPage from '../components/NotFound';
import HelpPage from '../components/Help';
import EditExpensePage from '../components/EditExpensePage';
import AddExpensePage from '../components/AddExpense';
import ExpensifyDashboardPage from '../components/Dashboard';
import Header from '../components/Header';

 const AppRouter=()=>{
     return(
        <BrowserRouter>
        <div>
        <Header/>
         <Switch>
         <Route path="/" component={ExpensifyDashboardPage} exact/>
         <Route path="/create" component={AddExpensePage} />
         <Route path="/edit/:id" component={EditExpensePage} />
         <Route path="/help" component={HelpPage} />
         <Route  component={NotFoundPage} />
         </Switch>
         </div>
        </BrowserRouter>
     )
    }

export default AppRouter;