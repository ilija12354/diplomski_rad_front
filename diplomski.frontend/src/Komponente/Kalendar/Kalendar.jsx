import {getMesec} from './Util.js'
import React,{useState,useContext,useEffect} from 'react'
import KalendarHeader from './KalendarHeader'
import Mesec from './Mesec'
import KalendarKontekst from './context/KalendarKontekst.jsx'
import Sidebar from './Sidebar.jsx'
import EventModal from './EventModal.jsx'
import DiplomskiRadServis from '../../servisi/DiplomskiRadServis.jsx'
import dayjs from 'dayjs'

export default function Kalendar() {

 const [trenutniMesec,setTrenutniMesec]=useState(getMesec())
 const {indeksMeseca,prikazatiEventModal,setDatumBaza,datumBaza,dispatchSacuvaniDogadjaji,sacuvaniDogadjaji}=useContext(KalendarKontekst)

 useEffect(()=>{
  setTrenutniMesec(getMesec(indeksMeseca))
 },[indeksMeseca])



  return (
   <React.Fragment>
    {prikazatiEventModal && <EventModal />}
   <div className='h-screen flex flex-col'>
   <KalendarHeader />
   <div className='flex flex-1'>
     <Sidebar />
     <Mesec mesec={trenutniMesec}/>
   </div>
   </div>
 </React.Fragment>
  )
}
