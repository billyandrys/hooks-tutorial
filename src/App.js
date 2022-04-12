

import { useForm } from './useForm';


const App = ()=>{
  const [values, handleChange] = useForm({email:'', password:''})
  
  return (
    <>
      <input name='email' value={values.email} type='text' onChange={handleChange}/>
      <input type='password'  value={values.password} name='password' onChange={handleChange}/>
    </>
  )
  
}
 


export default App;
