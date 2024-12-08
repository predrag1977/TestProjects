import { useEffect, useState } from "react";
import { tryLoginAsync } from "../services/authentication/Firebase";
import { userCredential } from "../services/localStorage/LocalStorage";
import { useNavigate } from "react-router-dom";
import { Typography } from "@mui/material";

export default function WelcomePage() {
    const navigate = useNavigate()
    const {email} = userCredential()
    const [isLoading, setLoading]  = useState(true)
    const [isAutoLoginSuccess, setAutoLoginSuccess]  = useState(false)

    useEffect(() => {
        async function tryLogin() {
          const result = await tryLoginAsync()
          setLoading(false)
          setAutoLoginSuccess(result)
        }
        setTimeout(()  => {
            tryLogin();
        }, 3000)
    }, []);
    
    return(
        <>
        {
            isLoading ? 
            <>
            <Typography sx={{width:"100%", textAlign:"center", marginTop:"50px"}}>WELCOME TO RICK AND MARTY</Typography>
            <Typography sx={{width:"100%", textAlign:"center", marginTop:"5px"}}>loading...</Typography>
            </> : 
            isAutoLoginSuccess ? navigate("/characters") :  email.length > 0 ? navigate("/login") : navigate("/signup")
        }
        </>
    ) 
}