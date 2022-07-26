import {getMesec} from './Komponente/Kalendar/Util.js'
import React,{useState} from 'react';
import CalendarHeader from './Komponente/Kalendar/CalendarHeader.jsx'
import Mesec from './Komponente/Kalendar/Mesec.jsx'
import Sidebar from './Komponente/Kalendar/Sidebar.jsx'


function App() {
  const [trenutniMesec,setTrenutniMesec]=useState(getMesec())


  return (
    <React.Fragment>
      <div className='h-screen flex flex-col '>
      
      <div className='flex flex-1 '>
        
        <Mesec mesec={trenutniMesec}/>
      </div>
      </div>
    </React.Fragment>
  );
}

export default App;
