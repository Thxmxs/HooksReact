import React, { memo } from 'react'

export const Small = memo(({value}) => {


  console.log('se disparo')

    return (
    <small>{value}</small>
  )
  
})
