import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import RediectPage from '../pages/RedirectPage';
import StatsPage from '../pages/StatsPage';
import NotFoundPage from '../pages/NotFoundPage';

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={HomePage} exact />
                <Route path="/:code" component={RediectPage} exact />
                <Route path="/:code/stats" component={StatsPage} exact />
                <Route path="*" component={NotFoundPage} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;