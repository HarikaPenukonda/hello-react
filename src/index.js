import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


ReactDOM.render(
    React.createElement(
      "ul",
      {style: {color:"red"}},
      React.createElement("li",null,"Hot Dogs"),
      React.createElement("li",null,"Hamburgers"),
      React.createElement("li",null,"Pizza"),
      React.createElement("li",null,"Shushi")
      ),
    document.getElementById('root')
  );

