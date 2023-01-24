import { ChakraProvider, Box, Center, Input, Button, Flex } from '@chakra-ui/react'

export const Card = () => {
    return (
        <ChakraProvider>
            <Box minHeight='100vh' backgroundColor='#9413dc' padding='25px'>
                <Center>
                   
                <Box backgroundColor='#ffffff' borderRadius='25px' padding='20px' minHeight='70vh' maxWidth='70vw' marginTop='25px'>
                   
                    <Center paddingTop='30px' paddingBottom='10px' fontSize='2rem'>
                        <h1>Faça o login</h1>
                    </Center>
                    <Box padding='15px' marginTop='30px'>
                    <Input placeholder='email' marginTop='10px' />
                    <Input placeholder='password' marginTop='35px'/>
                    </Box>
                    <Center>
                        <Button colorScheme='teal' size='sm' width='70%' height='45px' marginTop='25px'>
                            Button
                        </Button>
                    </Center>
                    
                </Box>
                </Center>
                
            </Box>
        </ChakraProvider>
    )
}