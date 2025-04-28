import styled from 'styled-components'

export const main = styled.main`
    width: 100%;
`

export const mainContent = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: 1200px) {
        display: block;
    }
`
