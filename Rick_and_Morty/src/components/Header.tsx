import { Stack, Table, TableBody, TableCell, TableRow, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom"
import { logOut } from "../services/authentication/Firebase"
import { token, userCredential } from "../services/localStorage/LocalStorage"

export default function Header() {
    const navigate = useNavigate()

    const onLogOut = async ()  =>  {
        let result = await logOut()
        if(result) {
            localStorage.clear();
            console.log(userCredential())
            console.log(token())
            navigate("/login")
        }
    }
    
    return (
        <Table sx={{width:"100%", height:"80px", backgroundColor: 'lightGray', color: 'text.primary'}}>
            <TableBody>
                <TableRow >
                    <TableCell>
                        <Stack textAlign={"left"}>
                            <Typography sx={{cursor:"pointer"}} onClick={() => navigate("/characters")}>RICK AND MARTY</Typography>
                        </Stack>
                    </TableCell>
                    <TableCell>
                        <Stack textAlign={"right"}>
                            <Typography sx={{cursor:"pointer"}} onClick={() => onLogOut()}>LOG OUT</Typography>
                        </Stack>
                    </TableCell>
                </TableRow>
            </TableBody>
        </Table>
    )
}