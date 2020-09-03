import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Hello({library,message,number}){
  return (
    <div>
      <h1>Welcome to {library}!</h1>
      <p>{message}</p>
      <p>{number} Props Total</p>
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

