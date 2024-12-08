import { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { logIn } from "../services/authentication/Firebase";
import { Button } from "@mui/material";

export default function LoginPage() {
    const navigate = useNavigate();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');

    const onLogin = async () => {
        let result = await logIn(email, password)
        if(result) {
            navigate("/characters")
        }
    }

    return (
        // TODO: CHANGE THIS FORM WITH MUI COMPONENTS!!!
        <main >        
            <section>
                <div style={{marginLeft:"30px"}}>                  
                    <h1>Login</h1>                                                                            
                    <form>                                                                                            
                        <div style={{marginTop:"10px"}}>
                            <label htmlFor="email-address">
                                Email address
                            </label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}  
                                required                                    
                                placeholder="Email address"  
                                style={{marginLeft:"10px", padding:"5px"}}                               
                            />
                        </div>

                        <div style={{marginTop:"10px"}}>
                            <label htmlFor="password">
                                Password
                            </label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)} 
                                required                                 
                                placeholder="Password"  
                                style={{marginLeft:"10px", padding:"5px"}}             
                            />
                        </div>                                             
                        <Button size="small" sx={{backgroundColor:"grey", color:"white", marginTop:"10px"}} onClick={onLogin}>Login</Button>
                    </form>

                    <p>
                        Register an account?{' '}
                        <NavLink to="/signup" >
                            Sign Up
                        </NavLink>
                    </p>                   
                </div>
            </section>
        </main>
    )
}