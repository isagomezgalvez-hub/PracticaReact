import React, { useEffect } from 'react';


import { LoginPage, PrivateRoute} from './components/auth';
import { NewProduct, ProductDetails, ProductPage } from './components/products'
import { Switch, Route, Redirect, Router } from 'react-router-dom';
import { Component404 } from './components/shared';
import { AuthContextProvider} from './components/auth/context'
import T from 'prop-types';
import FilterProduct from './components/filter/FilterProduct';

import './App.css';

function App(isInitiallyLogged) {
 
 const [isLogged, setIsLogged] = React.useState(isInitiallyLogged);
  
  const handleLogin = () => setIsLogged(true);
  const handleLogout = () => setIsLogged(false);

  const value = {
    isLogged,
    onLogout: handleLogout,
    onLogin: handleLogin,

  }
  return (
    
   <div className="App">
     <AuthContextProvider value={value}>
    <Switch>
          <PrivateRoute path="/advert/new" component={NewProduct} />
          
         <Route path="/filter" component={FilterProduct} /> 
 
          <PrivateRoute path="/advert/:id">
            {({match}) =>(
            <ProductDetails 
              match={match}
            />)}
          </PrivateRoute >

        <PrivateRoute path="/adverts" component={ProductPage} />

        <Route path="/login" component={LoginPage}/>
        
          <PrivateRoute  path="/" >
        
           {({history})  => (
              <ProductPage
              history={history} />
          )} 
          </PrivateRoute  >

          <Route  path="/404" component={Component404} />

        <Route>
          <Redirect to="/404" />
        </Route> 
          
       
         
        
    </Switch>
      </AuthContextProvider>
     
    </div> 
  );
} 
 
App.prototype = {
  isInitiallyLogged :T.bool.isRequired,
} 

export default App;
