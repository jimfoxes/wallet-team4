import { useState } from 'react'
import AnaliticsTracker from './AnaliticsTracker'
import Calendar from '../Calendar/Calendar'
import * as S from './Analitics.styled'

const Analitics = () => {
    const [analyticsData, setAnalyticsData] = useState([])
    const token = JSON.parse(localStorage.getItem('user'))?.token

    const handlePeriodSelect = async (from, to) => {
        try {
            const res = await fetch(
                `https://wedev-api.sky.pro/api/transactions/period?from=${from}&to=${to}`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            )
            const data = await res.json()
            console.log('Полученные транзакции:', data)
            setAnalyticsData(data.transactions || [])
        } catch (err) {
            console.error('Ошибка загрузки данных:', err)
        }
    }

    return (
        <S.analiticsMain>
            <S.Title>Анализ расходов</S.Title>
            <S.analiticsContent>
                <Calendar onPeriodSelect={handlePeriodSelect} />
                <AnaliticsTracker transactions={analyticsData} />
            </S.analiticsContent>
        </S.analiticsMain>
    )
}

export default Analitics
