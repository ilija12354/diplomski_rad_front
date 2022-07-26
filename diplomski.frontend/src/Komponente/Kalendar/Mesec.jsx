import React,{useState} from 'react'
import Dan from './Dan.jsx'

export default function 
({mesec}) {

 const [danSrbija,setDanSrbija]=useState(["Ponedeljak","Utorak","Sreda","Četvrtak","Petak","Subota","Nedelja"])

  return (
    <div className='flex-1 grid grid-cols-7 grid-rows-5'>
     {mesec.map((red,i)=>(
      <React.Fragment key={i}>
        
       {red.map((dan,idx)=>(
        <Dan dan={dan} key={idx} indexReda={i} brojac={idx}/>
       ))}
      </React.Fragment>
     ))}
    </div>
  )
}
