import React, { useState, useEffect, useRef } from "react"

export function Timers() {
    const [isRunning, setIsRuning] = useState(false)
    const [elapsedTime, setElapsedTime] = useState(0)
    const intervalRef = useRef(null)
    const startTimeRef = useRef(0)
    useEffect(() => {
        if (isRunning) {
            intervalRef.current = setInterval(()=>{setElapsedTime(new Date().getTime()- startTimeRef.current)}
            //intervalRef.current = setInterval(() => { setElapsedTime(Date.now() - startTimeRef.current) }, 1000)
            // console.log(intervalRef)
    ,1000)}
        return () => {
            clearInterval(intervalRef.current)
        }

    }, [isRunning])


    function start() {
        setIsRuning(true)
        //startTimeRef.current = Date.now() - elapsedTime
        startTimeRef.current = (new Date()).getTime() - elapsedTime
    }
    function stop() {
        setIsRuning(false);

    }
    function reset() {
        setElapsedTime(0)
        setIsRuning(false)
    }
    function formatTime() {
        let hours = Math.floor(elapsedTime / (1000 * 60 * 60))
        let minutes = Math.floor(elapsedTime / (1000 * 60) % 60)
        let seconds = Math.floor(elapsedTime / (1000) % 60)
        let millseconds = Math.floor((elapsedTime % 1000) / 10)
        hours = String(hours).padStart(2, '0')
        minutes = String(minutes).padStart(2, '0')
        seconds = String(seconds).padStart(2, '0')
        millseconds = String(millseconds).padStart(2, '0')
        return `${hours}: ${minutes}: ${seconds}`
    }


    return (
        <div className="whole">
            <div className="display">{formatTime()}</div>
            <div className="controls">
                <button className='startBtn' onClick={start}>Start</button>
                <button className='stopBtn' onClick={stop}>Stop</button>
                <button className='resetBtn' onClick={reset}>Reset</button>
            </div>

        </div>

    )
}
