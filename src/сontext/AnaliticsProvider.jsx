import { useState } from 'react'
import { AnalyticsContext } from './AnaliticsContext'

export const AnalyticsProvider = ({ children }) => {
    const [analyticsData, setAnalyticsData] = useState([])

    const contextValue = {
        analyticsData,
        setAnalyticsData,
    }

    return (
        <AnalyticsContext.Provider value={contextValue}>
            {children}
        </AnalyticsContext.Provider>
    )
}
