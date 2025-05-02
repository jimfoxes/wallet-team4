import SvgComponent from '../../SvgComponent'

import { categoriesRu, categoriesEng } from '../../../services/utilities'

import * as S from './FilterSortingPopUp.styled'

function FilterSortingPopUp({
    isCategory,
    filter,
    setFilter,
    sorting,
    setSorting,
}) {
    return isCategory ? (
        <S.Container $isCategory={isCategory}>
            <ul>
                {categoriesEng.map((el, index) => {
                    return (
                        <S.ListItem
                            key={index}
                            $filter={
                                filter === categoriesRu[index].toLowerCase()
                            }
                            onClick={(event) => {
                                setFilter(
                                    event.currentTarget.children[1].textContent.toLowerCase()
                                )
                            }}
                        >
                            <SvgComponent
                                content={el}
                                isActive={filter}
                            ></SvgComponent>

                            <span>{categoriesRu[index]}</span>
                        </S.ListItem>
                    )
                })}
            </ul>
        </S.Container>
    ) : (
        <S.Container>
            <ul>
                <S.ListItem
                    $sorting={sorting === 'дате'}
                    onClick={(event) => {
                        setSorting(
                            event.currentTarget.children[0].textContent.toLowerCase()
                        )
                    }}
                >
                    <span>Дате</span>
                </S.ListItem>
                <S.ListItem
                    $sorting={sorting === 'сумме'}
                    onClick={(event) => {
                        setSorting(
                            event.currentTarget.children[0].textContent.toLowerCase()
                        )
                    }}
                >
                    <span>Сумме</span>
                </S.ListItem>
            </ul>
        </S.Container>
    )
}

export default FilterSortingPopUp
