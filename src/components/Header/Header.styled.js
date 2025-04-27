import styled from 'styled-components'

export const header = styled.header`
    width: 100%;
    margin: 0 auto;
    background-color: #ffffff;
`

export const headerBlock = styled.div`
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
`

const BaseHeaderBtn = styled.a`
    font-size: 14px;
    transition: all 0.3s ease;
`

export const headerNav = styled.nav`
    display: flex;
    justify-content: space-between;
    gap: 24px;
`

export const headerNavBtn = styled.div`
    display: block;
    box-sizing: border-box;
`

export const headerBtn = styled(BaseHeaderBtn)`
    display: inline-block;
    padding: 0 12px;

    &:hover {
        font-weight: 600;
        padding: 0 10px;
    }
`

export const headerExitBtn = styled(BaseHeaderBtn)`
    font-weight: 600;
`
