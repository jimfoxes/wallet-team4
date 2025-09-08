import { useState, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import AnaliticsTracker from './AnaliticsTracker'
import Calendar from '../calendar/calendar'
import { handlePeriodSelect } from '../../services/transactionsHandler'
import { LS_USER } from '../../services/utilities'
import { AnalyticsContext } from '../../сontext/AnaliticsContext'
import * as S from './Analitics.styled'

const Analitics = () => {
    const { analyticsData, setAnalyticsData } = useContext(AnalyticsContext)
    const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 1200)
    const navigate = useNavigate()

    useEffect(() => {
        const handleResize = () => {
            setIsMobileView(window.innerWidth <= 1200)
        }

        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    useEffect(() => {
        const loadAnalyticsData = async () => {
            const savedPeriod = JSON.parse(
                localStorage.getItem('selectedPeriod')
            )
            const token = JSON.parse(localStorage.getItem(LS_USER))?.token

            if (savedPeriod?.start && savedPeriod?.end && token) {
                try {
                    const data = await handlePeriodSelect({
                        start: new Date(savedPeriod.start),
                        end: new Date(savedPeriod.end),
                        token,
                    })
                    setAnalyticsData(data)
                    // Не удаляем сразу, чтобы при перезагрузке данные сохранялись
                    // localStorage.removeItem('selectedPeriod')
                } catch (error) {
                    console.error('Ошибка при загрузке аналитики:', error)
                }
            }
        }

        loadAnalyticsData()
    }, [setAnalyticsData])

    const handleOpenMobileCalendar = () => {
        navigate('/calendar')
    }

    return (
        <>
            <S.MobileTitleWrapper>
                <S.MobileTitle>Анализ расходов</S.MobileTitle>
            </S.MobileTitleWrapper>
            <S.analiticsMain>
                {!isMobileView && <S.Title>Анализ расходов</S.Title>}
                <S.analiticsContent>
                    {/* Десктопный календарь */}
                    {!isMobileView && <Calendar />}

                    <AnaliticsTracker analyticsData={analyticsData} />
                    {/* Мобильная кнопка "Выбрать другой период" */}
                    {isMobileView && (
                        <S.wrapperButton>
                            <S.calendarButton
                                onClick={handleOpenMobileCalendar}
                            >
                                Выбрать другой период
                            </S.calendarButton>
                        </S.wrapperButton>
                    )}
                </S.analiticsContent>
            </S.analiticsMain>
        </>
    )
}

export default Analitics
