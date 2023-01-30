import { Box, Button, Center, Flex, Spacer, Text } from '@chakra-ui/react'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { changeLocalStorage } from '../../services/storage'
import { AppContext } from '../appContext/appContext'


export const Header = () => {
    const { isLoggedIn, setIsLoggedIn } = useContext(AppContext)
    const navigate = useNavigate()

    const logout = () => {
        changeLocalStorage({login: false})
        setIsLoggedIn(false)
        navigate('/')
    }


    return (
        <Flex backgroundColor='#ffffff' padding='5px'>
            <Box>
                <Center fontSize='45px'>
                    <Text fontSize='45px'>Digital Bank</Text>
                </Center>
            </Box>
            {
                isLoggedIn && (
                    <>
                        <Spacer />
                        <Button onClick={() => logout()}>
                            Sair
                        </Button>
                    </>
                )
            }
        </Flex>

    )
}