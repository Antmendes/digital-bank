interface IDigiBank {
    login: boolean
}


const digiBank = {
    login: false
}


export const getAll = (): string | null => {
    return localStorage.getItem('digiBank')
}

export const createLocalStorage = (): void => {
    localStorage.setItem('digiBank', JSON.stringify(digiBank))
}

export const changeLocalStorage = (digiBank: IDigiBank): void => {
     localStorage.setItem('digiBank', JSON.stringify(digiBank))
}