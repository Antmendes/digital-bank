import { ChakraProvider } from '@chakra-ui/react'

export const Header = () => {
    return (
        <ChakraProvider>
            <div>
                <h1>Digital Bank</h1>
            </div>
        </ChakraProvider>
    )
}