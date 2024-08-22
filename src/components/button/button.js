import React from 'react';
import '../button/button.css';

const Button = (props) => {
    // Função que será chamada ao clicar no botão
    const handleClick = () => {
        alert(`A label desse botão é ${props.label}`);
    };

    return (
        <button className='btn' onClick={handleClick}>
            {props.label}
        </button>
    );
};

// Definição dos valores padrão para as props
Button.defaultProps = {
    label: 'Clique aqui'
};

export default Button;
