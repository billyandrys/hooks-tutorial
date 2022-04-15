

import React, { useState, useReducer } from 'react'

function reducer (state, action){
  switch(action.type){
    case 'add-tod':
      return   {todos : [...state.todos, { text: action.text, completed:false} ]}
    
    default :
    return state
  }
}

const App = ()=>{

  const [{todos}, dispatch ] = useReducer(reducer, { todos : []})
  
  const [text, setText] = useState() 
     return(
      <>
        <form onSubmit={(e)=>{
            e.preventDefault()
            dispatch({type: 'add-tod', text})

        }}>
          <input type='text' value={text} onChange={(e)=>{
            setText(e.target.value)
          }}/> 
        </form>
        <pre>{JSON.stringify(todos, null, 2)}</pre>
      </>
    )

}
 


export default App;
