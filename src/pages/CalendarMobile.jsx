import { Outlet, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Header } from '../components/Header/Header'
import Calendar from '../components/Calendar'
import { TransactionsProvider } from '../сontext/TransactionsProvider'
import { AnalyticsProvider } from '../сontext/AnaliticsProvider'

const MobileCalendarPage = () => {
    const navigate = useNavigate()
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    })

    useEffect(() => {
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            })
        }

        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    useEffect(() => {
        if (windowSize.width > 1200) {
            navigate('/analytics', { replace: true })
        }
    }, [windowSize.width, navigate])

    if (windowSize.width > 1200) {
        return null
    }

    return (
        <>
            <AnalyticsProvider>
                <TransactionsProvider>
                    <Header />
                    <Calendar />
                    <Outlet />
                </TransactionsProvider>
            </AnalyticsProvider>
        </>
    )
}

export default MobileCalendarPage
