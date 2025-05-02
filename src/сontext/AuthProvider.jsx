import { useState } from 'react'
import { LS_USER } from '../services/utilities'

import { AuthContext } from './AuthContext'

export const AuthProvider = ({ children }) => {
    const [isAuth, setIsAuth] = useState(
        JSON.parse(localStorage.getItem(LS_USER))?.token ? true : false
    )

    return (
        <AuthContext.Provider value={{ isAuth, setIsAuth }}>
            {children}
        </AuthContext.Provider>
    )
}
