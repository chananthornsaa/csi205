import { useEffect, useState } from "react"
import Value from "./value"

const Timer = () => {

    const [running, setRunning] = useState(false)
    const [second, setSecond] = useState(99990)

    useEffect( () => {
        let interval = null
        if(running){
            interval = setInterval( () => {
                setSecond(second => second + 1)
            }, 1000)
        }
        return () => clearInterval(interval)
    },[running,second])

    const runClick = () => {
        setRunning(!running)
    }

    const convertToString = (sec) => {
        const MINUTE_SECOND = 60
        const HOURS_SECOND = MINUTE_SECOND * 60
        const DAYS_SECOND = HOURS_SECOND * 24
        
        const days = Math.floor(sec/DAYS_SECOND)
        const hours = Math.floor((sec % DAYS_SECOND)/HOURS_SECOND)
        const minute = Math.floor(sec / MINUTE_SECOND)
        const s = sec % MINUTE_SECOND

        if(days > 0){
            return days + 'd' + hours + 'h' + minute + 'm' + s + 's'
        }else if(hours > 0){
            return hours + 'h' + minute + 'm' + s + 's'
        }else if(minute > 0){
            return minute + 'm' + s + 's'
        }else{
            return s + 's'
        }
    }

    const resetClick = () => {
        setRunning(false)
        setSecond(0)
    }

    return (
        <div className="border border-black border-2 mx-auto mt-3 p-3 rounded-3" style={{width: 'fit-content'}}>
        <h1 className="text-center text-primary">TIMER</h1>
        <input className="fw-bold mb-3" value={convertToString(second)} readOnly></input>
        <div className="d-flex justify-content-evenly">
            <button className="btn btn-danger" onClick={resetClick} ><i class="bi bi-arrow-counterclockwise"></i>Reset</button>
            <button className={"btn "+(running ? "btn-warning" : "btn-success")}onClick={runClick} ><i class={running ? "bi bi-pause" : "bi bi-play"} ></i>{running ? "Pause" : "Run"}</button>
        </div>
        </div>
    )
}

export default Timer