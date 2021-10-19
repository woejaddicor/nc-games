import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import TitleHeader from './Components/TitleHeader';
import AllReviews from './Components/AllReviews';
import NavBar from './Components/NavBar';

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
          <Route>

          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
