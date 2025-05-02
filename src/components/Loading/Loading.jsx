import * as S from './Loading.styled'

const Loading = ({ isopacity }) => {
    return (
        <>
            <S.LoadingContainer $isopacity={isopacity}>
                <S.LoadingPage>
                    <h3>Данные загружаются</h3>
                    <S.LoadingPageLoader>
                        <div></div>
                        <div></div>
                        <div></div>
                    </S.LoadingPageLoader>
                </S.LoadingPage>
            </S.LoadingContainer>
        </>
    )
}

export default Loading
