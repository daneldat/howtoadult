import React from "react";
import "./App.css";
import "./w3.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import PageList from "./Components/Pages/PageList";
import Home from "./Components/Pages/HomeScreen";
import Page from "./Components/Pages/Page";



export default () => {
  return (
    //make a navigation dropdown

    <Router>
     <div style={{ display: 'flex' }}>
        <div style={{
          padding: '10px',
          width: '40%',
          background: '#f0f0f0'
        }}>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
        <li><Link to="/">Home</Link></li>
        {PageList.map((Page, index) => (<li><Link to= {"/page/"+Page.props.title.replace(/\s/g,"") + "-pageid" +index}>How to {Page.props.title}</Link></li>))}
        </ul>
        </div>
      </div>
        {/* for every page in PageList, make a Link to /page/{index} */}
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