import { Outlet } from 'react-router-dom'

import Main from '../components/Main/Main'
import { Header } from '../components/Header/Header'

import { TransactionsProvider } from '../сontext/TransactionsProvider'

function MainPage() {
    return (
        <>
            <TransactionsProvider>
                <Header />
                <Main />
                <Outlet />
            </TransactionsProvider>
        </>
    )
}

export default MainPage
