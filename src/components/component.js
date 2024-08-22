import React from 'react';
import '../components/style.css';

const ColoredUppercaseText = (props) =>{
  return (
    <div className="colored-text-container">
        {/* armazenando a cor e o estado do paragrafo */}
      <p className="colored-text" style={{ color: props.color }}>
        {props.text.toUpperCase()}
      </p>
    </div>
  );
}

export default ColoredUppercaseText;