export const token = (): string => {
    return localStorage.getItem("userToken") ?? ""
}

export function setToken(token: string) {
    localStorage.setItem("userToken", token)
}

export const userCredential = (): {email: string, password: string} => {
    const {email, password} = {
        email: localStorage.getItem("userEmail") ?? "",
        password: localStorage.getItem("userPassword") ?? ""
    }
    return {email, password}
}

export function setUserCredential(email: string, password: string) {
    localStorage.setItem("userEmail", email)
    localStorage.setItem("userPassword", password)
}

export const searchingTextFromLocalStorage = (): string => {
    return localStorage.getItem("searchingText") ?? ""
} 

export function setSearchingTextToLocalStorage(searchingText: string) {
    console.log(searchingText)
    localStorage.setItem("searchingText", searchingText)
}

