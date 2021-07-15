import React, { useState } from 'react';


import Lamp from './Lamp'
import Clock from './Clock'
import Button from './Button'
import '../styles/Body.css'


function Body(){
    const [start, setStart]=useState('start')
    const [focus, setFocus]=useState('focus')

const handleFocus=()=>{
    start==='start'?setStart('pause'):setStart('start')

}
const handleBreakTime=()=>{
    focus==='focus'?setFocus('break'):setFocus('focus')

}
    return(
        <div className='container'>
            <div className="lamp">

            <Lamp/>
            </div>
            <Clock start={start} handleBreakTime={handleBreakTime}/>
            <Button focus={focus} start={start} handleFocus={handleFocus}/>
        </div>
    )
}
export default Body