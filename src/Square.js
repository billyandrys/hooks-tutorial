import React from 'react'
import { useCounteRender } from './useCounterRender'

export const Square = React.memo(({ n,  onClick })=>{

    useCounteRender()

    return(
        <>
            <button onClick={onClick}>{n}</button>
        </>
    )
})