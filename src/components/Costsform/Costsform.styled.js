import styled from 'styled-components'

export const MobileBackToMain = styled.div`
    display: flex;
    flex-direction: row;
    height: 42px;
    gap: 6px;
    background-color: #ffffff;
    justify-content: flex-start;
    align-items: end;
    padding-right: calc(50% - 171px);
    padding-left: calc(50% - 171px);

    p {
        color: #999999;
        font-weight: 600;
        font-size: 12px;
        letter-spacing: 0px;
        cursor: pointer;
    }

    @media (min-width: 1201px) {
        display: none;
    }
`

export const TitleCostsform = styled.h2`
    height: 30px;
    margin: 32px 0 24px 32px;
    font-weight: 700;
    font-size: 24px;
    text-align: left;

    @media (max-width: 1200px) {
        background-color: #ffffff;
        height: 41px;
        margin: 0;
        line-height: 100%;
        letter-spacing: 0px;
        padding-right: calc(50% - 171px);
        padding-left: calc(50% - 171px);
        padding-top: 12px;
    }
`

export const Costsform = styled.form`
    width: 315px;
    margin-left: 32px;
    display: flex;
    flex-direction: column;
    gap: 24px;

    @media (max-width: 1200px) {
        background-color: #ffffff;
        padding-left: 16px;
        padding-right: 16px;
        padding-top: 24px;
        margin: auto;
        width: 375px;
        padding-bottom: 30px;
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
    position: relative;
`

export const RequiredStar = styled.span`
    color: #f25050;
    position: absolute;
    top: -3px;
`

export const DescriptionInput = styled.input`
    height: 39px;
    border: 0.5px solid
        ${(props) =>
            props.$error ? '#F25050' : props.$valid ? '#1FA46C' : '#999999'};
    border-radius: 6px;
    padding: 12px;
    outline: none;
    background-color: ${(props) =>
        props.$error ? '#FFEBEB' : props.$valid ? '#DBFFE9' : 'white'};

    &:focus {
        border: 0.5px solid
            ${(props) =>
                props.$error
                    ? '#F25050'
                    : props.$valid
                      ? '#1FA46C'
                      : '#999999'};
        background-color: ${(props) =>
            props.$error ? '#FFEBEB' : props.$valid ? '#DBFFE9' : 'white'};
    }
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
    color: ${function ({ $filter, $sorting, $error }) {
        if ($error) return '#F25050'
        return $filter || $sorting
            ? 'rgba(31, 164, 108, 1)'
            : 'rgba(0, 0, 0, 1)'
    }};

    background-color: ${function ({ $filter, $sorting, $error }) {
        if ($error) return '#FFEBEB'
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
    height: 39px;
    border: none;
    border-radius: 6px;
    padding: 12px;
    background-color: ${(props) =>
        props.$disabled ? '#999999' : 'rgba(31, 164, 108, 1)'};
    font-weight: 600;
    font-size: 12px;
    line-height: 100%;
    letter-spacing: 0px;
    color: rgba(255, 255, 255, 1);
    cursor: ${(props) => (props.$disabled ? 'not-allowed' : 'pointer')};
    @media (max-width: 1200px) {
        margin-top: 0;
    }
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
export const WrapperButton = styled.div`
    display: flex;
    flex-direction: column;
    padding: 32px 36px 25px 34px;
    background: #ffffff;
    border-radius: 18px;

    @media (max-width: 1200px) {
        box-shadow: 0px -20px 67px -12px rgba(0, 0, 0, 0.13);
        margin: auto;
        width: 375px;
        padding: 24px 16px;
        border-radius: 0;
    }
`
