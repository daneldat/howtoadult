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

    <Router>
        <div className ="w3-sidebar w3-bar-block w3-grey" style={{"width":"15%"}}>
        <Link to="/" className="w3-bar-item w3-button w3-grey">Home</Link>
        <div className="w3-bar-item w3-grey">How Do I</div>
        <Link to="/page/how-to-vote" className="w3-bar-item w3-button">Vote?</Link>
        </div>
       
     
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