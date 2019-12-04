import React, { Component } from 'react';
import "../../w3.css";
import RandomQuotes from './RandomQuotes';

class Quote extends Component {
  render() {
    const { index } = this.props;

    return(     
    <div className="w3-panel w3-leftbar w3-light-grey">
    <p className="w3-xlarge w3-serif">
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


export default class HomeScreen extends React.Component {  
  render() {
    return (
      <div className='w3-container w3-blue-grey' style={{ "height": "100vh", "overflow":"auto"}}>
        <div className='w3-container w3-bar-block w3-center' style={{ "marginLeft": "15%","marginTop":"5%" }}>
          <h2 className="w3-xxxlarge">How To Adult</h2>
          <h3>A helpful guide to how to do adult human things.</h3>
          <p className=" w3-container w3-center" style={{ "marginTop":"5%" }}>
             Are you an adult who doesn't know how to adult? You've made it to the right place!
             As fellow pseudo-adults, our researchers have scoured far and wide to identify key problems that we face in our daily lives, and consulted some adultier adults to give us some answers.
             Just click on one of the links on the sidebar to learn how to adult, and if you have any questions or ideas to add to our database of adulting tips, let us know down below
       </p>
       <QuoteBank/>
        </div>
      </div>
    )
  }
}

