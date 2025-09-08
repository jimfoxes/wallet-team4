import styled from 'styled-components'

export const TrackerCard = styled.section`
    border-radius: 30px;
    box-shadow: 0px 20px 67px -12px rgba(0, 0, 0, 0.13);
    background-color: #fff;
    padding: 38px 32px;
    overflow: hidden;
    font-family:
        Montserrat,
        -apple-system,
        Roboto,
        Helvetica,
        sans-serif;

    @media (max-width: 1200px) {
        box-shadow: none;
        border-radius: 0;
        padding: 24px 16px;
    }
`

export const AnaliticsCategoriesContainer = styled.div`
    display: flex;
    margin-top: 21px;
    align-items: flex-end;
    gap: 32px;
    color: rgba(0, 0, 0, 1);
    text-align: center;
    justify-content: center;
    flex-wrap: wrap;

    @media (max-width: 1200px) {
        gap: 6px;
        justify-content: space-between;
        flex-wrap: nowrap;
        width: 100%;
        margin-top: 24px;
    }
`

export const HeaderContainer = styled.header`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;

    @media (max-width: 1200px) {
        max-width: 100%;
    }
`

export const HeaderContent = styled.div`
    max-width: 100%;
`

export const TotalAmount = styled.h2`
    color: rgba(0, 0, 0, 1);
    font-size: 24px;
    font-weight: 700;
    margin: 0;
    text-align: left;

    @media (max-width: 1200px) {
        font-size: 20px;
    }
`

export const DateContainer = styled.div`
    display: flex;
    margin-top: 12px;
    width: 100%;
    align-items: center;
    gap: 4px;
    font-size: 12px;
    color: rgba(153, 153, 153, 1);
    text-align: center;
    justify-content: flex-start;
`

export const DateLabel = styled.span`
    font-weight: 400;
    align-self: stretch;
    margin-top: auto;
    margin-bottom: auto;
`

export const DateValue = styled.span`
    font-weight: 600;
    align-self: stretch;
    margin-top: auto;
    margin-bottom: auto;
`

export const CategoryContainer = styled.div`
    flex-grow: 1;
    flex-shrink: 1;
    width: 94px;
    @media (max-width: 1200px) {
        flex: 1;
        min-width: 0;
        width: auto;
    }
`

export const CategoryAmount = styled.div`
    font-size: 16px;
    font-weight: 600;
    color: rgba(0, 0, 0, 1);
    @media (max-width: 1200px) {
        font-size: 10px;
        line-height: 12px;
    }
`

export const CategoryBar = styled.div`
    border-radius: 12px;
    display: flex;
    margin-top: 12px;
    width: 100%;
    min-height: 4px;
    @media (max-width: 1200px) {
        margin-top: 10px;
        border-radius: 6px;
    }
`

export const CategoryName = styled.div`
    font-size: 12px;
    font-weight: 400;
    margin-top: 12px;
    color: rgba(0, 0, 0, 1);
    @media (max-width: 1200px) {
        font-size: 10px;
        margin-top: 10px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
`
export const analiticsMain = styled.main`
    width: 100%;
    padding-right: calc(50% - 600px);
    padding-left: calc(50% - 600px);

    @media (max-width: 1200px) {
        display: flex;
        padding-right: calc(50% - 187px);
        padding-left: calc(50% - 187px);
    }
`

export const Title = styled.h1`
    font-weight: 700;
    font-size: 32px;
    line-height: 150%;
    letter-spacing: 0px;
    margin: 36px 0 32px 0;
    text-align: start;
    padding-left: calc(50% - 600px);

    min-width: 235px;
    height: 48px;
`
export const MobileTitleWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-content: flex-end;
    padding-left: calc(50% - 171px);
    padding-right: calc(50% - 171px);
    height: 53px;
    background-color: #ffffff;

    @media (min-width: 1201px) {
        display: none;
    }
`

export const MobileTitle = styled.h1`
    height: 29px;
    font-size: 24px;
    line-height: 100%;
`

export const analiticsContent = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: 1200px) {
        display: block;
    }
`
export const wrapperButton = styled.div`
    display: flex;
    flex-direction: column;
    padding: 24px 16px;
    background: #ffffff;
    box-shadow: 0px -20px 67px -12px rgba(0, 0, 0, 0.13);
`
export const calendarButton = styled.button`
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
