import { Center, Text } from '@chakra-ui/react'
import { useContext } from 'react'
import { AppContext } from '../appContext/appContext'


export const Header = () => {
const context = useContext(AppContext)


    return (
        <Center fontSize='45px'>
            <Text fontSize='45px'>Digital Bank</Text>
        </Center>

    )
}