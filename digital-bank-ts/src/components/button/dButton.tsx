import {  Button } from "@chakra-ui/react"
import { MouseEventHandler } from "react"


interface IDButton{
    onClick: MouseEventHandler
}



export const DButton = ({onClick}: IDButton) => {
    return (
        
            <Button onClick={onClick} colorScheme='teal' size='sm' width='70%' height='45px' marginTop='25px'>
                Button
            </Button>
        
    )
}