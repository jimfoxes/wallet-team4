import styled from 'styled-components'

export const LoadingContainer = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;

    position: ${function (props) {
        return props.$isopacity ? 'absolute' : 'relative'
    }};

    background: ${function (props) {
        return props.$isopacity ? 'rgba(0, 0, 0, 0.4)' : 'rgb(0, 0, 0, 0)'
    }};

    z-index: 7;

    @media screen and (max-width: 1200px) {
        overflow-y: auto;
    }
`

export const LoadingPage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
`

export const LoadingPageLoader = styled.div`
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;

    div {
        display: inline-block;
        position: absolute;
        left: 8px;
        width: 16px;
        background: rgba(31, 164, 108, 1);
        animation: loader 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;
    }

    div:nth-child(1) {
        left: 8px;
        animation-delay: -0.24s;
    }

    div:nth-child(2) {
        left: 32px;
        animation-delay: -0.12s;
    }

    div:nth-child(3) {
        left: 56px;
        animation-delay: 0;
    }

    @keyframes loader {
        0% {
            top: 8px;
            height: 64px;
        }
        50%,
        100% {
            top: 24px;
            height: 32px;
        }
    }
`
