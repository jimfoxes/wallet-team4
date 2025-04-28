import styled from "styled-components";

export const Container = styled.div`
  height: calc(100vh - 64px);
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-column-gap: 20px;
  grid-template-rows: 116px 1fr;
  overflow: hidden;
`;

export const TitleContainer = styled.h1`
  grid-column: 1/13;
  height: 48px;
  margin-top: 36px;
  margin-bottom: 32px;
  font-weight: 700;
  font-size: 32px;
  text-align: left;
`;

export const CostsTable = styled.div`
  grid-column: 1/9;
  background-color: #ffffff;
  max-height: 618px;
  border-radius: 30px;
`;

export const HeaderCostsTable = styled.div`
  display: flex;
  margin: 32px;
  justify-content: space-between;
`;

export const TitleCostsTable = styled.h2`
  height: 30px;
  font-weight: 700;
  font-size: 24px;
  text-align: left;
`;

export const FilterSortingContainer = styled.div`
  position: relative;
  display: flex;
  gap: 24px;

  height: 30px;
  padding-top: 12px;
`;

export const FilterSortingElement = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;

  a {
    /* display: flex;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: center; */

    font-weight: 400;
    font-size: 12px;
    line-height: 150%;
    max-width: ${function ({ $isCategory }) {
      return $isCategory ? "260px" : "160px";
    }};

    /* &::after {
      content: "";
      display: block;
      width: 7px;
      height: 7px;
      border-left: 1px solid rgba(0, 0, 0, 1);
      border-bottom: 1px solid rgba(0, 0, 0, 1);
      background: #000000;
      transform: rotate(-45deg);
      margin: -6px 0 0 5px;
      padding: 0;
      
      background-image: url("../../images/filterSortingIcon.svg");
    } */

    span {
      color: rgba(31, 164, 108, 1);
      text-decoration: underline;
      font-weight: 600;
      font-size: 12px;
    }
  }
`;

export const ColumnsContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 32px;
  height: 15px;
  margin-left: 32px;
`;

export const ColumnsElement = styled.h4`
  display: block;
  width: 142px;
  font-weight: 400;
  font-size: 12px;
  line-height: 100%;
  letter-spacing: 0px;
  color: rgba(153, 153, 153, 1);
  text-align: start;
`;

export const DemarcationLine = styled.div`
  width: 100%;
  border: none;
  border-top: 0.5px solid #999999;
  margin-top: 6px;
  margin-bottom: 18px;
`;

export const Costsform = styled.div`
  grid-column: 9/13;
  background-color: #ffffff;
  max-height: 618px;
  border-radius: 30px;
`;

