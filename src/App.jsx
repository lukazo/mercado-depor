import {BrowserRouter, Switch, Route} from 'react-router-dom';

import './styles/reset.css';
import NavBar from './components/Header/NavBar/NavBar';
import Home from './containers/Home/Home';
import Category from './containers/Category/Category';
import Detail from './containers/Detail/index';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';



function App() {
  

  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/category/:category_id?">
          <Category />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/checkout">
          <Checkout />
        </Route>
        <Route path="/detail/:id">
          <Detail />
        </Route>
      </Switch>    
    </BrowserRouter>    
  );
}

export default App;
