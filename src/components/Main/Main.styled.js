import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const OverlayWrapper = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 5;
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

    @media (max-width: 1200px) {
        display: none;
    }
`

export const MobileTitleWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    align-content: flex-end;
    padding-left: calc(50% - 171px);
    padding-right: calc(50% - 171px);
    height: 53px;
    background-color: #ffffff;
    justify-content: space-between;

    @media (min-width: 1201px) {
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
        display: flex;
        padding-right: calc(50% - 200px);
        padding-left: calc(50% - 200px);
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
    height: 93px;
    padding-left: 32px;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 1200px) {
        margin: 0px 0px 0px 0px;
        padding-bottom: 28px;
        height: 0px;
        padding-left: 0;
    }
`

export const TitleCostsTable = styled.h2`
    height: 30px;
    font-weight: 700;
    font-size: 24px;
    text-align: left;

    @media (max-width: 1200px) {
        display: none;
    }
`

export const FilterSortingContainer = styled.div`
    position: relative;
    display: flex;
    gap: 24px;

    height: 30px;
    padding-top: 12px;

    @media (max-width: 1200px) {
        padding: 0px 0px 0px 16px;
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

        @media (max-width: 1200px) {
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

export const FixedHeaderContainer = styled.div`
    position: sticky;
    top: 0;
    background-color: white;
    z-index: 5;

    @media (max-width: 1200px) {
        padding-top: 21px;
    }
`

export const ColumnsContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    gap: 32px;
    height: 15px;
    padding-left: 32px;
    padding-bottom: 16px;
    margin-bottom: 10px;
    border-bottom: 0.5px solid #99999970;

    position: sticky;
    top: 0;
    background-color: white;
    z-index: 5;

    @media (max-width: 1200px) {
        gap: 16px;
        padding-left: 16px;
        top: 60px;
    }

    @media (max-width: 405px) {
        gap: 12px;
    }

    @media (max-width: 360px) {
        gap: 10px;
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

    @media (max-width: 1200px) {
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
    @media (max-width: 1200px) {
        display: none;
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

    @media (max-width: 1200px) {
        display: none;
    }
`

export const MobileActionButtons = styled.div`
    display: none;

    @media (max-width: 1200px) {
        display: flex;
        flex-direction: column;
        gap: 12px;
        width: 100%;
        padding: 24px 16px;
        background-color: #ffffff;
        position: sticky;
        bottom: 0;
        border-top: 1px solid #e0e0e0;
        align-items: center;
    }
`
export const MobileEditButton = styled.button`
    height: 39px;
    border: none;
    border-radius: 6px;
    padding: 12px 99px;
    background-color: rgba(31, 164, 108, 1);
    font-weight: 600;
    font-size: 12px;
    line-height: 100%;
    letter-spacing: 0px;
    color: rgba(255, 255, 255, 1);
    cursor: pointer;
`

export const MobileDeleteButton = styled.button`
    border: none;
    border-bottom: 1px solid rgba(153, 153, 153, 1);
    background-color: transparent;
    font-weight: 400;
    font-size: 12px;
    line-height: 150%;
    letter-spacing: 0px;
    color: rgba(153, 153, 153, 1);
    cursor: pointer;
    text-align: center;
`
