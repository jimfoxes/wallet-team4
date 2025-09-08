import styled from 'styled-components'

export const CalendarWrapper = styled.div`
    width: 379px;
    height: 540px;
    border-radius: 30px;
    box-shadow: 0px 20px 67px -12px rgba(0, 0, 0, 0.13);
    background: rgb(255, 255, 255);
    overflow: hidden;
    display: flex;
    flex-direction: column;

    @media (max-width: 1200px) {
        width: 343px;
        border-radius: 0;
        box-shadow: none;
        background: white;
    }
`

export const Header = styled.div`
    position: sticky;
    top: 0;
    background: white;
    z-index: 10;
    flex-shrink: 0;
    padding: 0 32px;
    padding-top: 32px;

    @media (max-width: 1200px) {
        padding: 0;
        padding-top: 12px;
    }
`

export const HeaderTop = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-bottom: 30px;

    @media (max-width: 1200px) {
        margin-bottom: 16px;
    }
`

export const Title = styled.h2`
    color: rgb(0, 0, 0);
    font-size: 24px;
    font-weight: 700;
    line-height: 29px;
    margin: 0;
`

export const ButtonBlock = styled.div`
    display: flex;
    gap: 12px;
`

export const Button = styled.button`
    background: none;
    border: none;
    padding: 0;
    margin: 0;
    color: ${({ $active }) => ($active ? 'rgb(31, 164, 108)' : 'black')};
    font-size: 12px;
    font-weight: ${({ $active }) => ($active ? '600' : '400')};
    line-height: 150%;
    text-align: center;
    text-decoration: ${({ $active }) => ($active ? 'underline' : 'none')};
    cursor: pointer;

    &:hover {
        color: rgb(31, 164, 108);
    }

    &:focus {
        outline: none;
        box-shadow: none;
    }
`

export const Divider = styled.div`
    border: 0.5px solid rgb(153, 153, 153);
    width: calc(100% + 64px);
    margin: 0 -32px;

    @media (max-width: 1200px) {
        position: absolute;
        left: 0;
        width: 100vw;
    }
`

export const Content = styled.div`
    flex-grow: 1;
    overflow-y: auto;
    padding: 0 32px;

    @media (max-width: 1200px) {
        padding: 0;
    }
`

export const DaysOfWeek = styled.div`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    justify-items: center;
    align-items: center;
    gap: 0;
`

export const DayOfWeekCell = styled.div`
    width: 40px;
    height: 40px;
    margin: 3px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    color: rgb(153, 153, 153);
`

export const MonthWrapper = styled.div`
    width: 313px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 12px;
    padding: 0;
`

export const MonthTitle = styled.h3`
    color: rgb(0, 0, 0);
    font-size: 16px;
    font-weight: 600;
    line-height: 20px;
    text-align: left;
    margin-top: 24px;
    background: white;
    padding: 5px 0;
    z-index: 5;
`

export const DatesGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    justify-items: center;
    align-items: start;
    text-align: center;
    gap: 0;
`

export const DayCell = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 60px;
    background: ${({ $isSelected, $isInRange }) =>
        $isSelected || $isInRange
            ? 'rgb(219, 255, 233)'
            : 'rgb(244, 245, 246)'};
    color: rgb(0, 0, 0);
    font-size: 12px;
    font-weight: 400;
    line-height: 15px;
    letter-spacing: 0;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background 0.3s;
    cursor: pointer;
    margin: 3px;

    &:hover {
        background: rgb(219, 255, 233);
    }
`

export const EmptyCell = styled.div`
    width: 40px;
    height: 40px;
    margin: 3px;

    @media (max-width: 1200px) {
        width: 44px;
        height: 44px;
    }
`
export const YearWrapper = styled.div`
    width: 313px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 12px;
    padding: 0;
    margin: 24px 0;
`

export const YearTitle = styled.h3`
    top: 0;
    background-color: white;
    z-index: 1;
    margin: 0;
`

export const YearMonthsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 6px;
    width: 100%;
`

export const MonthButton = styled.button`
    width: 101px;
    height: 34px;
    border-radius: 30px;
    background: ${({ $isSelected, $isInRange }) =>
        $isSelected || $isInRange
            ? 'rgb(219, 255, 233)'
            : 'rgb(244, 245, 246)'};
    border: none;
    color: ${({ $isSelected, $isInRange }) =>
        $isSelected || $isInRange ? 'green' : 'black'};
    font-family: 'Montserrat', sans-serif;
    font-size: 12px;
    font-weight: 400;
    line-height: 15px;
    text-align: center;
    cursor: pointer;
    transition:
        background 0.3s,
        color 0.3s;

    &:hover {
        background: rgb(219, 255, 233);
        color: green;
    }

    &:focus {
        outline: none;
        box-shadow: none;
    }

    @media (max-width: 1200px) {
        width: 110px;
    }
`
