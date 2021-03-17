import React from 'react';

const Mensaje = ({ name, color }) => {
    return (
        <div>
            <h1 style={{ color: color}}>Hola {name}</h1>
        </div>
    )
}

export default Mensaje;
