import * as S from "./Costsform.styled";

function Costsform() {
  return (
    <>
      <S.TitleCostsform>Новый расход</S.TitleCostsform>
      <S.Costsform>
        <S.CategoryContainer>
          <S.TitleCategory>Описание</S.TitleCategory>
          <S.DescriptionInput
            name="description"
            placeholder="Введите описание"
            type="text"
          />
        </S.CategoryContainer>

        <S.CategoryContainer>
          <S.TitleCategory>Категория</S.TitleCategory>
          <S.DescriptionInput name="category" type="radio" />
          <S.DescriptionInput name="category" type="radio" />
        </S.CategoryContainer>

        <S.CategoryContainer>
          <S.TitleCategory>Дата</S.TitleCategory>
          <S.DescriptionInput
            name="date"
            placeholder="Введите дату"
            type="text"
          />
        </S.CategoryContainer>

        <S.CategoryContainer>
          <S.TitleCategory>Сумма</S.TitleCategory>
          <S.DescriptionInput
            name="sum"
            placeholder="Введите сумму"
            type="text"
          />
        </S.CategoryContainer>

        <S.CostsformButton
          onClick={(event) => {
            event.preventDefault();
          }}
        >
          Добавить новый расход
        </S.CostsformButton>
      </S.Costsform>
    </>
  );
}

export default Costsform;
