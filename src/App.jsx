import './App.scss';
import React, { useEffect, useState } from 'react';
import Home from './pages/Home/Home';
import{ Header} from './Shared/Header/Header';
import { useTranslation } from "react-i18next";





function App() {
  const { t, i18n } = useTranslation();
  const [flag, setFlag] = useState('ligth')
  const [coutr, setcount] = useState('Mogilev')

  const searchCoyntry = (e) => {
    setcount(e.target.value)
  }
  
  const themeToggle = (e) => {



  if(flag === 'ligth'){
    setFlag('dark')
    localStorage.setItem('theme', 'dark')


  }else{
    setFlag('ligth')
    localStorage.setItem('theme', 'ligth')
  }
}

useEffect(()=>{
  setFlag(localStorage.getItem('theme'))
},[])
 


  return (
    <div className='app' data-theme={flag}>
      <div className='container' data-theme={flag}>
      <Header themeToggle ={themeToggle} onInput={searchCoyntry} label={t("description.part12")}/>
      <Home test={coutr}  />
      </div>
    </div>
  );
}

export default App;
