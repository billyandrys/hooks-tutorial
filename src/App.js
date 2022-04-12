

import { useForm } from './useForm';
import { useEffect } from 'react'

const App = ()=>{
  const [values, handleChange] = useForm({
    email:'',
    password:'',
    firstName:''  
  })


  useEffect(()=>{
    console.log('cars')
  }, [values])
  
  return (
    <>
    <input name='firstName' value={values.firstName} type='text' onChange={handleChange}/>
      <input name='email' value={values.email} type='text' onChange={handleChange}/>
      <input type='password'  value={values.password} name='password' onChange={handleChange}/>
    </>
  )
  
}
 


export default App;
