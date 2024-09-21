import React, { useContext, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { UseForm } from './Hooks/UseForm';
import { UsuarioContext } from './context/UsuarioContext';
import { useNavigate } from 'react-router-dom';

export const LogincScreen = () => {
//navigate
const navigate=useNavigate()

    //estructura estado q vamos a usar
    const state={
        nombre:"",
        ciudad:"",
        ocupacion:"",
        estadoCivil:"",
    }


//hookcustom useform
const{formState,nombre,ciudad,ocupacion,estadoCivil,onInputChange}=UseForm(state)
const{setUsuario}=useContext(UsuarioContext)


const handlSubmit=(event)=>{
    event.preventDefault()
    setUsuario(formState)
    console.log(formState)
  //navigate
    navigate("/")
}

  return (
    <div className='contenedor-login texto-color'>


        <form onSubmit={handlSubmit}>
    <div className="mb-3">
      <label htmlFor="exampleInputEmail1" className="form-label">Nombre</label>
      <input type="text" className="form-control" name="nombre" value={nombre} onChange={onInputChange} />
    </div>
    <div className="mb-3">
      <label htmlFor="exampleInputPassword1" className="form-label">Ciudad</label>
      <input type="text" className="form-control" name="ciudad" value={ciudad} onChange={onInputChange}/>
    </div>
    <div className="mb-3">
      <label htmlFor="exampleInputPassword1" className="form-label">Ocupacion</label>
      <input type="text" className="form-control" name="ocupacion" value={ocupacion} onChange={onInputChange}/>
    </div>
    <div className="mb-3">
      <label htmlFor="exampleInputPassword1" className="form-label">Estado Civil</label>
      <input type="text" className="form-control" name="estadoCivil" value={estadoCivil} onChange={onInputChange}/>
    </div>
    
    <button type="submit" className="btn btn-primary" >Registrarse</button>
  </form>
  </div>
  )
}
