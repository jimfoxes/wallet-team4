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
`

export const TransactionManipulationsContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    gap: 12px;
    width: 36px;
`

export const TransactionButtons = styled.button`
    border: none;
    background-color: transparent;
    outline: none;

    svg {
        cursor: pointer;
    }
`
