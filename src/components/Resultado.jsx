import React from 'react'
import PropTypes from 'prop-types'

const  Resultado=({operacion,calculo}) =>{
    return (
        <div className="shadow p-3 mb-5 bg-body rounded">
            <span className="display-5 text-info bold">{operacion} :  {calculo}</span>
        </div>
    );
};

Resultado.propTypes = {
    operacion:PropTypes.string,
    calculos:PropTypes.number,
}

export default Resultado

