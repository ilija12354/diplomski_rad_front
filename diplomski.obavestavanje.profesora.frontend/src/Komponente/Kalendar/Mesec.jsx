import React from 'react'
import Dan from './Dan.jsx'

export default function 
({mesec}) {
  return (
    <div className='flex-1 grid grid-cols-7 grid-rows-5'>
     {mesec.map((red,i)=>(
      <React.Fragment key={i}>
       {red.map((dan,idx)=>(
        <Dan dan={dan} key={idx} indexReda={i}/>
       ))}
      </React.Fragment>
     ))}
    </div>
  )
}
