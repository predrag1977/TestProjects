import { useEffect, useState } from "react";
import { tryLoginAsync } from "../services/authentication/Firebase";
import { userCredential } from "../services/localStorage/LocalStorage";
import { useNavigate } from "react-router-dom";

export default function WelcomePage() {
    const navigate = useNavigate()
    const {email} = userCredential
    const [isLoading, setLoading]  = useState(true)
    const [isAutoLoginSuccess, setAutoLoginSuccess]  = useState(false)

    useEffect(() => {
        async function tryLogin() {
          const result = await tryLoginAsync()
          setLoading(false)
          setAutoLoginSuccess(result)
        }
        tryLogin();
    }, []);
    
    return(
        <>
        {
            isLoading ? "Loading..." : 
            isAutoLoginSuccess ? navigate("/characters") :  email.length > 0 ? navigate("/login") : navigate("/signup")
        }
        </>
    ) 
}