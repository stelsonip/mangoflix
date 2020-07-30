import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import CadastroVideo from './pages/cadastro/Video';
import CadastroCategoria from './pages/cadastro/categoria';
import PageNotFound from './pages/PageNotFound';

// const Pagina404 = () => (<div> <h3> 404 - Página ñ encontrada </h3> </div>)


ReactDOM.render(
  <BrowserRouter>
  <Switch>
    <Route path="/" component={Home} exact />  
    <Route path="/cadastro/video" component={CadastroVideo} />
    <Route path="/cadastro/categoria" component={CadastroCategoria} />
    <Route path="*" component={PageNotFound} />
  </Switch>
  
  </BrowserRouter>,
  document.getElementById('root')
);
