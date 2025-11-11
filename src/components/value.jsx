import { useEffect, useState } from 'react'

// props = {value: ??, name: '??'}

const Value = ({name, initial, type, value, setValue}) => {
    // const [value, setValue] = useState(0)

    // useEffect( () => {
    //     setValue(initial || 0)
    // }, [initial])
    
    return (
        <div className="border border-black border-2 m-auto rounded-3 p-2 mt-3 mx-auto" style={{width: 'fit-content'}}>        
            <h1 className="text-primary text-center">{ name || 'VALUE'}</h1>
            <div className="d-flex justify-content-between align-items-center gap-2">
                <button className="btn btn-danger" onClick={() => setValue((p) => p - 1)}>&minus;</button>
                <div className="fs-3 fw-bold">{type === 'real' ? value.toFixed(2) : Math.round(value)}</div>
                <button className="btn btn-success" onClick={() => setValue((p) => p + 1)}>+</button>
            </div>
        </div>
    )
}

export default Value