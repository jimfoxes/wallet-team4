import { Outlet } from 'react-router-dom'
import { Header } from '../components/Header/Header'
import Calendar from '../components/calendar/calendar'
import { TransactionsProvider } from '../сontext/TransactionsProvider'

const MobileCalendarPage = () => {
    return (
        <>
            <TransactionsProvider>
                <Header />
                <Calendar />
                <Outlet />
            </TransactionsProvider>
        </>
    )
}

export default MobileCalendarPage
