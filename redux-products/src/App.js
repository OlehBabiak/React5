import './App.css';
import {Header, Products, ProductDetails} from './components/index'
import {Switch, Route, Redirect, BrowserRouter as Router} from 'react-router-dom'


function App() {
  return (
      <Router>
          <div className="App">
              <Header/>
              <Switch>
                  <Route path='/' exact>
                      <Redirect to='/products'/>
                  </Route>
                  <Route path='/products' exact>
                      <Products/>
                  </Route>
                  <Route path='/products/:id'>
                      <ProductDetails/>
                  </Route>
                  <Route path='/cart'>
                      <div>cart</div>
                  </Route>
                  <Route path='/wishlist'>
                      <div>wishlist</div>
                  </Route>
              </Switch>
          </div>
      </Router>
  );
}

export default App;
