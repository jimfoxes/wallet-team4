import SvgComponent from '../../SvgComponent'

import { categories } from '../../../services/utilities'

import * as S from './FilterSortingPopUp.styled'

function FilterSortingPopUp({
    isCategory,
    filter,
    sorting,
    filtersSetter,
    sortingSetter,
}) {
    return isCategory ? (
        <S.Container $isCategory={isCategory}>
            <ul>
                {categories.map((el, index) => {
                    return (
                        <S.ListItem
                            key={index}
                            $filter={filter.includes(
                                Object.values(el).toString()
                            )}
                            onClick={(event) => {
                                filtersSetter(event)
                            }}
                        >
                            <SvgComponent
                                content={Object.keys(el)}
                                isActive={filter.includes(
                                    Object.values(el).toString()
                                )}
                            ></SvgComponent>

                            <span>{Object.values(el)}</span>
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
                        sortingSetter(event)
                    }}
                >
                    <span>Дате</span>
                </S.ListItem>
                <S.ListItem
                    $sorting={sorting === 'сумме'}
                    onClick={(event) => {
                        sortingSetter(event)
                    }}
                >
                    <span>Сумме</span>
                </S.ListItem>
            </ul>
        </S.Container>
    )
}

export default FilterSortingPopUp
