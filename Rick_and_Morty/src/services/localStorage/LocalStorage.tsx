export const token = localStorage.getItem("userToken") ?? ""

export function setToken(token: string) {
    localStorage.setItem("userToken", token)
}

export const userCredential = {
    email: localStorage.getItem("userEmail") ?? "",
    password: localStorage.getItem("userPassword") ?? ""
}

export function setUserCredential(email: string, password: string) {
    localStorage.setItem("userEmail", email)
    localStorage.setItem("userPassword", password)
}

