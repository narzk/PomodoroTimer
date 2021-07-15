import '../styles/Clock.css'
import React, { useState, useEffect } from 'react';

function Clock({start, handleBreakTime}) {
    const [min, setMin] = useState(0)
    const [sec, setSec] = useState(0)


    useEffect(() => {

        setTimeout(() => {
            if(start!=='pause'){
                if(sec==0 && min==0 ){
                    
                    setSec(0)
                    setMin(5)
                    handleBreakTime()
                 
                }
    
                if (sec == 0) {
                    setSec(59)
                    setMin(min - 1)
                } else {
                    setSec(sec - 1)
                }
            }
            

        }, 1000);
    }, [sec, start, min],[])

    return (
        <div>
            <div className="clock">
                {`${min}:${sec<=9? '0'+sec:sec}`}
            </div>
        </div>
    )
}
export default Clock