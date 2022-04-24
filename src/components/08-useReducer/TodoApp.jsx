import React, { useEffect, useReducer } from 'react'
import './styles.css'
import { todoReducer } from './todoReducer';
import {useForm} from '../../hooks/useForm'


const init = () => { 

    //returna los items de todos dejandolo como initialState en el use reducer
    //si esta vacio regresara un array vacio
    return JSON.parse(localStorage.getItem('todos')) || [];
    // return [{
    //     id:new Date().getTime(),
    //     desc:'aprender React',
    //     done:false
    // }]

 }

export const TodoApp = () => {

    const [todos,dispatch] = useReducer(todoReducer, [], init);
    const [values,handleInputChange,reset] = useForm({description:''})
   
    useEffect(() => {

        localStorage.setItem('todos', JSON.stringify(todos))

    }, [todos])

    const handleDelete = (todoID) => { 
        console.log(todoID)
        const deleteTodo={
            id:todoID
        }
        const action={
            type:'delete',
            payload:deleteTodo
        }
        dispatch(action);
     }

     const handleToggle = (todoID) => { 
        const toggleTodo={
            id:todoID
        }
        const action={
            type:'toggle',
            payload:toggleTodo
        }
        dispatch(action)
      }
    

    const handleSubmit = (e) => { 
        e.preventDefault();
        if(values.description.trim().length <= 1){
            return;
        }
        const newTodo ={
            id:new Date().getTime(),
            desc:values.description,
            done:false
        }
        const action = {
            type:'add',
            payload:newTodo
        }

        dispatch(action);
        reset();
     }

  return (
    <div>
        <h1>TodoApp ({todos.length})</h1>
        <hr />

    <div className='row'>
        <div className='col-7'>
        <ul className='list-group list-group-flush'>
        {
            todos.map((todo,i) => 
                 
                <li
                    key={todo.id}
                    className ="list-group-item"
                >
                    <p className={`${(todo.done) ? 'complete' : ''}`}
                        onClick={() => { handleToggle(todo.id) }}
                    >{i+1}.{todo.desc}</p>
                <button
                className='btn btn-danger'
                onClick={() =>  handleDelete(todo.id) }
                >
                    Borrar
                </button>
                </li>
             )
        }
    </ul>
        </div>
        <div className='col-5'>
            <h4>Agregar TODO</h4>
            <hr />

            <form onSubmit={handleSubmit}>
                <input 
                type="text" 
                value={values.description} 
                name="description" 
                placeholder='aprender' 
                autoComplete='off' 
                className='form-control' 
                onChange={handleInputChange}/>
                <button
                    type='submit'
                    className='btn btn-outline-primary mt-1 btn-block'
                >
                    Agregar
                </button>
            </form>

        </div>
    </div>

    </div>
  )
}
