import { createContext } from "react";

const Context = createContext({})

export function ContextAuthProvider({children}) {
    const [isLoged, setIsLoged]=useState(false)

    return (
        <Context.Provider value={isLoged, setIsLoged}>
            {children}
        </Context.Provider>
    )
}

export default ContextAuthProvider