import React, { useEffect, useState } from 'react'
import './effects.css'
import { Mesage } from './Mesage';

export const SimpleForm = () => {
    const [formState, setFormState] = useState({
        name:'',
        email:''
    })
    const {name,email} = formState;

    useEffect(() => {
        
    }, [])


    const handleInputChange = (e) => { 

        setFormState({
            ...formState,
            [e.target.name]:e.target.value

        })
     }
    
    return (
    <div>
        <h1>useEffect</h1>
        <hr />

        <div className='form-group'>
            <input 
            type="text"
            name='name'
            className='form-control'
            placeholder='tu nombre'
            autoComplete='off'
            value={name} 
            onChange={handleInputChange}
            />
        </div>

        <div className='form-group'>
            <input 
            type="text"
            name='email'
            className='form-control'
            placeholder='email@example.com'
            autoComplete='off'
            value={email} 
            onChange={handleInputChange}
            />
        </div>

        {(name ==='123') && <Mesage/>}

    </div>
    )
}
