import React from 'react';
import { Switch, Route } from 'react-router-dom';
import RequireAuth from 'api-client/require-auth';

import ProductList from 'pages/ProductList/ProductList';
import ProductDetails from 'pages/ProductDetails/ProductDetails';
import AuthPage from 'pages/AuthPage/AuthPage';
import Profile from 'pages/Profile/Profile';
import Default from 'pages/Default/Default';
import AddNewPost from 'pages/AddNewPost/AddNewPost';

const Routes = () => (
  <Switch>
    <Route exact path='/' component={RequireAuth(ProductList)} />
    <Route path='/details/:productId' component={RequireAuth(ProductDetails)} />
    <Route exact path='/signin' component={AuthPage} />
    <Route exact path='/signup' component={AuthPage} />
    <Route exact path='/add' component={RequireAuth(AddNewPost)} />
    <Route exact path='/profile' component={RequireAuth(Profile)} />
    <Route component={Default} />
  </Switch>
);

export default Routes;
