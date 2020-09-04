import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Lake({name}){
  return (
    <div>
      <h1>Visit {name}!</h1>
    </div>
  );
}

function SkiResort({name}) {
  return (
    <div>
      <h1>Visit {name} </h1>
    </div>
  );
}

function App(props){
  return(
    <div>
      {(props.season === "summer") ? (<Lake name="Jenney Lake"/>) : (props.season === "winter") ? (<SkiResort name = "Jackson Hole Mountain Resort"/>):(<h1>Come back in the winter or summer!</h1>)}
    </div>
  );
  
}
ReactDOM.render(
    <App season="fall"/>,
    document.getElementById('root')
  );

