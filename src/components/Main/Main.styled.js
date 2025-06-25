import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const OverlayWrapper = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 10;
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

    @media (max-width: 375px) {
        display: none;
    }
`

export const MobileTitleWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    align-content: flex-end;
    gap: 58px;
    padding-left: 16px;
    height: 51px;
    background-color: #ffffff;

    @media (min-width: 376px) {
        display: none;
    }
`

export const MobileTitle = styled.h1`
    width: 175px;
    height: 29px;
    font-size: 24px;
    line-height: 100%;
`

export const MobileNewTransaction = styled(NavLink)`
    display: flex;
    align-items: center;
    gap: 6px;
    font-weight: 600;
    font-size: 12px;
    line-height: 150%;
    letter-spacing: 0px;
`

export const Container = styled.div`
    height: calc(100vh - 64px);
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-gap: 20px;
    overflow: hidden;
    padding-right: calc(50% - 600px);
    padding-left: calc(50% - 600px);

    @media (max-width: 1200px) {
        grid-template-rows: repeat(2, 618px);
    }
`

export const TitleContainer = styled.h1`
    grid-column: 1/13;
    height: 48px;
    margin-top: 36px;
    margin-bottom: 32px;
    font-weight: 700;
    font-size: 32px;
    text-align: left;
`

export const CostsTable = styled.div`
    position: relative;
    grid-column: 1/9;
    background-color: #ffffff;
    max-height: 618px;
    border-radius: 30px;
    overflow-y: ${function ({ $blockScroll }) {
        return $blockScroll ? 'hidden' : 'scroll'
    }};

    @media (max-width: 1200px) {
        grid-column-start: 1;
        width: 789px;
        border-radius: 0px;
    }
`

export const HeaderCostsTable = styled.div`
    display: flex;
    margin: 32px;
    justify-content: space-between;

    @media (max-width: 375px) {
        margin: 21px 0px 0px 0px;
    }
`

export const TitleCostsTable = styled.h2`
    height: 30px;
    font-weight: 700;
    font-size: 24px;
    text-align: left;

    @media (max-width: 375px) {
        display: none;
    }
`

export const FilterSortingContainer = styled.div`
    position: relative;
    display: flex;
    gap: 24px;

    height: 30px;
    padding-top: 12px;

    @media (max-width: 375px) {
        padding: 0px 0px 24px 16px;
        height: 15px;
    }
`

export const FilterSortingElement = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;

    a {
        font-weight: 400;
        font-size: 12px;
        line-height: 150%;
        max-width: ${function ({ $isCategory }) {
            return $isCategory ? '260px' : '160px'
        }};

        @media (max-width: 375px) {
            font-size: 10px;
            letter-spacing: 0px;
        }

        span {
            color: rgba(31, 164, 108, 1);
            text-decoration: underline;
            font-weight: 600;
            font-size: 12px;
        }
    }
`

export const ColumnsContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    gap: 32px;
    height: 15px;
    margin-left: 32px;

    @media (max-width: 375px) {
        gap: 16px;
        margin-left: 16px;
        height: 18px;
    }
`

export const ColumnsElement = styled.h4`
    display: block;
    width: 142px;
    font-weight: 400;
    font-size: 12px;
    line-height: 100%;
    letter-spacing: 0px;
    color: rgba(153, 153, 153, 1);
    text-align: start;

    @media (max-width: 375px) {
        width: 74px;
        font-size: 10px;
        line-height: 100%;

        text-align: ${function ({ $mobileRight }) {
            return $mobileRight ? 'end' : ''
        }};
    }
`

export const ColumnsShadowElement = styled.div`
    width: 36px;
`

export const DemarcationLine = styled.div`
    width: 100%;
    border: none;
    border-top: 0.5px solid #999999;
    margin-top: 6px;
    margin-bottom: 18px;

    @media (max-width: 375px) {
        margin-top: 0px;
        margin-bottom: 14px;
    }
`

export const BlurWrapper = styled.div`
    position: absolute;
    top: 0;
    height: 100%;
    width: 100%;
    backdrop-filter: blur(2px);
`

export const TransactionsContainer = styled.div`
    display: flex;
    flex-direction: column;
`

export const Costsform = styled.div`
    grid-column: 9/13;
    background-color: #ffffff;
    max-height: 618px;
    border-radius: 30px;

    @media (max-width: 1200px) {
        grid-column-start: 1;
        width: 379px;
    }

    @media (max-width: 375px) {
        display: none;
    }
`
