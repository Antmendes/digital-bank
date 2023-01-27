import { Login } from './login'


{/*const mockSetIsLoggedIn = jest.fn()
const mockNavigate = jest.fn()
                                        exemplo de mock

jest.mock('react', () => ({
    ...jest.requireActual('react'),
    useContext: () => ({
        setIsLoggedIn: mockSetIsLoggedIn
    })
}))

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom') as any,
    useNavigate: () => mockNavigate
}))*/}


describe('login', () => {

    const mockEmail = 'antmen@gmail.com'


    it('deve exibir um alert com boas vindas caso o email seja válido', async () => {
        const response = await Login(mockEmail)
        expect(response).toBeTruthy()
        
    })


    it('deve exibir um erro caso o email seja inválido', async () => {
        const response = await Login('email@invalido.com')
        expect(response).toBeFalsy()
        
    })
})