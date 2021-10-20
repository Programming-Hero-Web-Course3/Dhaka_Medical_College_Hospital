import {BrowserRouter as Router,Route,Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Contacts from './Components/Contacts/Contacts';
import Details from './Components/Details/Details';
import Faqs from './Components/Faqs/Faqs';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import NotFound from './Components/NotFound/NotFound';
import PrivateRoute from './Components/Registering/PrivateRoute/PrivateRoute';
import Register from './Components/Registering/Register';
import AuthProvider from './contexts/AuthProvider';

function App() {
  return (
    <div className="App">
     <AuthProvider>
     <BrowserRouter>
      <Header></Header>
          <Switch>
              <Route exact path="/">
                <Home></Home>
              </Route>
              <Route path="/home">
                <Home></Home>
              </Route>
              <Route path="/register">
                <Register></Register>
              </Route>
              <PrivateRoute path="/Details/:serviceId">
                <Details></Details>
              </PrivateRoute>
              <Route path="/faqs">
                <Faqs></Faqs>
              </Route>
              <PrivateRoute path="/Contacts">
                <Contacts></Contacts>
              </PrivateRoute>
              <Route path="*">
                <NotFound></NotFound>
              </Route>
          </Switch>
          
      </BrowserRouter>
     </AuthProvider>
    </div>
  );
}

export default App;
