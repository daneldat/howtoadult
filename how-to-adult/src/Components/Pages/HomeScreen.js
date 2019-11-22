//Make a homepage
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import "../../w3.css";
import List from './List';
import PageList from "./PageList";
import YouTube from 'react-youtube-embed';
import RandomQuotes from './RandomQuotes';

class Quote extends Component {
  render() {
    const { index } = this.props;

    return(     
    <div class="w3-panel w3-leftbar w3-light-grey">
    <p class="w3-xlarge w3-serif">
    <i>{RandomQuotes[index][0]}</i></p>
    <p>{RandomQuotes[index][1]}</p>
    </div>
    );
  }
}

class QuoteBank extends Component {
  render() {
    const {color} = this.props;

    return (
      <div style={{ background: color }}>
      
        {<Quote index={Math.floor(Math.random() * 10)} /> }
      </div>
    );
  }
}

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      workingList: []
    }

    this.state.list= PageList.map((Page, index) => (<li><Link to={"/page/" + Page.props.title.replace(/\s/g, "") + "-pageid" + index} className="w3-bar-item w3-button w3-grey"> {Page.props.title}</Link></li>))
    this.state.workingList = this.state.list.map(link => ({link, text: link.props.children.props.children[1]}))
  }
  render() {
    return (

  <div classname="HomeScreen" style={{ "margin-left": "15%" }}>

    {/* Header */}
    <header className="w3-container w3-red w3-center" >
      <h2 className="w3-xxxlarge">How To Adult</h2>
      <h3>A helpful guide to how to do adult human things.</h3>
    </header>

    {/* Content */}
  
  <QuoteBank></QuoteBank>

    <p className=" w3-container w3-center w3-margin-left">
      Are you an adult who doesn't know how to adult? You've made it to the right place!
      As fellow pseudo-adults, our researchers have scoured far and wide to identify key problems that we face in our daily lives, and consulted some adultier adults to give us some answers.
      Just click on one of the links on the sidebar to learn how to adult, and if you have any questions or ideas to add to our database of adulting tips, let us know down below
   </p>


   <List items={this.state.workingList} />

  
   </div>
    );
  }
}

 
export default Home;
    
