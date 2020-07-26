import React from 'react';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import AddExpensePage from '../components/AddExpense.js';
import Header from '../components/Header.js';
import EditExpensePage from '../components/EditExpense.js';
import ExpenseDashboardPage from '../components/ExpenseDashboard.js';
import HelpPage from '../components/Help.js';
import NotFoundPage from '../components/NotFound.js';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
            <Route path="/" component={ExpenseDashboardPage} exact={true}/>
            <Route path="/create" component={AddExpensePage} />
            <Route path="/help" component={HelpPage} />
            <Route path="/edit" component={EditExpensePage} exact={true}/>
            <Route component={NotFoundPage}/>
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;