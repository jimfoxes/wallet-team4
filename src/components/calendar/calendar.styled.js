import styled from 'styled-components'

export const CalendarWrapper = styled.div`
    width: 379px;
    height: 540px;
    border-radius: 30px;
    box-shadow: 0px 20px 67px -12px rgba(0, 0, 0, 0.13);

    overflow: hidden;
    display: flex;
    flex-direction: column;

    @media (max-width: 1200px) {
        width: auto;
        padding-right: calc(50% - 187px);
        padding-left: calc(50% - 187px);
        border-radius: 0;
        box-shadow: none;
        height: 627px;
    }
`

export const MobileCalendarWrapper = styled.div`
    background: rgb(255, 255, 255);
    overflow: hidden;
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
        padding: 12px 16px 0 16px;
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
    }
`

export const Content = styled.div`
    flex-grow: 1;
    overflow-y: auto;
    padding: 0px 24px 0px 32px;
    max-height: 420px;

    /* Стили для тонкой полосы прокрутки */
    &::-webkit-scrollbar {
        width: 6px;
    }

    &::-webkit-scrollbar-track {
        background: transparent;
    }

    &::-webkit-scrollbar-thumb {
        border-radius: 30px;
        background: rgba(217, 217, 217, 1);
    }

    &::-webkit-scrollbar-thumb:hover {
        background-color: rgba(0, 0, 0, 0.4);
    }

    /* Для Firefox */
    scrollbar-width: thin;
    scrollbar-color: rgba(217, 217, 217, 1) transparent;

    @media (max-width: 1200px) {
        padding: 0 0 0 16px;
        max-height: 457px;
    }
`

export const DaysOfWeek = styled.div`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    justify-items: center;
    align-items: center;
    gap: 6px;
`

export const DayOfWeekCell = styled.div`
    width: 40px;
    height: 27px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    color: rgb(153, 153, 153);

    @media (max-width: 1200px) {
        width: 44px;
    }
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
    gap: 6px;
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

    &:hover {
        background: rgb(219, 255, 233);
    }

    @media (max-width: 1200px) {
        width: 44px;
        height: 44px;
    }
`

export const EmptyCell = styled.div`
    width: 40px;
    height: 40px;

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

export const MobileBackToAnalitics = styled.div`
    display: flex;
    flex-direction: row;
    height: 42px;
    gap: 6px;
    background-color: #ffffff;
    justify-content: flex-start;
    align-items: end;
    padding-right: calc(50% - 171px);
    padding-left: calc(50% - 171px);

    p {
        color: #999999;
        font-weight: 600;
        font-size: 12px;
        letter-spacing: 0px;
        cursor: pointer;
    }

    @media (min-width: 1201px) {
        display: none;
    }
`

export const WrapperButton = styled.div`
    display: flex;
    flex-direction: column;
    padding: 24px 16px;
    background: #ffffff;
    box-shadow: 0px -20px 67px -12px rgba(0, 0, 0, 0.13);
`
export const CalendarButton = styled.button`
    height: 39px;
    border: none;
    border-radius: 6px;
    padding: 12px;
    background-color: rgba(31, 164, 108, 1);
    font-weight: 600;
    font-size: 12px;
    line-height: 100%;
    letter-spacing: 0px;
    color: rgba(255, 255, 255, 1);
`
