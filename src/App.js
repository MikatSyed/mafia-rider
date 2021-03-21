
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Component/Home/Home';
import NoMatch from './NoMatch/NoMatch';
import About from './Component/About/About';
import { createContext, useState } from 'react';
import LoginForm from './LoginForm/LoginForm';
import PrivateRoute from './Component/PrivateRoute/PrivateRoute';
import Destination from './Component/Destination/Destination';
import Header from './Component/Header/Header';




export const UserContext = createContext();

function App() {
  const [loggedInUser,setLoggedInUser]= useState({});
 
  return (
  
    <UserContext.Provider value={[loggedInUser,setLoggedInUser]}>
      <p>User:{loggedInUser.name}</p>

    <Router>
    <Header/>
      <Switch>

      <Route  exact path="/home">
          <Home/>
           </Route>

        <Route  path="/about">
         <About/>
           </Route>

           <Route  path="/login">
          <LoginForm/>
           </Route>
 
        <PrivateRoute path="/destination">
          <Destination/>
        </PrivateRoute>
          

           <Route  path="/">
          <Home/>
           </Route>


           <Route path="*">
          <NoMatch/>
           </Route>


      </Switch>
    </Router>
    </UserContext.Provider>

  );
}

export default App;
