import {  Box, Center, Input } from '@chakra-ui/react'
import { DButton } from '../button/dButton'
import { Login } from '../../services/login'
import { useState } from 'react'





export const Card = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        
            <Box minHeight='100vh' backgroundColor='#9413dc' padding='25px'>
                <Center>
                   
                <Box backgroundColor='#ffffff' borderRadius='25px' padding='20px' minHeight='70vh' maxWidth='70vw' marginTop='25px'>
                   
                    <Center paddingTop='30px' paddingBottom='10px' fontSize='2rem'>
                        <h1>Faça o login</h1>
                    </Center>
                    <Box padding='15px' marginTop='30px'>
                    <Input placeholder='email' marginTop='10px' value={email} onChange={(event) => setEmail(event.target.value)}/>
                    <Input placeholder='password' marginTop='35px'/>
                    </Box>
                    <Center>
                        <DButton
                        onClick={() => Login(email)}
                        />
                    </Center>
                    
                </Box>
                </Center>
                
            </Box>
        
    )
}