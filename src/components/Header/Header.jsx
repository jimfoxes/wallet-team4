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
                        <S.headerNavBtn>
                            <S.headerBtn href="#">Мои расходы</S.headerBtn>
                        </S.headerNavBtn>
                        <S.headerNavBtn>
                            <S.headerBtn href="#">Анализ расходов</S.headerBtn>
                        </S.headerNavBtn>
                    </S.headerNav>
                    <S.headerExitBtn href="#">Выход</S.headerExitBtn>
                </S.headerBlock>
            </div>
        </S.header>
    )
}
