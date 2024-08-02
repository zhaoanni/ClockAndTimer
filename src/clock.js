import React, { useState, useEffect, useRef } from "react"

export function Clock() {
    const [isRunning, setIsRuning] = useState(false)
    const [time, setTime] = useState(0)
    let intervals

    useEffect(() => {
        // console.log(intervals)
        if (isRunning) {
            intervals= setInterval(() => {
                setTime (new Date().getTime())
            }, 1000)
        }
        return () => {
            clearInterval(intervals)
        }


    },)
    // const intervalRef = useRef(null)
    // useEffect(() => {

    //     if (isRunning) {
    //         intervalRef.current = setInterval(() => {
    //             setTime(new Date().getTime())
    //         }, 1000)
    //     }
    //     return () => {
    //         clearInterval(intervalRef.current)
    //     }

    // }, [isRunning])



    function start() {
        setIsRuning(true)
    }
    function stop() {
        setIsRuning(false);

    }
    function reset() {
        setTime(0)
        setIsRuning(false)
    }
    function formatTime() {
        const currentDate = new Date(time)
        // console.log(currentDate)
        const hours = currentDate.getHours() > 9 ? currentDate.getHours() : '0' + currentDate.getHours()
        const minutes = currentDate.getMinutes() > 9 ? currentDate.getMinutes() : '0' + currentDate.getMinutes()
        const seconds = currentDate.getSeconds() > 9 ? currentDate.getSeconds() : '0' + currentDate.getSeconds()
        return `${hours}: ${minutes}: ${seconds}`

    }


    return (
        <div className="clock">
            <div className="display">{formatTime()}</div>
            <div className="controls switches">
                <button className='startBtn' onClick={start}>Start</button>
                <button className='stopBtn' onClick={stop}>Stop</button>
                <button className='resetBtn' onClick={reset}>Reset</button>
            </div>

        </div>

    )
}
