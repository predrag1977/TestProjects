import { Stack, Table, TableBody, TableCell, TableRow, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom"

export default function Header() {
    const navigate = useNavigate()
    
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
                        <Typography sx={{cursor:"pointer"}} onClick={() => navigate("/login")}>LOG OUT</Typography>
                    </Stack>
                </TableCell>
            </TableRow>
            </TableBody>
            
        </Table>
    )
}