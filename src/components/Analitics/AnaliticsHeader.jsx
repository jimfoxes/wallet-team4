import React from 'react'
import * as S from './Analitics.styled'

const AnaliticsHeader = ({ totalAmount, date }) => {
    return (
        <S.HeaderContainer>
            <S.HeaderContent>
                <S.TotalAmount>{totalAmount}</S.TotalAmount>
                <S.DateContainer>
                    <S.DateLabel>Расходы за</S.DateLabel>
                    <S.DateValue>{date}</S.DateValue>
                </S.DateContainer>
            </S.HeaderContent>
        </S.HeaderContainer>
    )
}

export default AnaliticsHeader
