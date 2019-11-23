import React from "react";
import "./w3.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import PageList from "./Components/Pages/PageList";
import Home from "../src/Components/Pages/HomeScreen";


export default () => {
  return (

    <Router>
      <div className="w3-sidebar w3-bar-block w3-blue-grey" style={{ "width": "15%" }}>
        <Link to="/" className="w3-bar-item w3-button w3-blue-grey">Home</Link>
        {PageList.map((Page, index) => (<Link to={"/page/" + Page.props.title.replace(/\s/g, "") + "-pageid" + index} className="w3-bar-item w3-button w3-blue-grey"> {Page.props.title}</Link>))}

      </div>

      <Switch>
        <Route path="/page/:id" children={<Child />} />
        <Route path="/" component={Home}/>
      </Switch>
    </Router>
  );
}
function Child() {
  // We can use the `useParams` hook here to access
  // the dynamic pieces of the URL.
  let { id } = useParams();
  id = id.split("-pageid")[1]

  return (
PageList[id]
  );
}

{/* <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route> */}
{}