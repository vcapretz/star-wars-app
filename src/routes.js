import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import HomePage from './components/home/HomePage';
import PeoplePage from './components/people/PeoplePage';
import PersonPage from './components/people/PersonPage';
import NewPersonPage from './components/people/NewPersonPage';

export default (
    <Route path='/' component={App}>
        <IndexRoute component={HomePage} />
        <Route path='/people' component={PeoplePage}>
            <Route path='/people/new' component={NewPersonPage} />
            <Route path='/people/:id' component={PersonPage} />
        </Route>
    </Route>
);
