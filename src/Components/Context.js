import React, { createContext, useState } from 'react'

export const NavContext = createContext()
function Context({ children }) {

    const [page, setPage] = useState("home")

    return (
        <NavContext.Provider value={[page, setPage]} >
            {children}
        </NavContext.Provider>
    )
}

export default Context