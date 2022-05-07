import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle} from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Glogo from '../../../Assets/Glogo.png'
const Register = () => {

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [error,setError] = useState('');
    
    const navigate = useNavigate();
   
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        hookError,
      ] = useCreateUserWithEmailAndPassword(auth,{sendEmailVerification:true});

    const handleOnSubmit = (e) =>{
        e.preventDefault();
        createUserWithEmailAndPassword(email,password)
   
        
    }

   if(user){
    navigate('/home')
   }
   
   
   
    const handleEmailOnBlur = (e) =>{
        const emailRegex = /\S+@\S+\.\S+/;
        const validEmail = emailRegex.test(e.target.value)
        if(validEmail){
            setEmail(e.target.value);
            setError('')
        }
        else{
            setError('Invalid email')
        }
        
    }
    const handlePasswordOnBlur = (e) =>{
        setPassword(e.target.value);
    }
    const handleConfirmPasswordOnBlur = (e) =>{
        if(e.target.value === password){
            setPassword(e.target.value)
            setError('')
        }
        else{
            setError('password do not match')
        }
    }

     // Google sign in part 
     const [signInWithGoogle, GoogleUser, Gloading, Gerror] = useSignInWithGoogle(auth);
    
     if(GoogleUser){
        navigate('/home')
    }

    return (
        <div className="login-container login-card">
        <div className="login-title">REGISTER</div>
        <form onSubmit={handleOnSubmit} className="login-form">
            <input type="text" placeholder="Your Name" required />
            <input onBlur={handleEmailOnBlur} type="text" placeholder="Your Email" required />
            <input onBlur={handlePasswordOnBlur} type="password" placeholder="password" required />
            <input onBlur={handleConfirmPasswordOnBlur} type="password" placeholder="Confirm password"  />
            
            <button>Register</button>

            {error && <p className="error-message">{error}</p> }
        
            <p className='mt-2'>Already have an account? <Link className='text-deco' to="/login">Log in</Link> </p>
            
                       
         {/* //google sign in button// */}
         <button onClick={() => signInWithGoogle()}>  Register with <img style={{width:'25px'}} src={Glogo} alt="" /> </button>
        </form>

       
    </div>
    );
};

export default Register;