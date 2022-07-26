import {getMesec} from './Komponente/Kalendar/Util.js'
import React,{useState} from 'react';
import Kalendar from './Komponente/Kalendar/Kalendar.jsx'
import KalendarKontekstWrapper from './Komponente/Kalendar/context/KalendarKontekstWrapper.jsx';



function App() {
  


  return (
    <React.Fragment>
      <KalendarKontekstWrapper>
      <Kalendar />
      </KalendarKontekstWrapper>
    </React.Fragment>
  );
}

export default App;
