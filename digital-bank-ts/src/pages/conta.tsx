import {  Center, SimpleGrid, Spinner } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { api } from "../api";
import { useParams, useNavigate } from "react-router-dom"
import CardInfo from "../components/cardInfo/cardInfo";


interface UserData {
    email: string,
    password: string,
    name: string,
    balance: number,
    id: string
}

const Conta = () => {
    const [userData, setUserData] = useState<null | UserData>()

    const {id} = useParams()
    const navigate = useNavigate()
    
    if(userData && id !== userData.id){
        navigate('/')
    }

    useEffect(() => {
        const getData = async () => {
            const data: any | UserData = await api
            setUserData(data)
        }

        getData()
    }, [])

    const actualData = new Date()
    

    

    return (
        <Center>
            <SimpleGrid columns={2} spacing={8} paddingTop={16}>
                {
                    userData === undefined || userData === null ?
                    (
                        <Center>
                            <Spinner size='xl' color='#ffffff'/>
                        </Center>
                    ) :
                    (
                        <>
                        <CardInfo title={`Bem vindo ${userData?.name}`}
                         content={`${actualData.getDay()} / ${actualData.getMonth()} / ${actualData.getDay()} / ${actualData.getFullYear()} ${actualData.getHours()}:${actualData.getMinutes()} `}/>
                         <CardInfo title="Saldo" content={`R$ ${userData.balance}`} />
                         </>
                    )
                }
                
                
            </SimpleGrid>
        </Center>
    )
}

export default Conta;