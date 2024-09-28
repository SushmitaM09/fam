import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import './Sign.css';

const Sign =()=>{
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
const navigate = useNavigate();
const handleSignIn = () =>{
 const hardcodedEmail="admin@gmail.com";
  const hardcodedPassword="adminpassword";
  if(email == hardcodedEmail && password == hardcodedPassword){
    navigate("/Home");
  }else{
    alert("An error occurred.Please try again.")
  }
};

  return (
   <div className="box1">
    <div className="text">
    <h1 className="text-gray fs-1 mb-4 text-center">Login</h1>
    <div className="form">
<label htmlFor='email' className='text-gray'>Email/Address:</label>
<input
className='form-control ligt-gray mb-3'
type='email'
id='email'
placeholder='Enter your email'
value={email}
onChange={(e) => setEmail(e.target.value)}
required
/>

<label htmlFor='password' className='text-gray textsize'>Password:</label>
<input
className='form-control  light-gray mb-3'
type='password'
id='password'
placeholder='Enter your password'
value={password}
onChange={(e) => setPassword(e.target.value)}
/>
  <button
className=' btn btn-primary fs-6 mb-3 mx-6'
type='button'
onClick={handleSignIn}
>SignIn</button>
 <div className="form-check d-flex align-item-left mb-3 ">
          <input
            className="form-check-input button-checkbox"
            type="checkbox"
            id="rememberMe"
          />
          <label className="form-check-label ms-2 text-gray " htmlFor="rememberMe">
            Remember me
          </label>
        </div>

</div>
</div>
</div>
  )
}

export default Sign;