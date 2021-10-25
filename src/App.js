import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import TitleHeader from './Components/TitleHeader';
import AllReviews from './Components/AllReviews';
import NavBar from './Components/NavBar';
import ReviewsByCategory from './Components/ReviewsByCategory';
import SingleReview from './Components/SingleReview';
import Login from './Components/Login';
import {UserContext} from './Contexts/UserContext';
import { useState } from 'react';

function App() {

  const [user, setUser] = useState('jessjelly');

  return (
  <UserContext.Provider value={{user, setUser}}>
    <div className="App">
      <BrowserRouter>
        <div className="heading-and-nav">
          <TitleHeader />
          <NavBar/>
        </div>
        <Switch>
          <Route exact path="/reviews">
          <AllReviews/>
          </Route>
          <Route exact path="/categories/:category">
            <ReviewsByCategory />
          </Route>
          <Route exact path="/reviews/:review_id">
            <SingleReview/>
          </Route>
          <Route exact path="/">
            <Login/>
          </Route>
          <Route>
            <h1>404- Page not found</h1>
          </Route>
        </Switch>
      </BrowserRouter>
        </div>
      </UserContext.Provider>
  );
}

export default App;
