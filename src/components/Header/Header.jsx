import React from 'react'
import * as S from './Header.styled/'

export const Header = () => {
    return (
        <S.header>
            <div className="container">
                <S.headerBlock>
                    <S.headerLogo>
                        <a href="/">
                            <img src="/images/logo.svg" alt="logo" />
                        </a>
                    </S.headerLogo>
                    <S.headerNav>
                        <S.headerBtn href="#">Мои расходы</S.headerBtn>
                        <S.headerBtn href="#">Анализ расходов</S.headerBtn>
                    </S.headerNav>
                    <S.headerExitBtn>
                        <S.headerBtn href="#">Выход</S.headerBtn>
                    </S.headerExitBtn>
                </S.headerBlock>
            </div>
        </S.header>
    )
}
