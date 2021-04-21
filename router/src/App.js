import React from "react";
import {
  Switch,
  Route,
  Redirect,
    NavLink
} from "react-router-dom";
import "./App.css"


const urls = [
  {url: '/' , title: "Home"},
  {url: "/about" , title: "About"},
  {url: "/users" , title: "Users"},
  {url: "/test-route" , title: "Test route"},
]


export default function App() {
  return (
      <div>
        <MenuItems items={urls}/>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about">
            <About />
          </Route>
          < Route path = "/users" component={Users}/>

          {/*<Route path = "/test-route" render = {(args) => {// dвикористовуємо якщо на основі цих аргументів хочемо рендерити одне чи інше і прокидувати пропсами*/}
          {/*console.log(args);*/}
          {/*return <TestRoute/>*/}
          {/*}}/>*/}

          {/* <Route>
            <h1>PAGE NOT FOUND</h1>
          </Route> */}

          <Route>
            <Redirect to='/'/>
          </Route>

        </Switch>
      </div>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}
function TestRoute() {
  return <h2>Test route</h2>;
}

const MenuItems = ({items}) => {

  return(
      <nav>
        <ul>
          {
            items.map((item) => (
                <li key={item.title} >
                  <NavLink exact
                           to={item.url}>
                    {item.title}
                  </NavLink>
                </li>
            ))
          }
        </ul>
      </nav>

  )
}
