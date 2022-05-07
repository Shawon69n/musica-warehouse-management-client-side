import React, { useState } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import './Login.css'
import Glogo from '../../../Assets/Glogo.png'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [error,setError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname ||  '/';



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

    const [sendPasswordResetEmail, sending, ResetError] = useSendPasswordResetEmail(auth );

   

    const handlePasswordOnBlur = (e) =>{
        setPassword(e.target.value);
    }
    


    const [
        signInWithEmailAndPassword,
        user,
        hookError,
      ] = useSignInWithEmailAndPassword(auth);

    const handleOnSubmit = (e) =>{
        e.preventDefault();
        signInWithEmailAndPassword(email,password)
        
       
    }
    

    if(user){
        navigate(from,{replace:true})
    }

    const resetPassword = async () =>{
        await sendPasswordResetEmail(email);   
        if(!email){ 
            setError('user not found')
        }
       
        else{
            
            toast('Reset password mail sent')
        }
        
        
       
    }

    // Google sign in part 
    const [signInWithGoogle, GoogleUser, Gloading, Gerror] = useSignInWithGoogle(auth);
    if(GoogleUser){
        navigate(from,{replace:true})
    }

    return (
        <div className="login-container login-card">
        <div className="login-title">LOGIN</div>
        <form onSubmit={handleOnSubmit} className="login-form">
            <input onBlur={handleEmailOnBlur} type="text" placeholder="Your Email" required />
            
            <input onBlur={handlePasswordOnBlur} type="password" placeholder="password" required  />
            
            <button>Login</button>

            {error && <p className="error-message">{error}</p> }
            {hookError && <p className="error-message">{hookError?.message}</p>}
            

            <p className='mt-2'>Don't have an account? <Link className='text-deco' to="/register">Sign up first</Link> </p>

            <p>Forget password? <Link className='text-deco' to="/login"  onClick={resetPassword}>Reset password</Link> </p>

            <button onClick={() => signInWithGoogle()}> <img style={{width:'25px'}} src={Glogo} alt="" /> sign in</button>
        </form>

        <ToastContainer></ToastContainer>
        
    </div>
    );
};

export default Login;