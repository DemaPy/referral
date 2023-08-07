import { useContext, useState } from "react"
import { AppContext } from "../context/app-context"






export function useAppContext() {

    const context = useContext(AppContext)

    if (!context) {
        throw new Error("You are trying to use app context outside AppContextProvider.")
    }

    return context
}


export function AppContextProvider({ children }) {

    const [language, setLanguage] = useState("eng")
    const [currency, setCurrency] = useState("euro")

    return <AppContext.Provider value={{language, setLanguage, currency, setCurrency}} >
        {children}
    </AppContext.Provider>
}