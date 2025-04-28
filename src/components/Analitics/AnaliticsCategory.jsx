import React from 'react'
import * as S from './Analitics.styled'

const AnaliticsCategory = ({ amount, barHeight, barColor, categoryName }) => {
    return (
        <S.CategoryContainer>
            <S.CategoryAmount>{amount}</S.CategoryAmount>
            <S.CategoryBar
                style={{ height: barHeight, backgroundColor: barColor }}
            />
            <S.CategoryName>{categoryName}</S.CategoryName>
        </S.CategoryContainer>
    )
}

export default AnaliticsCategory
