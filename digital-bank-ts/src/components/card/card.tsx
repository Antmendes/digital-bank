import { Box, Center } from '@chakra-ui/react'







export const Card = ({ children }: any) => {
    
    

    return (

        <Box minHeight='100vh' backgroundColor='#9413dc' padding='25px'>
            <Center>
                <Box backgroundColor='#ffffff' borderRadius='25px' padding='20px' minHeight='70vh' maxWidth='70vw' marginTop='25px'>
                    {children}
                </Box>
            </Center>
        </Box>

    )
}