import React,{useEffect, useReducer, useState} from 'react'
import KalendarKontekst from './KalendarKontekst'
import dayjs from 'dayjs'
import DiplomskiRadServis from '../../../servisi/DiplomskiRadServis';

// const initialState = {
//   loading: true,
//   error: '',
//   diplomskiRadovi: {}
// }

function sacuvaniDogadjajiReducer(state, {type,payload}){
  switch(type){
    case "push":
      return [...state, payload];
    case "update":
      return state.map(evt=>evt.id === payload.id ? payload : evt)
    case "delete":
      return state.filter(evt=>evt.id !== payload.id)
    default:
      throw new Error();
  }
}



export default function KalendarKontekstWrapper(props) {
 const[indeksMeseca,setIndeksMeseca]=useState(dayjs().month())
 const[maliKalendarMesec,setMaliKalendarMesec]=useState(null)
 const[selektovaniDan,setSelektovaniDan]=useState(null)
 const[prikazatiEventModal,setPrikazatiEventModal]=useState(false)
 const[datumBaza,setDatumBaza]=useState(null) 
 const[sacuvaniDogadjaji,dispatchSacuvaniDogadjaji]=useReducer(sacuvaniDogadjajiReducer, [])
 const[selektovaniDogadjaj,setSelektovaniDogadjaj]=useState(null)
 const[loading, setLoading]=useState(true)
 const[error,setError]=useState('') 
 

//  useEffect(() => {
//   localStorage.setItem('savedEvents', JSON.stringify(sacuvaniDogadjaji))
//  },[sacuvaniDogadjaji])

// function initDogadjaji(){
//   // const skladisteDogadjaji=localStorage.getItem('savedEvents')
//   // const parsedEvents = skladisteDogadjaji ? JSON.parse(skladisteDogadjaji) : [] 
//   console.log(datumBaza)
//   return datumBaza
// }

 useEffect(()=>{
  if(maliKalendarMesec!==null){
    setIndeksMeseca(maliKalendarMesec)
  }
 },[maliKalendarMesec])

 useEffect(()=>{
  DiplomskiRadServis.getDiplomski().then((res)=>{
    setDatumBaza(res.data)
  })
  .catch(error => {
    setLoading(false)
    setDatumBaza({})
    setError("Greska!")
  })
 },[])


  return (
    <div>
     <KalendarKontekst.Provider value={{
       indeksMeseca,
      setIndeksMeseca,
      maliKalendarMesec,
      setMaliKalendarMesec,
      selektovaniDan,
      setSelektovaniDan,
      prikazatiEventModal,
      setPrikazatiEventModal,
      dispatchSacuvaniDogadjaji,
      sacuvaniDogadjaji,
      selektovaniDogadjaj,
      setSelektovaniDogadjaj,
      datumBaza,
      setDatumBaza
      }}>
      {props.children}
     </KalendarKontekst.Provider>
    </div>
  )
}
