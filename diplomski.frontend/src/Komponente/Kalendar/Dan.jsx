import dayjs from 'dayjs'
import React,{useContext, useEffect, useState} from 'react'
import KalendarKontekst from './context/KalendarKontekst'

export default function Dan({dan,indexReda,brojac}) {
  const danSrbija=["Ponedeljak","Utorak","Sreda","Četvrtak","Petak","Subota","Nedelja"]
  const [danEvent, setDanEvent] = useState([])
  const [pocetakOdbraneEvent, setPocetakOdbraneEvent] = useState([])
  const {setPrikazatiEventModal,setSelektovaniDan,selektovaniDan,sacuvaniDogadjaji, setSelektovaniDogadjaj,datumBaza} = useContext(KalendarKontekst)
  
  // useEffect(() => {
    
  //   if(sacuvaniDogadjaji){
  //   let pom=[];
  //   for(let i=0;i<sacuvaniDogadjaji.length;i++){
  //     pom.push(sacuvaniDogadjaji[i])
  //   }
  //   const events = pom.filter(eve =>  dayjs(eve.datumOdbraneDiplomskogRada).format("DD-MM-YY") === dan.format("DD-MM-YY"));
  //   console.log(events)
  //   setDanEvent(events) 
  //   }
   
  // },[sacuvaniDogadjaji, dan])
  
  useEffect(()=> {
    let niz=[]
    let niz2=[]
    if(datumBaza){
      for(let i=0;i<datumBaza.length;i++){
        if(dayjs(datumBaza[i].datumOdbraneDiplomskogRada).format("DD-MM-YY") === dan.format("DD-MM-YY")){
          niz.push(datumBaza[i])
        }
      }
      for(let i=0;i<datumBaza.length;i++){
        if(dayjs(datumBaza[i].datumPocetkaDiplomskogRada).format("DD-MM-YY") === dan.format("DD-MM-YY")){
          niz2.push(datumBaza[i])
        }
      }
    }
    const convertTime12to24 = (time12h) => {
      let [hours, minutes, modifier] = time12h.split(/\W+/);
    
    
    
      return [hours, minutes];
    };

    niz2 = niz2.sort((a, b) => {
      const [h1, m1] = convertTime12to24(dayjs(a.datumPocetkaDiplomskogRada).format("HH : mm"));
      const [h2, m2] = convertTime12to24(dayjs(b.datumPocetkaDiplomskogRada).format("HH : mm"));
    
      return h1 - h2 || m1 - m2;
    });
    niz = niz.sort((a, b) => {
      const [h1, m1] = convertTime12to24(dayjs(a.datumPocetkaDiplomskogRada).format("HH : mm"));
      const [h2, m2] = convertTime12to24(dayjs(b.datumPocetkaDiplomskogRada).format("HH : mm"));
    
      return h1 - h2 || m1 - m2;
    });
    setPocetakOdbraneEvent(niz2)
    setDanEvent(niz)
  },[datumBaza,dan])
 


  function getDanasnjiDatun(){
    return dan.format("DD-MM-YY") === dayjs().format("DD-MM-YY") ? 'bg-blue-600 text-white rounded-full w-7'
    : ''
  }
  function getBojaPolja(){
    return dan<dayjs() ? 'bg-gray-100' : ''
  }
  function getSelektovaniDan(){
    if(selektovaniDan!=null){
      return dan.format("DD-MM-YY") === selektovaniDan.format("DD-MM-YY") ? "bg-blue-100 rounded-full text-blue-600 font-bold" : ''
    }
    return ''
  }

  // Testiranje rada sa datumom
  // function metoda1(){
  //   if(datumBaza)
  //   console.log( dayjs(datumBaza[1].datumPocetkaDiplomskogRada).format("DD-MM-YY")=== dayjs().format("DD-MM-YY"))
    
  // }
  
  return (
    
    <div className={`btn border border-gray-200 flex flex-col ${getBojaPolja()}`} >
     <header className='flex flex-col items-center'>
      {indexReda === 0 && (
       <p className='text-sm mt-1'>{danSrbija[brojac]}</p>
      )}
     
     <p className={`text-sm p-1 my-1 ${getDanasnjiDatun()} ${getSelektovaniDan()}`}>{dan.format('DD')}</p>
     </header>
     <div>
     {danEvent.map((event,inx) => (
         <div
         onClick={()=>{
          setPrikazatiEventModal(true)
           setSelektovaniDogadjaj(event)
          //  console.log(1) 
          }}
         key={inx}
         className="btn cursor-pointer bg-green-600 p-1 mr-3 text-white rounded mb-1 truncate">
           {event.temaDiplomskogRada}
         </div>
       ))}
       {pocetakOdbraneEvent.map((event,inx) => (
         <div
         onClick={()=>{
          setPrikazatiEventModal(true)
           setSelektovaniDogadjaj(event)
          //  console.log(1) 
          }}
         key={inx}
         className="bg-red-600 cursor-pointer p-1 mr-3 text-white rounded mb-1 truncate">
           {event.temaDiplomskogRada} - {dayjs(event.datumPocetkaDiplomskogRada).format("HH : mm")}
           {console.log(pocetakOdbraneEvent)}
         </div>
        
       ))}
     </div>
    </div>
  )
}
