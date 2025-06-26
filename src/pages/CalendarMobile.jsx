import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Calendar from '../components/calendar/calendar'
import styled from 'styled-components'

export const CalendarMobile = () => {
    const navigate = useNavigate()

    const [analyticsData, setAnalyticsData] = useState([])

    return (
        <Wrapper>
            <Header>
                <BackButton onClick={() => navigate(-1)}>
                    <ArrowIcon
                        xmlns="http://www.w3.org/2000/svg"
                        width="11.66"
                        height="11.67"
                        viewBox="0 0 11.66 11.67"
                        fill="none"
                    >
                        <path
                            d="M8.27 0L3.38 0C1.26 0 0 1.26 0 3.38L0 8.27C0 10.4 1.26 11.66 3.38 11.66L8.27 11.66C10.39 11.66 11.66 10.4 11.66 8.27L11.66 3.38C11.66 1.26 10.4 0 8.27 0ZM9.33 6.27L3.38 6.27L5.14 8.02C5.31 8.19 5.31 8.47 5.14 8.64C5.05 8.73 4.94 8.77 4.83 8.77C4.72 8.77 4.61 8.73 4.52 8.64L2.02 6.14C1.94 6.06 1.89 5.95 1.89 5.83C1.89 5.71 1.94 5.6 2.02 5.52L4.52 3.02C4.69 2.85 4.97 2.85 5.14 3.02C5.31 3.19 5.31 3.47 5.14 3.64L3.38 5.39L9.33 5.39C9.57 5.39 9.77 5.59 9.77 5.83C9.77 6.07 9.57 6.27 9.33 6.27Z"
                            fill="#999999"
                        />
                    </ArrowIcon>
                    <Text>Анализ расходов</Text>
                </BackButton>
            </Header>
            <CalendarWrapper>
                <Calendar setAnalyticsData={setAnalyticsData} />
            </CalendarWrapper>

            <Footer>
                <SelectButton onClick={() => navigate(-1)}>
                    Выбрать период
                </SelectButton>
            </Footer>
        </Wrapper>
    )
}

export default CalendarMobile

const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    background: white;
    overflow: hidden;
`

const Header = styled.div`
    padding: 20px 16px 0;
    font-weight: bold;
    font-size: 16px;
`

const BackButton = styled.button`
    display: flex;
    align-items: center;
    gap: 6px;
    background: none;
    border: none;
    padding: 0;
    margin-top: 24px;
`

const ArrowIcon = styled.svg`
    width: 11.66px;
    height: 11.66px;
    flex-shrink: 0;
`

const Text = styled.span`
    color: #999999;
    font-family: Montserrat, sans-serif;
    font-size: 12px;
    font-weight: 600;
    line-height: 150%;
    letter-spacing: 0;
    text-align: center;
`

const CalendarWrapper = styled.div`
    flex-grow: 1;
    overflow-y: auto;
    padding: 0 16px;
`

const Footer = styled.div`
    padding: 20px 16px;
    padding: 20px 16px;
    background: white;
    box-shadow: 0 -20px 10px rgba(0, 0, 0, 0.05);
`

const SelectButton = styled.button`
    width: 343px;
    height: 39px;
    border-radius: 6px;
    background: rgb(31, 164, 108);
    color: rgb(255, 255, 255);
    font-family: Montserrat;
    font-size: 12px;
    font-weight: 600;
    line-height: 15px;
    letter-spacing: 0px;
    text-align: center;

    &:focus {
        outline: none;
        box-shadow: none;
    }
`
