import { Login } from './login'


describe('login', () => {


    const mockAlert = jest.fn()
    window.alert = mockAlert
    const mockEmail = 'antmen@gmail.com'


    it('deve exibir um alert com bos vindas e email', () =>{
        Login(mockEmail)
        expect(mockAlert).toHaveBeenCalledWith(`Bem vindo ${mockEmail} !`)
    })
})