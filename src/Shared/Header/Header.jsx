import React, { useEffect } from 'react'
import logo from '../../assets/img/logo.svg'
import './Header.scss'
import { TextField } from "@mui/material";
import { useState } from 'react';
import CustomizedSwitches from '../../components/CustomizedSwitches/CustomizedSwitches';




export  function Header({themeToggle, onInput, label}) {



  return (
    <div className='header'>
        <div className="header__body">
            <img className='header__logo' src={logo} alt="logo" />
            <h1 className='header__title'>React weather</h1>
        </div>
        <div className="header__body">
        <CustomizedSwitches  onClick={themeToggle}/>
        <TextField  onInput={onInput}   id="outlined-basic" label={label} variant="outlined" />
        </div>
    </div>
  )
}

