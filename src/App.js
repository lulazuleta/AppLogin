import React from "react";
import {BrowserRouter as Router, Switch, Route}  from 'react-router-dom';
import {inicio} from './components/inicio.jsx';
import {admin}  from './components/admin.jsx';
import {Login} from './components/login.jsx';
import {Menu} from './components/Menu.jsx'

function App() {
  return (
    <div className = "container" >



<Router >

<Menu></Menu>

<Switch >

<Route exact path = "/" component = { inicio } ></Route>

<Route path = "/admin" component = { admin } ></Route>

<Route path = "/login" component = { Login } ></Route>

</Switch >

</Router>

</div>
  );
}

export default App;
