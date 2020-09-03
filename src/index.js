import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Hello(props){
  console.log(props);
  return (
    <div>
      <h1>Welcome to {props.library}!</h1>
      <p>{props.message}.</p>
      <p>{props.number} Props Total</p>
    </div>
  )
}

ReactDOM.render(
    <Hello 
    library="Next.js" 
    message="Have fun!"
    number={3}
    />, // <Hello/> self closing tags
    document.getElementById('root')
  );

