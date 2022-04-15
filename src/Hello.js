
import React from 'react'
import { useCounteRender } from './useCounterRender'

export const Hello = React.memo(({ increment })=>{

    //useCounteRender()

    return(
        <>
            <button onClick={increment}>increments</button>
        </>
    )
})