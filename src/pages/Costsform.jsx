import { Outlet, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Header } from '../components/Header/Header'
import Costsform from '../components/Costsform/Costsform'
import { TransactionsProvider } from '../сontext/TransactionsProvider'

function MobileCostsformPage() {
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
            navigate('/', { replace: true })
        }
    }, [windowSize.width, navigate])

    if (windowSize.width > 1200) {
        return null
    }

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
