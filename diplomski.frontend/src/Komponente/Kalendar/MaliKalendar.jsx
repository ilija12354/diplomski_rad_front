import React, { useContext, useEffect, useState } from 'react'
import { getMesec } from './Util'
import dayjs from 'dayjs'
import KalendarKontekst from './context/KalendarKontekst'

export default function MaliKalendar() {
 const [trenutniMesecIndeks,serTrenutniMesecIndeks]=useState(dayjs().month())
 const [trenutniMesec,setTrenutniMesec]=useState(getMesec())
 const {indeksMeseca,setMaliKalendarMesec,maliKalendarMesec,setSelektovaniDan,selektovaniDan}=useContext(KalendarKontekst)
 const [danSrbija,setDanSrbija]=useState(["Ponedeljak","Utorak","Sreda","Četvrtak","Petak","Subota","Nedelja"])


 useEffect(()=>{
  setTrenutniMesec(getMesec(trenutniMesecIndeks))
 },[trenutniMesecIndeks])

 useEffect(()=>{
  serTrenutniMesecIndeks(trenutniMesecIndeks)
 },[indeksMeseca])



 function handlePrethodniMesec(){
  serTrenutniMesecIndeks(trenutniMesecIndeks-1)
}
function handleSledeciMesec(){
 serTrenutniMesecIndeks(trenutniMesecIndeks+1)
}
function vratiTrenutniDan(dan){
 const format='DD-MM-YY'
 const trenutniDan=dayjs().format(format)
 const izabraniDan=dan.format(format)
 const slkDan=selektovaniDan && selektovaniDan.format(format)
 if(trenutniDan===izabraniDan){
  return 'bg-blue-500 rounded-full text-white'
 }else if(izabraniDan===slkDan){
  return "bg-blue-100 rounded-full text-blue-600 font-bold"
 }else{
  return ''
 }
}

  return (
    <div className='mt-9'>
     <header className='flex justify-between px-5'>
      <p className='text-gray-500 font-bold '>{
       dayjs(new Date(dayjs().year(),trenutniMesecIndeks)).format("MMMM YYYY")
      }</p>
      <div>
      <button onClick={handlePrethodniMesec}>
       <span className='material-icons-outlined cursor-pointer text-gray-600 mx-2'>
        chevron_left
       </span>
     </button>
     <button onClick={handleSledeciMesec}>
       <span className='material-icons-outlined cursor-pointer text-gray-600 mx-2'>
        chevron_right
       </span>
     </button>
      </div>
     </header>
     <div className='grid grid-cols-7 grid-rows-6'>
     {danSrbija.map((dan,i)=>(
      <span key={i} className='text-sm py-1 text-center'>
      {dan.charAt(0)}
     </span>
     ))}
      {trenutniMesec.map((red,i)=>(
       <React.Fragment key={i}>
        {red.map((dan,idx)=>(
         <button key={idx} 
         onClick={()=>{
          setMaliKalendarMesec(trenutniMesecIndeks)
          setSelektovaniDan(dan)
         }}
         className={`py-1 w-full ${vratiTrenutniDan(dan)}`}>
          <span className='text-sm'>{dan.format('D')}</span>
         </button>
        ))}
       </React.Fragment>
      ))}
     </div>
    </div>
  )
}
