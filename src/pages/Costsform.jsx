import { Outlet } from 'react-router-dom'

import { Header } from '../components/Header/Header'
import Costsform from '../components/Costsform/Costsform'

import { TransactionsProvider } from '../сontext/TransactionsProvider'

function MobileCostsformPage() {
    return (
        <>
            <TransactionsProvider>
                <Header />
                <Costsform />
                <Outlet />
            </TransactionsProvider>
        </>
    )
}

export default MobileCostsformPage
