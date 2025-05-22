import { useState } from 'react'
import AnaliticsTracker from './AnaliticsTracker'
import Calendar from '../calendar/calendar'
import * as S from './Analitics.styled'

const Analitics = () => {
    const [analyticsData, setAnalyticsData] = useState([])

    return (
        <S.analiticsMain>
            <S.Title>Анализ расходов</S.Title>
            <S.analiticsContent>
                <Calendar setAnalyticsData={setAnalyticsData} />
                <AnaliticsTracker transactions={analyticsData} />
            </S.analiticsContent>
        </S.analiticsMain>
    )
}

export default Analitics
