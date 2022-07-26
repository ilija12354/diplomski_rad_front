import React from "react";

const KalendarKontekst = React.createContext({
 indeksMeseca: 0,
 setIndeksMeseca: (index)=>{},
 maliKalendarMesec: 0,
 setMaliKalendarMesec:(index)=>{},
 selektovaniDan:null,
 setSelektovaniDan:(day)=>{},
 prikazatiEventModal: false,
 setPrikazatiEventModal: () => {},
 dispatchSacuvaniDogadjaji: ({type, payload})=>{},
 sacuvaniDogadjaji: [],
 selektovaniDogadjaj: null,
 setSelektovaniDogadjaj: () => {},
 datumBaza: [],
 setDatumBaza: ()=> {}
})
export default KalendarKontekst;