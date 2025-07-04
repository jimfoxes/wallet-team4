import styled from 'styled-components'

export const Container = styled.div`
    position: absolute;
    z-index: 50;
    width: ${function ({ $isCategory }) {
        return $isCategory ? '176px' : '106px'
    }};

    height: ${function ({ $isCategory }) {
        return $isCategory ? '240px' : '92px'
    }};

    padding: 12px;
    border: 0.5px solid rgba(153, 153, 153, 1);
    border-radius: 6px;
    box-shadow: 0px 20px 67px -12px rgba(0, 0, 0, 0.13);
    background-color: rgba(255, 255, 255, 1);

    top: 25px;
    right: 0px;

    ul {
        display: flex;
        gap: 6px;
        flex-wrap: wrap;
        flex-direction: row;
    }

    @media (max-width: 375px) {
        top: 15px;
        left: 0px;
        padding: 10px;

        width: ${function ({ $isCategory }) {
            return $isCategory ? '130px' : '88px'
        }};

        height: ${function ({ $isCategory }) {
            return $isCategory ? '206px' : '78px'
        }};
    }
`

export const ListItem = styled.li`
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
    }

    @media (max-width: 375px) {
        height: 26px;
        padding: 7px 10px 7px 10px;
        gap: 6px;

        svg {
            width: 12px;
            height: 12px;
        }

        span {
            font-size: 10px;
            line-height: 100%;
            letter-spacing: 0px;
        }
    }
`
