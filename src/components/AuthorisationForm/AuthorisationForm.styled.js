import { styled } from 'styled-components'

export const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    background-color: rgba(244, 245, 246, 1);
`

export const Modal = styled.div`
    width: 100%;
    height: 100%;
    min-width: 380px;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media (max-width: 1200px) {
        padding-right: calc(50% - 171px);
        padding-left: calc(50% - 171px);
        background-color: rgba(255, 255, 255, 1);
    }
`

export const ModalBlock = styled.div`
    display: block;
    margin: 0 auto;
    background-color: rgba(255, 255, 255, 1);
    width: 380px;
    padding: 32px;
    border-radius: 30px;
    border: none;
    box-shadow: 0px 20px 67px -12px rgba(0, 0, 0, 0.13);

    @media (max-width: 1200px) {
        max-width: 343px;
        padding: 0;
        box-shadow: none;
        border-radius: 0;
        background-color: transparent;
    }
`

export const ModalTitle = styled.div`
    h2 {
        font-weight: 700;
        font-size: 24px;
        line-height: 100%;
        letter-spacing: 0px;
        margin-bottom: 24px;
    }
`

export const ModalForm = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    input:not(:last-child) {
        margin-bottom: 12px;
    }
`

export const ModalInput = styled.input`
    width: 100%;
    outline: none;
    border-radius: 6px;
    padding: 12px 12px;
    color: rgba(0, 0, 0, 1);
    box-sizing: border-box;

    border: 0.5px solid
        ${({ $error, $valid }) => {
            if ($error) return 'rgb(242, 80, 80)'
            if ($valid) return 'rgb(31, 164, 108)'
            return 'rgba(153, 153, 153, 1)'
        }};

    background-color: ${({ $error, $valid }) => {
        if ($error) return 'rgb(255, 235, 235)'
        if ($valid) return 'rgb(219, 255, 233)'
        return 'transparent'
    }};

    &::placeholder {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 14px;
        line-height: 21px;
        letter-spacing: -0.28px;
        color: rgba(153, 153, 153, 1);
    }
`

export const ErrorContainer = styled.div`
    border: none;

    p {
        color: rgba(248, 77, 77, 1);
        font-weight: 400;
        font-size: 12px;
        line-height: 150%;
        text-align: center;
    }
`

export const ModalButton = styled.button`
    width: 100%;
    height: 40px;
    background-color: ${function ({ $error }) {
        return $error ? 'rgba(153, 153, 153, 1)' : 'rgba(31, 164, 108, 1)'
    }};

    border-radius: 6px;
    margin-top: 24px;
    margin-bottom: 24px;
    border: none;
    outline: none;

    text-align: center;
    vertical-align: middle;

    a {
        font-weight: 600;
        font-size: 12px;
        line-height: 100%;
        letter-spacing: 0px;
        color: rgba(255, 255, 255, 1);
    }
    a:hover {
        color: rgba(255, 255, 255, 1);
    }
`

export const ModalFormFooter = styled.div`
    text-align: center;

    p,
    a {
        color: rgba(153, 153, 153, 1);
        font-weight: 400;
        font-size: 12px;
        line-height: 150%;
        letter-spacing: 0px;
    }

    a {
        text-decoration: underline;
    }
`

export const header = styled.header`
    width: 100%;
    background-color: #ffffff;

    @media (max-width: 1200px) {
        padding-right: calc(50% - 171px);
        padding-left: calc(50% - 171px);
        background-color: #f4f5f6;
    }
`

export const headerBlock = styled.div`
    padding-right: calc(50% - 600px);
    padding-left: calc(50% - 600px);

    height: 64px;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: space-between;
    position: relative;
    top: 0;
    left: 0;
`

export const headerLogo = styled.div`
    display: block;

    @media (max-width: 1220px) {
        padding-left: 16px;
    }
`
