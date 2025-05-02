import React from 'react'

import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import { LS_USER } from '../../services/utilities'

import { AuthContext } from '../../сontext/AuthContext'
import { TransactionsContext } from '../../сontext/TransactionsContext'

import * as S from './Header.styled/'

export const Header = () => {
    const { setIsAuth } = useContext(AuthContext)
    const { setTransactionsList } = useContext(TransactionsContext)

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
                    Выход
                </S.headerExitBtn>
            </S.headerBlock>
        </S.header>
    )
}
