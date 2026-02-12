import { useState, useEffect, useCallback, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import {
    CalendarWrapper,
    Header,
    ButtonBlock,
    Content,
    DaysOfWeek,
    MonthTitle,
    DatesGrid,
    DayCell,
    YearTitle,
    HeaderTop,
    Title,
    Button,
    Divider,
    MonthWrapper,
    EmptyCell,
    DayOfWeekCell,
    YearMonthsGrid,
    MonthButton,
    YearWrapper,
    MobileBackToAnalitics,
    MobileCalendarWrapper,
    WrapperButton,
    CalendarButton,
    MonthNavigation,
    NavigationArrow,
} from './Calendar.styled.js'
import { handlePeriodSelect } from '../../services/transactionsHandler.js'
import { LS_USER } from '../../services/utilities.js'
import { AnalyticsContext } from '../../сontext/AnaliticsContext.js'

const Calendar = () => {
    const [mode, setMode] = useState('month')
    const [startDate, setStartDate] = useState(null)
    const [endDate, setEndDate] = useState(null)
    const [startMonth, setStartMonth] = useState(null)
    const [endMonth, setEndMonth] = useState(null)
    const [isSelecting, setIsSelecting] = useState(false)
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 1200)
    const [monthOffset, setMonthOffset] = useState(0)

    const navigate = useNavigate()
    const { setAnalyticsData } = useContext(AnalyticsContext)

    const daysOfWeek = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс']

    const generateMonth = (year, month) => {
        const date = new Date(year, month, 1)
        const days = []

        let startDay = date.getDay()
        if (startDay === 0) startDay = 7

        for (let i = 1; i < startDay; i++) {
            days.push(null)
        }

        while (date.getMonth() === month) {
            days.push(date.getDate())
            date.setDate(date.getDate() + 1)
        }

        return days
    }

    const generateMonths = (startYear, startMonth, count) => {
        const result = []
        let year = startYear
        let month = startMonth

        for (let i = 0; i < count; i++) {
            result.push({ year, month })
            month++
            if (month > 11) {
                month = 0
                year++
            }
        }

        return result
    }

    const handleDateClick = (year, month, day) => {
        const clickedDate = new Date(year, month, day)

        if (!startDate || (startDate && endDate)) {
            setIsSelecting(true)
            setStartDate(clickedDate)
            setEndDate(null)
        } else if (startDate && !endDate) {
            if (clickedDate > startDate) {
                setEndDate(clickedDate)
                setIsSelecting(false)
            } else {
                setEndDate(startDate)
                setStartDate(clickedDate)
                setIsSelecting(false)
            }
        }
    }

    const handleMonthClick = (year, month) => {
        const clicked = { year, month }

        if (!startMonth || (startMonth && endMonth)) {
            setStartMonth(clicked)
            setEndMonth(null)
        } else if (startMonth && !endMonth) {
            if (
                clicked.year > startMonth.year ||
                (clicked.year === startMonth.year &&
                    clicked.month > startMonth.month)
            ) {
                setEndMonth(clicked)
            } else {
                setEndMonth(startMonth)
                setStartMonth(clicked)
            }
        }
    }

    const token = JSON.parse(localStorage.getItem(LS_USER)).token

    const sendPeriod = useCallback(async () => {
        let start = null
        let end = null

        if (mode === 'month' && startDate && endDate) {
            start = startDate
            end = endDate
        } else if (mode === 'year' && startMonth && endMonth) {
            start = new Date(startMonth.year, startMonth.month, 1)
            end = new Date(endMonth.year, endMonth.month + 1, 0)
        }

        if (start && end) {
            console.log('SEND PERIOD ->', start, end)
            localStorage.setItem(
                'selectedPeriod',
                JSON.stringify({ start, end })
            )
            try {
                const transactions = await handlePeriodSelect({
                    start,
                    end,
                    token,
                })
                if (setAnalyticsData) {
                    setAnalyticsData(transactions)
                }
                console.log('6666', transactions)
                if (isMobile) {
                    navigate('/analytics')
                }
            } catch (error) {
                console.error('Failed to fetch transactions:', error)
            }
        }
    }, [
        mode,
        startDate,
        endDate,
        startMonth,
        endMonth,
        token,
        setAnalyticsData,
        isMobile,
        navigate,
    ])

    useEffect(() => {
        if (!isMobile) {
            const hasFullDayRange =
                mode === 'month' && startDate && endDate && !isSelecting
            const hasFullMonthRange =
                mode === 'year' && startMonth && endMonth && !isSelecting

            if (hasFullDayRange || hasFullMonthRange) {
                sendPeriod()
            }
        }
    }, [
        sendPeriod,
        startDate,
        endDate,
        startMonth,
        endMonth,
        isSelecting,
        mode,
        isMobile,
    ])

    const isSelected = (year, month, day) => {
        if (!day) return false
        const current = new Date(year, month, day)
        return (
            (startDate &&
                current.toDateString() === startDate.toDateString()) ||
            (endDate && current.toDateString() === endDate.toDateString())
        )
    }

    const isInRange = (year, month, day) => {
        if (!day || !startDate || !endDate) return false
        const current = new Date(year, month, day)
        return current > startDate && current < endDate
    }

    const isMonthSelected = (year, month) => {
        return (
            (startMonth &&
                startMonth.year === year &&
                startMonth.month === month) ||
            (endMonth && endMonth.year === year && endMonth.month === month)
        )
    }

    const isMonthInRange = (year, month) => {
        if (!startMonth || !endMonth) return false

        const start = new Date(startMonth.year, startMonth.month)
        const end = new Date(endMonth.year, endMonth.month)
        const current = new Date(year, month)

        return current > start && current < end
    }

    const currentDate = new Date()
    const months = generateMonths(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        12
    )

    const allMonths = [
        'Январь',
        'Февраль',
        'Март',
        'Апрель',
        'Май',
        'Июнь',
        'Июль',
        'Август',
        'Сентябрь',
        'Октябрь',
        'Ноябрь',
        'Декабрь',
    ]

    const generateYears = (start, end) => {
        const years = []
        for (let year = start; year <= end; year++) {
            years.push(year)
        }
        return years
    }

    const handleModeChange = (newMode) => {
        if (mode !== newMode) {
            setStartDate(null)
            setEndDate(null)
            setStartMonth(null)
            setEndMonth(null)
            setIsSelecting(false)
            setMode(newMode)
            setMonthOffset(0)
        }
    }

    const showPreviousMonth = () => {
        setMonthOffset((prev) => prev + 1)
    }

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 1200)
        }

        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return (
        <>
            <MobileBackToAnalitics
                onClick={(event) => {
                    event.stopPropagation()
                    event.preventDefault()
                    navigate('/analytics')
                }}
            >
                <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M9.44425 1.16669H4.55591C2.43258 1.16669 1.16675 2.43252 1.16675 4.55585V9.43835C1.16675 11.5675 2.43258 12.8334 4.55591 12.8334H9.43841C11.5617 12.8334 12.8276 11.5675 12.8276 9.44419V4.55585C12.8334 2.43252 11.5676 1.16669 9.44425 1.16669ZM10.5001 7.43752H4.55591L6.31175 9.19335C6.48091 9.36252 6.48091 9.64252 6.31175 9.81169C6.22425 9.89919 6.11341 9.94002 6.00258 9.94002C5.89175 9.94002 5.78091 9.89919 5.69341 9.81169L3.19091 7.30919C3.10925 7.22752 3.06258 7.11669 3.06258 7.00002C3.06258 6.88335 3.10925 6.77252 3.19091 6.69085L5.69341 4.18835C5.86258 4.01919 6.14258 4.01919 6.31175 4.18835C6.48091 4.35752 6.48091 4.63752 6.31175 4.80669L4.55591 6.56252H10.5001C10.7392 6.56252 10.9376 6.76085 10.9376 7.00002C10.9376 7.23919 10.7392 7.43752 10.5001 7.43752Z"
                        fill="#999999"
                    />
                </svg>
                <p>Анализ расходов</p>
            </MobileBackToAnalitics>
            <CalendarWrapper>
                <MobileCalendarWrapper>
                    <Header>
                        <HeaderTop>
                            <Title $isMobile={isMobile}>
                                {isMobile ? 'Выбор периода' : 'Период'}
                            </Title>
                            <ButtonBlock>
                                <Button
                                    $active={mode === 'month'}
                                    onClick={() => handleModeChange('month')}
                                >
                                    Месяц
                                </Button>
                                <Button
                                    $active={mode === 'year'}
                                    onClick={() => handleModeChange('year')}
                                >
                                    Год
                                </Button>
                            </ButtonBlock>
                        </HeaderTop>

                        {mode === 'month' && (
                            <>
                                <DaysOfWeek>
                                    {daysOfWeek.map((day) => (
                                        <DayOfWeekCell key={day}>
                                            {day}
                                        </DayOfWeekCell>
                                    ))}
                                </DaysOfWeek>
                                <Divider />
                            </>
                        )}

                        {mode === 'year' && <Divider />}
                    </Header>

                    <Content>
                        {mode === 'month' && (
                            <>
                                {months.map(({ year, month }, idx) => {
                                    const adjustedDate = new Date(
                                        year,
                                        month - monthOffset,
                                        1
                                    )
                                    const adjustedYear =
                                        adjustedDate.getFullYear()
                                    const adjustedMonth =
                                        adjustedDate.getMonth()

                                    const dates = generateMonth(
                                        adjustedYear,
                                        adjustedMonth
                                    )
                                    const isFirstMonth = idx === 0
                                    return (
                                        <MonthWrapper key={idx}>
                                            <MonthNavigation>
                                                <MonthTitle>
                                                    {
                                                        allMonths[
                                                            adjustedMonth % 12
                                                        ]
                                                    }{' '}
                                                    {adjustedYear}
                                                </MonthTitle>
                                                {isFirstMonth && (
                                                    <NavigationArrow
                                                        onClick={
                                                            showPreviousMonth
                                                        }
                                                    >
                                                        <svg
                                                            width="16"
                                                            height="16"
                                                            viewBox="0 0 16 16"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path
                                                                d="M12 10L8 6L4 10"
                                                                stroke="#333333"
                                                                strokeWidth="2"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            />
                                                        </svg>
                                                    </NavigationArrow>
                                                )}
                                            </MonthNavigation>
                                            <DatesGrid>
                                                {dates.map((date, i) =>
                                                    date ? (
                                                        <DayCell
                                                            key={i}
                                                            $isSelected={isSelected(
                                                                adjustedYear,
                                                                adjustedMonth,
                                                                date
                                                            )}
                                                            $isInRange={isInRange(
                                                                adjustedYear,
                                                                adjustedMonth,
                                                                date
                                                            )}
                                                            onClick={() =>
                                                                handleDateClick(
                                                                    adjustedYear,
                                                                    adjustedMonth,
                                                                    date
                                                                )
                                                            }
                                                        >
                                                            {date}
                                                        </DayCell>
                                                    ) : (
                                                        <EmptyCell key={i} />
                                                    )
                                                )}
                                            </DatesGrid>
                                        </MonthWrapper>
                                    )
                                })}
                            </>
                        )}

                        {mode === 'year' && (
                            <>
                                {generateYears(2024, 2030).map((year) => (
                                    <YearWrapper key={year}>
                                        <YearTitle>{year}</YearTitle>
                                        <YearMonthsGrid>
                                            {allMonths.map((month, index) => (
                                                <MonthButton
                                                    key={index}
                                                    $isSelected={isMonthSelected(
                                                        year,
                                                        index
                                                    )}
                                                    $isInRange={isMonthInRange(
                                                        year,
                                                        index
                                                    )}
                                                    onClick={() =>
                                                        handleMonthClick(
                                                            year,
                                                            index
                                                        )
                                                    }
                                                >
                                                    {month}
                                                </MonthButton>
                                            ))}
                                        </YearMonthsGrid>
                                    </YearWrapper>
                                ))}
                            </>
                        )}
                    </Content>
                    {isMobile && (
                        <WrapperButton>
                            <CalendarButton onClick={sendPeriod}>
                                Выбрать период
                            </CalendarButton>
                        </WrapperButton>
                    )}
                </MobileCalendarWrapper>
            </CalendarWrapper>
        </>
    )
}

export default Calendar
