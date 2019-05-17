import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AuthRequired from 'hoc/AuthRequired';
import NoAuthRequired from 'hoc/NoAuthRequired';

import ProductList from 'pages/ProductList/ProductList';
import ProductDetails from 'pages/ProductDetails/ProductDetails';
import AuthPage from 'pages/AuthPage/AuthPage';
import ProfilePage from 'pages/ProfilePage/ProfilePage';
import Default from 'pages/Default/Default';
import AddNewPost from 'pages/AddNewPost/AddNewPost';

const Routes = () => (
  <Switch>
    <Route exact path='/' component={AuthRequired(ProductList)} />
    <Route exact path='/signin' component={NoAuthRequired(AuthPage)} />
    <Route exact path='/signup' component={NoAuthRequired(AuthPage)} />
    <Route
      path='/details/:productId'
      component={AuthRequired(ProductDetails)}
    />
    <Route exact path='/add' component={AuthRequired(AddNewPost)} />
    <Route exact path='/profile' component={AuthRequired(ProfilePage)} />
    <Route component={Default} />
  </Switch>
);

export default Routes;
