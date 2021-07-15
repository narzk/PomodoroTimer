
import React, { useState } from 'react';
import '../styles/Button.css'


function Button({focus, start, handleFocus}) {
    // const [startOrPause, setStartOrPause]=useState('start')
    // const handleFocus =()=>{
    //     startOrPause==='start'? setStartOrPause('pause'):setStartOrPause('start')
    // }
    return (<div className='button-container'>
        <div className='focus'>
        {focus}
        </div>
        <div className='time'>
            Time
        </div>
    <button onClick={handleFocus}>{start}</button>
    </div>)
}
export default Button