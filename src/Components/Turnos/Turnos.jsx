import React from 'react';
import './Turnos.css';
import mujer from '../imagen/img/mujer.jpg';
import hombre from '../imagen/img/hombre.jpg';
import { AiOutlineLeft} from 'react-icons/ai';
import { AiOutlineRight}from 'react-icons/ai';
import {AiOutlineClose} from 'react-icons/ai';


const Turnos = () => {
  return (
    <div className='Container-Turno'>

        <h3 className='Registra'>Registra tu turno
            <div className='button-cierre'><AiOutlineClose /></div>
            
        </h3>

        <div className='simbol'>
            <div className='simbol-mayor'> <AiOutlineLeft /> </div> 
            <p className='Fecha'>  Jul. 19  </p>
            <div className='simbol-menor'> <AiOutlineRight /> </div>
        </div>

        <h5>Hoy</h5>

        <div className='Odontologia'>
            <h3 className='Odontologia-Name'>Odontologia</h3>
            <p className='Hora'>09.30 · 60 min.</p>
            <div className='Especialista'>
                <img src={mujer}></img>
                <p className='Nombre-Especialista'>Dra. Emilia Diaz</p>
            </div>
            <h2>Pedir Turno</h2>
        </div>

        <div className='Odontologia'>
            <h3 className='Odontologia-Name'>Odontologia</h3>
            <p className='Hora'>10.30 · 60 min.</p>
            <div className='Especialista'>
                <img src={hombre}></img>
                <p className='Nombre-Especialista'>Dr. Erick Nest</p>
            </div>
            <h2>Pedir Turno</h2>
        </div>
    </div>

    
  );
};

export default Turnos;