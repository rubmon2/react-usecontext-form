import React, { useState } from 'react'

export const UseForm = (state={}) => {

    const[formState,setFormState]=useState(state)

    
    const onInputChange=({target})=>{
    const{name,value}=target
    setFormState({
        ...formState,
        [name]:value
    })
    }


  return {
    ...formState,
    formState,
    onInputChange
  }
}
