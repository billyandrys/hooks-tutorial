

import { useForm } from './useForm';


import { useFetch } from './useFetch';
const App = ()=>{
  const [values, handleChange] = useForm({
    email:'',
    password:'',
    firstName:''  
  })
  
  const { data , loading} = useFetch('http://numbersapi.com/43/trivia')
  
  
  return (
    <>
    { loading ? 'loading...' : data}
    
    <input name='firstName' value={values.firstName} type='text' onChange={handleChange}/>
      <input name='email' value={values.email} type='text' onChange={handleChange}/>
      <input type='password'  value={values.password} name='password' onChange={handleChange}/>
    </>
  )
  
}
 


export default App;
