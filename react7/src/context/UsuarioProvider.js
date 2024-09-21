import React from 'react'
import { UsuarioContext } from './UsuarioContext'
import { useState } from 'react';


export const UsuarioProvider = ({children}) => {

    // const usuario={
    //     nombre:"ruben montani",
    //     ciudad:"bs.as",
    //     ocupacion:"programacion",
    //     estadoCivil:"concubinato"
    // }

    const[usuario,setUsuario]=useState({})


  return (
    <UsuarioContext.Provider value={{usuario,setUsuario}}>
        {children}
    </UsuarioContext.Provider>
  )
}
