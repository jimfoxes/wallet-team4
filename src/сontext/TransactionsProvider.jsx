import { useState } from 'react'

import { TransactionsContext } from './TransactionsContext'

export const TransactionsProvider = ({ children }) => {
    const [transactionsList, setTransactionsList] = useState([])
    const [transactionId, setTransactionId] = useState('')
    const [loading, setLoading] = useState('')
    const [mobileHeaderNav, setMobileHeaderNav] = useState('Мои расходы')

    return (
        <TransactionsContext.Provider
            value={{
                transactionsList,
                setTransactionsList,
                transactionId,
                setTransactionId,
                mobileHeaderNav,
                setMobileHeaderNav,
                loading,
                setLoading,
            }}
        >
            {children}
        </TransactionsContext.Provider>
    )
}
