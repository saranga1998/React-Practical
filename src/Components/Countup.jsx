import React from 'react'
import CountUp, { useCountUp } from 'react-countup';

function Countup() {

    //const {countUp,start,pauseResume,reset,update} = useCountUp({duration:5,end:10000,startOnMount:false})
    return (
        <div>
            {/* <div>
            <h1>{countUp}</h1>
            <button onClick={start}>start</button>
            <button onClick={pauseResume}>pause</button>
            <button onClick={reset}>reset</button>
            <button onClick={()=>update(5000)}>update to 5000</button>
        </div> */}
            <h1>
                <CountUp start={500} end={1000} duration={5} prefix='$' decimal='2' />
            </h1>
        </div>
    )
}

export default Countup
