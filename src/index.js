import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Lake(){
  return (
      <h1>Lake!</h1>
  );
}

function SkiResort(){
  return (
      <h1>Ski Resort!</h1>
  );
}

function App(props){
  return(
    <React.Fragment>
      <Lake/>
      <SkiResort/>
    </React.Fragment>
   
  );
  
}
ReactDOM.render(
    <App season="fall"/>,
    document.getElementById('root')
  );

