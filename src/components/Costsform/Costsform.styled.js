import styled from "styled-components";

export const TitleCostsform = styled.h2`
  height: 30px;
  margin: 32px 0 24px 32px;
  font-weight: 700;
  font-size: 24px;
  text-align: left;
`;

export const Costsform = styled.form`
  width: 315px;
  margin-left: 32px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const CategoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const TitleCategory = styled.label`
  font-weight: 600;
  font-size: 16px;
  line-height: 100%;
  letter-spacing: 0px;
  text-align: start;
`;

export const DescriptionInput = styled.input`
  height: 39px;
  border: 0.5px solid rgba(153, 153, 153, 1);
  border-radius: 6px;
  padding: 12px;
  outline: none;
`;

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
`;
