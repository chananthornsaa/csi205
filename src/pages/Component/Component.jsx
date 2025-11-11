import { useState } from 'react'
import RadixCounter from '../../components/RadixCounter'
import Value from '../../components/value'
import Adder from '../../components/Adder'
import Timer from '../../components/Timer'
import Temperature from '../../components/Temperature'

import './Component.css';

function Component() {
    const [counter, setCounter] = useState(0)

    return ( 
        <div>

            {/* <RadixCounter/> */}

            {/* <Value name={'COUNTER'} value={counter} setValue={setCounter}/> */}

            {/* <Adder/> */}

            {/* <Timer/> */}

            {/* <Temperature/> */}

            <div className="component-container container">
  <div className="row justify-content-center g-3">
    <div className="col-md-4">
      <div className="component-box">
        <Value name={'COUNTER'} value={counter} setValue={setCounter}/>
      </div>
    </div>
    <div className="col-md-4">
      <div className="component-box">
        <Timer/>
      </div>
    </div>
  </div>

  {/* Other sections */}
  <div className="component-box">
    <Adder/>
  </div>
  <div className="component-box temperature-section">
    <Temperature/>
  </div>
</div>

        </div>
    );
}

export default Component;