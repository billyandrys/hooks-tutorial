import { useRef } from 'react'
export const useCounteRender = ()=>{
    const renders = useRef(0)
    console.log('render', renders.current++)
}