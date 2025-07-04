import styled from 'styled-components'

export const MobileBackToMain = styled.div`
    display: flex;
    flex-direction: row;
    height: 42px;
    gap: 6px;
    background-color: #ffffff;
    justify-content: flex-start;
    align-items: center;
    padding-left: 16px;

    p {
        color: #999999;
        font-weight: 600;
        font-size: 12px;
        line-height: 150%;
        letter-spacing: 0px;
    }

    @media (min-width: 376px) {
        display: none;
    }
`

export const TitleCostsform = styled.h2`
    height: 30px;
    margin: 32px 0 24px 32px;
    font-weight: 700;
    font-size: 24px;
    text-align: left;

    @media (max-width: 375px) {
        background-color: #ffffff;
        height: 41px;
        margin: 0px;
        line-height: 100%;
        letter-spacing: 0px;
        padding-left: 16px;
    }
`

export const Costsform = styled.form`
    width: 315px;
    margin-left: 32px;
    display: flex;
    flex-direction: column;
    gap: 24px;

    @media (max-width: 375px) {
        background-color: #ffffff;
        padding-left: 16px;
        padding-right: 16px;
        margin-left: 0px;
        width: 375px;
    }
`

export const CategoryContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 16px;

    p {
        color: rgba(248, 77, 77, 1);
        font-weight: 400;
        font-size: 10px;
        line-height: 100%;
        letter-spacing: 0px;
        text-align: start;
    }
`

export const TitleCategory = styled.label`
    font-weight: 600;
    font-size: 16px;
    line-height: 100%;
    letter-spacing: 0px;
    text-align: start;
`

export const DescriptionInput = styled.input`
    height: 39px;
    border: 0.5px solid rgba(153, 153, 153, 1);
    border-radius: 6px;
    padding: 12px;
    outline: none;
`
export const CategoriesWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
`

export const Category = styled.div`
    display: flex;
    cursor: pointer;
    border-radius: 30px;
    height: 31px;
    width: auto;
    color: ${function ({ $filter, $sorting }) {
        return $filter || $sorting
            ? 'rgba(31, 164, 108, 1)'
            : 'rgba(0, 0, 0, 1)'
    }};

    background-color: ${function ({ $filter, $sorting }) {
        return $filter || $sorting
            ? 'rgba(219, 255, 233, 1)'
            : 'rgba(244, 245, 246, 1)'
    }};

    padding: 8px 20px 8px 20px;
    gap: 12px;

    span {
        display: block;
        height: 15px;
        font-weight: 400;
        font-size: 12px;
        color: inherit;
    }
`

export const CategoriesContainer = styled.div``

export const CostsformButton = styled.button`
    height: 39;
    border: none;
    border-radius: 6px;
    padding: 12px;
    background-color: rgba(31, 164, 108, 1);
    font-weight: 600;
    font-size: 12px;
    line-height: 100%;
    letter-spacing: 0px;
    color: rgba(255, 255, 255, 1);
`
export const CalendarWrapper = styled.div`
    position: absolute;
    z-index: 1000;
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    top: 40px;
    left: 5px;
`
