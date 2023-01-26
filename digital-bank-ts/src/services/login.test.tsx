import { Login } from './login'


describe('login', () => {


    const mockAlert = jest.fn()
    window.alert = mockAlert
    const mockEmail = 'antmen@gmail.com'


    it('deve exibir um alert com bos vindas e email', async () =>{
       await Login(mockEmail)
        expect(mockAlert).toHaveBeenCalledWith(`Bem vindo ${mockEmail} !`)
    })

    it('deve exibir um erro caso o email seja inválido', async () => {
        await Login('email@invalido.com') 
        expect(mockAlert).toBeCalledWith('Email inválido!')
    })
})