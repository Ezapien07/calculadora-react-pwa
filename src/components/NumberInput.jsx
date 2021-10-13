import React,{useState} from 'react'
import PropTypes from 'prop-types'
import Resultado from './Resultado';

const NumberInput = () => {
    const [numeros,setNumeros]=useState({
        numero1:0,
        numero2:0,
    })
    //desustrurar el estado
    const {numero1,numero2} =numeros;

    const hadleChange=(e)=>{
        setNumeros({
            ...numeros,
            //hacecemos una copia del estado.
            //asignamos un nuevo valor 
            [e.target.name]: parseFloat(e.target.value),
        })
    }

    //Definimos las funciones para las operaciones basicas
    const suma=()=>numero1+numero2;
    const resta=()=>numero1-numero2;
    const multi=()=>numero1*numero2;
    const divi=()=>numero1/numero2;

    return (
        <>
        <label htmlFor="" className="mx-2 h4">Numero 1</label>
        
        <input type="number" className="form-control-lg" name="numero1" value={numero1} onChange={hadleChange} />
        
        <label htmlFor="" className="mx-2 h4">Numero 2</label>
        <input type="number" className="form-control-lg" name="numero2" value={numero2} onChange={hadleChange} />
        <br />

        <Resultado operacion="Suma" calculo={suma()}/>
            <br />
            <Resultado operacion="Resta" calculo={resta()}/>
            <br />
            <Resultado operacion="Multiplicación" calculo={multi()}/>
            <br />
            <Resultado operacion="División" calculo={divi()}/>
            <br />
        </>
    )
}

NumberInput.propTypes = {

}

export default NumberInput
