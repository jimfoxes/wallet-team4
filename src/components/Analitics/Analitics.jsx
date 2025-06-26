import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import AnaliticsTracker from './AnaliticsTracker'
import Calendar from '../calendar/calendar'
import { handlePeriodSelect } from '../../services/transactionsHandler'
import { LS_USER } from '../../services/utilities'
import * as S from './Analitics.styled'

const Analitics = () => {
    const [analyticsData, setAnalyticsData] = useState([])

    const isMobileView = window.innerWidth <= 768

    useEffect(() => {
        const savedPeriod = JSON.parse(localStorage.getItem('selectedPeriod'))
        const token = JSON.parse(localStorage.getItem(LS_USER))?.token

        if (savedPeriod?.start && savedPeriod?.end && token) {
            handlePeriodSelect({
                start: new Date(savedPeriod.start),
                end: new Date(savedPeriod.end),
                token,
            })
                .then((data) => {
                    setAnalyticsData(data)
                    localStorage.removeItem('selectedPeriod')
                })
                .catch((error) =>
                    console.error('Ошибка при загрузке аналитики:', error)
                )
        }
    }, [])

    return (
        <S.analiticsMain>
            <S.Title>Анализ расходов</S.Title>
            <S.analiticsContent>
                {/* Мобильная кнопка "Выбрать другой период" */}
                {isMobileView && (
                    <Link to="/calendar">
                        <button>Выбрать другой период</button>
                    </Link>
                )}

                {/* Десктопный календарь */}
                {!isMobileView && (
                    <Calendar setAnalyticsData={setAnalyticsData} />
                )}

                <AnaliticsTracker analyticsData={analyticsData} />
            </S.analiticsContent>
        </S.analiticsMain>
    )
}

export default Analitics
