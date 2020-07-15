import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Events from './pages/events';
import Main from './pages/main';
import EventForm from './pages/new_event_form';
import UpdateEventForm from './pages/edit_event_form';


const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/events/all" component={Events} />
            <Route exact path="/events/new" component={EventForm} />
            <Route exact path="/events/:id" component={UpdateEventForm} />
        </Switch>
    </BrowserRouter>
);

export default Routes;

//browserRouter defines that we are only using routes from the browser
//switch  will allow that only one route can be called at the same time