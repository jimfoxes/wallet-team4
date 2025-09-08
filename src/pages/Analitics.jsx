import { Outlet } from 'react-router-dom'

import Analitics from '../components/Analitics/Analitics'
import { Header } from '../components/Header/Header'

import { TransactionsProvider } from '../сontext/TransactionsProvider'
import { AnalyticsProvider } from '../сontext/AnaliticsProvider'

function AnaliticsPage() {
    return (
        <>
            <AnalyticsProvider>
                <TransactionsProvider>
                    <Header />
                    <Analitics />
                    <Outlet />
                </TransactionsProvider>
            </AnalyticsProvider>
        </>
    )
}

export default AnaliticsPage
