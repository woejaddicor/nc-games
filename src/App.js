import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import TitleHeader from './Components/TitleHeader';
import AllReviews from './Components/AllReviews';
import NavBar from './Components/NavBar';
import ReviewsByCategory from './Components/ReviewsByCategory';
import SingleReview from './Components/SingleReview';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <div className="heading-and-nav">
          <TitleHeader/>
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
          <Route>
            <h1>404- Page not found</h1>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
