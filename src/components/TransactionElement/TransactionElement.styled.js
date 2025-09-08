import styled from 'styled-components'

export const TransactionElement = styled.p`
    display: block;
    width: 142px;
    font-weight: 400;
    font-size: 12px;
    line-height: 100%;
    letter-spacing: 0px;
    color: ${(props) =>
        props.$isActive ? 'rgba(31, 164, 108, 1)' : 'rgba(0, 0, 0, 1)'};
    text-align: start;

    @media (max-width: 1200px) {
        width: 74px;
        height: 12px;
        font-size: 10px;
        word-break: break-all;

        text-align: ${function ({ $mobileRight }) {
            return $mobileRight ? 'end' : ''
        }};
    }
`

export const TransactionContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    gap: 32px;
    /* height: 15px;
    margin-left: 32px; */
    padding: 8px 0 4px 32px;
    background-color: ${(props) =>
        props.$isActive ? 'rgba(219, 255, 233, 1)' : 'transparent'};
    flex-wrap: wrap;

    @media (max-width: 1200px) {
        gap: 16px;
        padding: 8px 16px;
        background-color: ${(props) =>
            props.$isActive ? 'rgba(219, 255, 233, 1)' : 'transparent'};
    }

    @media (max-width: 405px) {
        gap: 12px;
    }

    @media (max-width: 361px) {
        gap: 10px;
    }
`

export const TransactionManipulationsContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    gap: 12px;
    width: 36px;

    @media (max-width: 1200px) {
        display: none;
    }
`

export const TransactionButtons = styled.button`
    border: none;
    background-color: transparent;
    outline: none;

    svg {
        cursor: pointer;
    }
`
export const MobileButtonsContainer = styled.div`
    display: none;

    @media (max-width: 1200px) {
        display: flex;
        flex-direction: column;
        gap: 12px;
        width: 100%;
        padding-top: 8px;
    }
`

export const MobileEditButton = styled.button`
    display: none;

    @media (max-width: 1200px) {
        display: block;
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
        cursor: pointer;
    }
`

export const MobileDeleteButton = styled.button`
    display: none;

    @media (max-width: 1200px) {
        display: block;
        border: none;
        background-color: transparent;
        font-weight: 600;
        font-size: 12px;
        line-height: 100%;
        letter-spacing: 0px;
        color: #f25050;
        cursor: pointer;
        text-align: center;
        padding: 8px;
    }
`
