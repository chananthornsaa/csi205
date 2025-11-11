import { useEffect, useState } from "react"
import Value from "./value"

const Temperature = () => {
    
    const [celsius, setCelsius] = useState(25)
    const [fahrenheit, setFahrenheit] = useState(77)
    const [kelvin, setKelvin] = useState(298.15)

    const cToF = (c) => (c * 9 / 5) + 32;
    const cToK = (c) => c + 273.15;
    const fToC = (f) => (f - 32) * 5 / 9;
    const fToK = (f) => (f + 459.67) * 5 / 9;
    const kToC = (k) => k - 273.15;
    const kToF = (k) => (k * 9 / 5) - 459.67;

    useEffect(() => {
        const newF = cToF(celsius);
        const newK = cToK(celsius);
        if (fahrenheit.toFixed(2) !== newF.toFixed(2)){ setFahrenheit(newF)};
        if (kelvin.toFixed(2) !== newK.toFixed(2)) {setKelvin(newK)}; 
    }, [celsius]);
    useEffect(() => {
        const newC = fToC(fahrenheit);
        const newK = fToK(fahrenheit);
        if (celsius.toFixed(2) !== newC.toFixed(2)) {setCelsius(newC)};
        if (kelvin.toFixed(2) !== newK.toFixed(2)){ setKelvin(newK)}; 
    }, [fahrenheit]);
    useEffect(() => {
        const newC = kToC(kelvin);
        const newF = kToF(kelvin);
        if (celsius.toFixed(2) !== newC.toFixed(2)){ setCelsius(newC)};
        if (fahrenheit.toFixed(2) !== newF.toFixed(2)) {setFahrenheit(newF)}; 
    }, [kelvin]);

    return (
        <div className="border border-black border-2 mx-auto mt-3 p-3 rounded-3" style={{width: 'fit-content'}}>
        <h1 className="text-center text-primary">TEMPERATURES</h1>
        <div className="d-flex justify-content-between align-items-center ms-5 me-5 fs-2">
            <div className="badge bg-primary">{celsius.toFixed(2)}&deg;C</div>
            <div className="badge bg-primary">{fahrenheit.toFixed(2)}&deg;F</div>
            <div className="badge bg-primary">{kelvin.toFixed(2)}&deg;K</div>
        </div>
        <div className="d-flex gap-2">
            <Value name={'Celsius'} type={"real"} value={celsius} setValue={setCelsius}/>
            <Value name={'Fahrenheit'} type={"real"} value={fahrenheit} setValue={setFahrenheit}/>
            <Value name={'Kelvin'} type={"real"} value={kelvin} setValue={setKelvin}/>
        </div>
        </div>
    )
}

export default Temperature