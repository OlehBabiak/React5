import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from "./components/Home";
import Posts from "./components/Posts/Posts";
import Albums from "./components/Albums/Albums";
import Comments from "./components/Comments/Comments";
import Photos from "./components/Photos/Photos";
import Todos from "./components/Todos/Todos";
import Users from "./components/Users/Users";

const Routes = () => {
    return (
        <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/posts" component={Posts}/>
            <Route path="/albums" component={Albums}/>
            <Route path="/comments" component={Comments}/>
            <Route path="/photos" component={Photos}/>
            <Route path="/todos" component={Todos}/>
            <Route path="/users" component={Users}/>
        </Switch>
    );
};


export default Routes;
