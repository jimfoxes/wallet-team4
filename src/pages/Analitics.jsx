import { Outlet } from 'react-router-dom'

import Analitics from '../components/Analitics/Analitics'
import { Header } from '../components/Header/Header'

import { TransactionsProvider } from '../сontext/TransactionsProvider'

function AnaliticsPage() {
    return (
        <>
            <TransactionsProvider>
                <Header />
                <Analitics />
                <Outlet />
            </TransactionsProvider>
        </>
    )
}

export default AnaliticsPage
