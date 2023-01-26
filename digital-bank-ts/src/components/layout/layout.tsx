import { Box } from "@chakra-ui/react"
import { Header } from "../header/header"



export const Layout = ({ children }: any) => {
    return(
        <Box minHeight='100vh' backgroundColor='#9413dc'>
            <Header />
            { children }
        </Box>
    )
}