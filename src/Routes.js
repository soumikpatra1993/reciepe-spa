import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './components/app';
import Favourites from './components/containers/Favourites';
import Search from './components/containers/Search';
import CategoryDetail from './components/containers/CategoryDetail'


const Routes = () => {
    return (
        <BrowserRouter >
            <Switch>
                <Route path="/" exact component={App} />
                <Route path="/mylist" exact component={Favourites} />
                <Route path="/search" exact component={Search} />
                <Route path="/:category" exact component={CategoryDetail} />
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;