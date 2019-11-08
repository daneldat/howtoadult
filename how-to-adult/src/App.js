import React from "react";
import "./App.css";
import "./w3.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import PageList from "./Components/Pages/PageList";
import Home from "./Components/Pages/HomeScreen";


export default () => {
  return (
    //make a navigation dropdown
//     <div class="w3-sidebar w3-bar-block" style="width:25%">
//   <a href="#" class="w3-bar-item w3-button">Link 1</a>
//   <a href="#" class="w3-bar-item w3-button">Link 2</a>
//   <a href="#" class="w3-bar-item w3-button">Link 3</a>
// </div>

    <Router>
        <Link to="/">Home</Link>
        <Link to="/page/how-to-vote">How To Vote</Link>
        {/* for every page in PageList, make a Link to /page/{index} */}
      <Switch>
        <Route path="/:id">
          {PageList[0]}
        </Route>
        <Route path="/" component={Home}/>
      </Switch>
    </Router>
  );
}
{/* <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route> */}
{}