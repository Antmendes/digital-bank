import { Header } from "../components/header/header";
import { Card } from "../components/card/card";
import { Box, Center, Input } from "@chakra-ui/react";
import { DButton } from "../components/button/dButton";
import { Login } from "../services/login";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../components/appContext/appContext";
import { changeLocalStorage } from "../services/storage";

const Home = () => {
  const [email, setEmail] = useState<string>('')
  const { setIsLoggedIn } = useContext(AppContext)
  const navigate = useNavigate()

  const validateUser = async (email: string) => {
    const loggedIn = await Login(email)

    if (!loggedIn) {
      return alert('Email inválido')
    }
    setIsLoggedIn(true)
    changeLocalStorage({ login: true})
    navigate('/conta/1')
  }

  return (

    <Box>
      <Card>
        <Center paddingTop='30px' paddingBottom='10px' fontSize='2rem'>
          <h1>Faça o login</h1>
        </Center>
        <Box padding='15px' marginTop='30px'>
          <Input placeholder='email' marginTop='10px' value={email} onChange={(event) => setEmail(event.target.value)} />
          <Input placeholder='password' marginTop='35px' />
        </Box>
        <Center>
          <DButton
            onClick={() => validateUser(email)}
          />
        </Center>
      </Card>
    </Box>


  )
}

export default Home;