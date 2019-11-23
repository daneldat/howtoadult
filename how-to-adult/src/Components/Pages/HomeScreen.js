//Make a homepage
import React from 'react';
import "../../w3.css";

export default class Homepage extends React.Component {
  render() {
    return (
      <div className='w3-container w3-blue-grey' style={{ height: "100vh" }}>
        <div className='w3-container w3-bar-block w3-center' style={{ "margin-left": "15%","margin-top":"15%" }}>
          <h2 className="w3-xxxlarge">How To Adult</h2>
          <h3>A helpful guide to how to do adult human things.</h3>
          <p className=" w3-container w3-center" style={{ "margin-top":"10%" }}>
             Are you an adult who doesn't know how to adult? You've made it to the right place!
             As fellow pseudo-adults, our researchers have scoured far and wide to identify key problems that we face in our daily lives, and consulted some adultier adults to give us some answers.
             Just click on one of the links on the sidebar to learn how to adult, and if you have any questions or ideas to add to our database of adulting tips, let us know down below
       </p>
        </div>
      </div>
    )
  }
}

