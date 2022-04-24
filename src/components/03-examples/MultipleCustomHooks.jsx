import React from 'react'
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';
import '../02-useEffect/effects.css'

export const MultipleCustomHooks = () => {
    const {counter,increment}= useCounter(1);
    const url =`https://www.breakingbadapi.com/api/quotes/${counter}`;
    const {data,loading,error} = useFetch(url);
    const { quote, author } = !!data && data[0];

  return (
    <div>
        <h1>Breaking bads quotes</h1>
        <hr />

    {
        loading
        ?
            (
                <div className='alert alert-info text-center'>
                    loading...
                </div>
            )
        :
            (
            <blockquote className='blockquote text-right'>
            <p className='mb-4'>{quote}</p>
            <footer className='blockquote-footer'>{author}</footer>
            </blockquote> 
            )      
        }
        <button className='btn btn-primary' onClick={increment}>Siguiente quote</button>
    </div>
  )
}
