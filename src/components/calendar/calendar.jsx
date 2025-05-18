import { useEffect, useState } from 'react'
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
} from './calendar.styled.js'

const Calendar = ({ onPeriodSelect }) => {
    const [mode, setMode] = useState('month')
    const [startDate, setStartDate] = useState(null)
    const [endDate, setEndDate] = useState(null)
    const [startMonth, setStartMonth] = useState(null)
    const [endMonth, setEndMonth] = useState(null)

    const daysOfWeek = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс']

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
            setStartDate(clickedDate)
            setEndDate(null)
        } else if (startDate && !endDate) {
            if (clickedDate > startDate) {
                setEndDate(clickedDate)
            } else {
                setEndDate(startDate)
                setStartDate(clickedDate)
            }
        }
    }

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

    useEffect(() => {
        if (startDate && endDate) {
            const from = startDate.toISOString().split('T')[0]
            const to = endDate.toISOString().split('T')[0]
            onPeriodSelect?.(from, to)
        }
    }, [startDate, endDate])

    useEffect(() => {
        if (startMonth && endMonth) {
            const from = new Date(startMonth.year, startMonth.month, 1)
            const to = new Date(endMonth.year, endMonth.month + 1, 0)
            onPeriodSelect?.(
                from.toISOString().split('T')[0],
                to.toISOString().split('T')[0]
            )
        }
    }, [startMonth, endMonth])

    return (
        <CalendarWrapper>
            <Header>
                <HeaderTop>
                    <Title>Период</Title>
                    <ButtonBlock>
                        <Button
                            $active={mode === 'month'}
                            onClick={() => setMode('month')}
                        >
                            Месяц
                        </Button>
                        <Button
                            $active={mode === 'year'}
                            onClick={() => setMode('year')}
                        >
                            Год
                        </Button>
                    </ButtonBlock>
                </HeaderTop>

                {mode === 'month' && (
                    <>
                        <DaysOfWeek>
                            {daysOfWeek.map((day) => (
                                <DayOfWeekCell key={day}>{day}</DayOfWeekCell>
                            ))}
                        </DaysOfWeek>
                        <Divider />
                    </>
                )}

                {mode === 'year' && (
                    <>
                        <Divider />
                    </>
                )}
            </Header>

            <Content>
                {mode === 'month' && (
                    <>
                        {months.map(({ year, month }, idx) => {
                            const dates = generateMonth(year, month)
                            return (
                                <MonthWrapper key={idx}>
                                    <MonthTitle>
                                        {allMonths[month % 12]} {year}
                                    </MonthTitle>
                                    <DatesGrid>
                                        {dates.map((date, i) =>
                                            date ? (
                                                <DayCell
                                                    key={i}
                                                    $isSelected={isSelected(
                                                        year,
                                                        month,
                                                        date
                                                    )}
                                                    $isInRange={isInRange(
                                                        year,
                                                        month,
                                                        date
                                                    )}
                                                    onClick={() =>
                                                        handleDateClick(
                                                            year,
                                                            month,
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
                        {generateYears(2020, 2030).map((year) => (
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
                                                handleMonthClick(year, index)
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
        </CalendarWrapper>
    )
}

export default Calendar

const generateYears = (start, end) => {
    const years = []
    for (let year = start; year <= end; year++) {
        years.push(year)
    }
    return years
}
