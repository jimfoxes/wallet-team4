import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

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
    @media (max-width: 1200px) {
        height: 54px;
    }
`

export const headerLogo = styled.div`
    display: block;

    @media (max-width: 1200px) {
        img {
            width: 109px;
            height: 14px;
        }
    }
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

    @media (max-width: 1200px) {
        display: none;
    }
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

export const mobileHeaderNav = styled.div`
    svg {
        position: relative;
    }

    @media (min-width: 1201px) {
        display: none;
    }
`

export const mobileHeaderNavWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;

    @media (min-width: 1201px) {
        display: none;
    }
`

export const mobileHeaderNavSelected = styled.p`
    font-weight: 600;
    font-size: 12px;
    line-height: 150%;
    letter-spacing: 0px;
    text-align: center;
    vertical-align: middle;
    color: #1fa46c;
    border-bottom: 1px solid #1fa46c;
`

export const mobileHeaderNavContainer = styled.div`
    display: ${function ({ $isOpen }) {
        return $isOpen ? 'flex' : 'none'
    }};

    flex-wrap: wrap;

    position: absolute;
    z-index: 50;
    top: 50px;
    right: 85px;
    gap: 6px;
    width: 138px;
    height: 110px;
    border-radius: 6px;
    border: 0.5px solid #999999;
    box-shadow: 0px 20px 67px -12px #00000021;
    background-color: #ffffff;
    padding: 10px;
`

export const mobileHeaderNavBtn = styled(NavLink)`
    height: 26px;
    border-radius: 24px;
    padding: 7px 13px 7px 13px;
    background-color: ${function ({ $isActive }) {
        return $isActive ? '#DBFFE9' : '#f4f5f6'
    }};

    p {
        color: ${function ({ $isActive }) {
            return $isActive ? '#1FA46C' : '#000000'
        }};
        font-weight: 400;
        font-size: 10px;
        line-height: 100%;
        letter-spacing: 0px;
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

    @media (max-width: 1200px) {
        font-size: 12px;
        line-height: 150%;
    }
`
