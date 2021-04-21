import logo from './logo.svg';
import React, {useContext} from 'react'
import {Switch, BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css';
import TodosList from "./components/TodosList";
import AddTodo from "./components/AddTodo";
import Header from "./components/Header";
import TodoContextProvider from "./components/TodoContextProvider";

function App() {
  return (
      <TodoContextProvider>
          <main>
              <Router>
                  <Header/>
                  <div className='body'>
                      <Switch>
                          <Route path="/" exact>
                              <TodosList/>
                          </Route>

                          <Route path="/create-todo">
                              <AddTodo/>
                          </Route>
                      </Switch>
                  </div>
              </Router>
          </main>
      </TodoContextProvider>

  );
}

export default App;
