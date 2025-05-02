import styled from 'styled-components'

export const TrackerCard = styled.section`
    border-radius: 30px;
    box-shadow: 0px 20px 67px -12px rgba(0, 0, 0, 0.13);
    background-color: #fff;
    max-width: 789px;
    padding: 38px 32px;
    overflow: hidden;
    font-family:
        Montserrat,
        -apple-system,
        Roboto,
        Helvetica,
        sans-serif;

    @media (max-width: 991px) {
        padding-left: 20px;
        padding-right: 20px;
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
`

export const HeaderContainer = styled.header`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;

    @media (max-width: 991px) {
        max-width: 100%;
    }
`

export const HeaderContent = styled.div`
    width: 268px;
    max-width: 100%;
`

export const TotalAmount = styled.h2`
    color: rgba(0, 0, 0, 1);
    font-size: 24px;
    font-weight: 700;
    margin: 0;
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
`

export const CategoryAmount = styled.div`
    font-size: 16px;
    font-weight: 600;
    color: rgba(0, 0, 0, 1);
`

export const CategoryBar = styled.div`
    border-radius: 12px;
    display: flex;
    margin-top: 12px;
    width: 100%;
    min-height: 4px;
`

export const CategoryName = styled.div`
    font-size: 12px;
    font-weight: 400;
    margin-top: 12px;
    color: rgba(0, 0, 0, 1);
`
export const analiticsMain = styled.main`
    width: 100%;
    padding-right: calc(50% - 600px);
    padding-left: calc(50% - 600px);
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

export const analiticsContent = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: 1200px) {
        display: block;
    }
`
