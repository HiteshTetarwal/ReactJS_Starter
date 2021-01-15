import React from 'react';
import logo from './LCO-Logo-White.png';
import "./App.css";



class App extends React.Component{

  render(){
    return(
      <div>
        <img src={logo} width="100" height="100" className="logo"/>
        <h1 className="app-title">React ToDo App</h1>
        <div className="container">
          Add an Item....
          <br/>
          <input type="text" className="input-text" placeholder="Write a ToDo"></input>
          <button className="add-btn">Add Button</button>
          <div className="list">
            <ul>
              <li>
                <input type="checkbox" name="" id=""/>
                Record youtube videos
                <button className="btn">Delete</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }

}

export default App