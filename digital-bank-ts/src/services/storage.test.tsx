import { changeLocalStorage, createLocalStorage, getAll } from "./storage"

const digiBank = {
    login: false
}


describe('storage', () => {

    const mockSetItem = jest.spyOn(Storage.prototype, 'setItem')
    
    it('Deve retornar o objeto no localStorage com a chave digiBank', () => {
        const mockGetItem = jest.spyOn(Storage.prototype, 'getItem')
        getAll()
        expect(mockGetItem).toHaveBeenCalledWith('digiBank')
    })

    it('Deve criar o objeto no localStorage', () => {
        
        createLocalStorage()
        expect(mockSetItem).toHaveBeenCalledWith('digiBank', JSON.stringify(digiBank))
    })

    it('Deve alterar o valor do objeto no localStorage', () => {
        changeLocalStorage(digiBank)
        expect(mockSetItem).toHaveBeenCalledWith('digiBank', JSON.stringify(digiBank))
    })
})