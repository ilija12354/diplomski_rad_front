import dayjs from 'dayjs'
import React, { useContext } from 'react'
import Logo from '../Slike/Logo.png'
import KalendarKontekst from './context/KalendarKontekst'
export default function 
() {

  const{indeksMeseca,setIndeksMeseca}=useContext(KalendarKontekst)

  function handlePrethodniMesec(){
    setIndeksMeseca(indeksMeseca-1)
  }
  function handleSledeciMesec(){
    setIndeksMeseca(indeksMeseca+1)
  }
  function handleTrenutniMesec(){
    setIndeksMeseca(indeksMeseca===dayjs().month()
    ?indeksMeseca+Math.random() 
    :dayjs().month())
  }
  return (
    <header className='px-4 py-2 flex items-center'>
     <img src='https://yt3.ggpht.com/ytc/AKedOLRyUwxtIFwO3p9d_2AqA32ebuLOMfOZ4W5Z2bHV=s900-c-k-c0x00ffffff-no-rj' alt='Kalendar' className='mr-2 w-12 h-12' />
     <h1 className='mr-10 text-xl text-gray-500 font-bold'>Evidencija diplomskih radova</h1>
     <button className='border rounded py-2 px-4 mr-5' onClick={handleTrenutniMesec}>Danas</button>
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
     <h2 className='ml-4 text-xl text-gray-500 font-bold'>
       {dayjs(new Date(dayjs().year(),indeksMeseca)).format("MMMM YYYY")}
     </h2>
    </header>
  )
}
