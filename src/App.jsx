import React, {Fragment} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Header from 'layouts/header';
import Main from 'layouts/main';
import Ecommerce from 'views/projects/ecommerce';
import Footer from 'layouts/footer';

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import './App.module.scss';

const App = () => {
  return (
    <Fragment>
      <Header/>
      <BrowserRouter>
        <Switch>
          <Route exact path='/profile' component={Main}/>
          <Route path='/profile/ecommerce' component={Ecommerce}/>
        </Switch>
      </BrowserRouter>
      <Footer/>
    </Fragment>
  );
};

export default App;
