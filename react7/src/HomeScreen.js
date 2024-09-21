import React, { useContext } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { UsuarioContext } from './context/UsuarioContext';
import { useNavigate } from 'react-router-dom';


export const HomeScreen = () => {
//contexto
 const{usuario}=useContext(UsuarioContext)

//navigate
const navigate=useNavigate()

  return (
    <div className='texto-color'>
<h1 className='titulo-home'> Titulo de Home, H1</h1>
<div className='contenedor-tabla'>
<table class="table">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Ciudad</th>
      <th scope="col">Ocupacion</th>
      <th scope="col">Estado Civil</th>
    </tr>
  </thead>
  <tbody>
      <tr>
        <th scope="row">{usuario.nombre}</th>
        <td>{usuario.ciudad}</td>
        <td>{usuario.ocupacion}</td>
        <td>{usuario.estadoCivil}</td>
      </tr>
  </tbody>
</table>
<button type="submit" className="btn btn-primary" onClick={()=>navigate("/login")}>Agregar usuario</button>

</div>

    </div>
  )
}
