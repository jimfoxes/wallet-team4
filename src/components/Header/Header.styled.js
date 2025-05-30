import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const header = styled.header`
    width: 100%;
    background-color: #ffffff;
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
`

const BaseHeaderBtn = styled(NavLink)`
    font-size: 14px;
    transition: all 0.3s ease;
    &.active {
        color: #1fa46c;
        font-weight: 600;
        text-decoration: underline;
        padding: 0 10px;
    }
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

export const headerExitBtn = styled.button`
    border: none;
    background-color: transparent;
    font-weight: 600;
    font-size: 14px;
    line-height: 170%;
    letter-spacing: 0px;
    transition: all 0.3s ease;

    &:hover {
        color: rgba(31, 164, 108, 1);
    }
`
