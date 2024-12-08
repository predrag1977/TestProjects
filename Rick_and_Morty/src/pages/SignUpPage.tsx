import React, {useState} from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from "../services/authentication/Firebase";
import { setToken, setUserCredential } from '../services/localStorage/LocalStorage';

export default function SignUp() {
        const navigate = useNavigate();
    
        const [email, setEmail] = useState('')
        const [password, setPassword] = useState('');

        const token = localStorage.getItem("userToken") ?? "";
        console.log(token);
    
        const onSubmit = async (e: { preventDefault: () => void; }) => {
          e.preventDefault()

          await signInWithEmailAndPassword(auth, email, password).then(async (userCredential) => {
            const token = await userCredential.user.getIdToken()
            console.log(token)
            setUserCredential(email, password)
            setToken(token)
          }).catch((error) => {
            navigate("/signup")
          })
    
        //   await createUserWithEmailAndPassword(auth, email, password)
        //     .then((userCredential) => {
        //         // Signed in
        //         const user = userCredential.user;
        //         console.log(user);
        //         navigate("/login")
        //         // ...
        //     })
        //     .catch((error) => {
        //         const errorCode = error.code;
        //         const errorMessage = error.message;
        //         console.log(errorCode, errorMessage);
        //         console.log(localStorage.getItem('userToken'));
                
        //     });
        }
    
      return (
        <main >        
            <section>
                <div>
                    <div>                  
                        <h1> FocusApp </h1>                                                                            
                        <form>                                                                                            
                            <div>
                                <label htmlFor="email-address">
                                    Email address
                                </label>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}  
                                    required                                    
                                    placeholder="Email address"                                
                                />
                            </div>
    
                            <div>
                                <label htmlFor="password">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)} 
                                    required                                 
                                    placeholder="Password"              
                                />
                            </div>                                             
    
                            <button
                                type="submit" 
                                onClick={onSubmit}                        
                            >  
                                Sign up                                
                            </button>
    
                        </form>
    
                        <p>
                            Already have an account?{' '}
                            <NavLink to="/login" >
                                Sign in
                            </NavLink>
                        </p>                   
                    </div>
                </div>
            </section>
        </main>
      )
    }