import React, { useState } from 'react'

import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import { LS_USER } from '../../services/utilities'

import { AuthContext } from '../../сontext/AuthContext'
import { TransactionsContext } from '../../сontext/TransactionsContext'

import * as S from './Header.styled/'

export const Header = () => {
    const { setIsAuth } = useContext(AuthContext)
    const { setTransactionsList, mobileHeaderNav, setMobileHeaderNav } =
        useContext(TransactionsContext)

    const [mobileNavPopUp, setMobileNavPopUp] = useState(false)

    const navigate = useNavigate()

    return (
        <S.header>
            <S.headerBlock>
                <S.headerLogo>
                    <a href="/">
                        <img src="/images/logo.svg" alt="logo" />
                    </a>
                </S.headerLogo>
                <S.headerNav>
                    <S.headerNavBtn>
                        <S.headerBtn to="/">Мои расходы</S.headerBtn>
                    </S.headerNavBtn>
                    <S.headerNavBtn>
                        <S.headerBtn to="/analytics">
                            Анализ расходов
                        </S.headerBtn>
                    </S.headerNavBtn>
                </S.headerNav>

                <S.mobileHeaderNav>
                    <S.mobileHeaderNavWrapper
                        onClick={(event) => {
                            event.stopPropagation()
                            event.preventDefault()
                            setMobileNavPopUp(!mobileNavPopUp)
                        }}
                    >
                        <S.mobileHeaderNavSelected>
                            {mobileHeaderNav}
                        </S.mobileHeaderNavSelected>
                        <svg
                            width="7"
                            height="6"
                            viewBox="0 0 7 6"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M3.5 5.5L0.468911 0.25L6.53109 0.25L3.5 5.5Z"
                                fill="black"
                            />
                        </svg>
                    </S.mobileHeaderNavWrapper>

                    <S.mobileHeaderNavContainer $isOpen={mobileNavPopUp}>
                        <S.mobileHeaderNavBtn
                            $isActive={mobileHeaderNav === 'Мои расходы'}
                            onClick={(event) => {
                                event.stopPropagation()
                                event.preventDefault()
                                setMobileHeaderNav(
                                    event.currentTarget.children[0].textContent
                                )
                                navigate('/')
                            }}
                        >
                            <p>Мои расходы</p>
                        </S.mobileHeaderNavBtn>

                        <S.mobileHeaderNavBtn
                            $isActive={mobileHeaderNav === 'Новый расход'}
                            onClick={(event) => {
                                event.stopPropagation()
                                event.preventDefault()
                                setMobileHeaderNav(
                                    event.currentTarget.children[0].textContent
                                )
                                navigate('/mobileCostsform')
                            }}
                        >
                            <p>Новый расход</p>
                        </S.mobileHeaderNavBtn>

                        <S.mobileHeaderNavBtn
                            $isActive={mobileHeaderNav === 'Анализ расходов'}
                            onClick={(event) => {
                                event.stopPropagation()
                                event.preventDefault()
                                setMobileHeaderNav(
                                    event.currentTarget.children[0].textContent
                                )
                                navigate('/analytics')
                            }}
                        >
                            <p>Анализ расходов</p>
                        </S.mobileHeaderNavBtn>
                    </S.mobileHeaderNavContainer>
                </S.mobileHeaderNav>

                <S.headerExitBtn
                    onClick={(event) => {
                        event.stopPropagation()
                        event.preventDefault()
                        localStorage.removeItem(LS_USER)
                        setTransactionsList([])
                        setIsAuth(false)
                        navigate('/sign-in')
                    }}
                >
                    Выйти
                </S.headerExitBtn>
            </S.headerBlock>
        </S.header>
    )
}
