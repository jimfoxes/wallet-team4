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

export const headerNav = styled.nav`
    display: flex;
    gap: 48px;
`

export const headerBtn = styled.a`
    font-size: 14px;
`

export const headerExitBtn = styled.a`
    font-weight: 600;
`
