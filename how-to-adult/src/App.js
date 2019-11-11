import React from "react";
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