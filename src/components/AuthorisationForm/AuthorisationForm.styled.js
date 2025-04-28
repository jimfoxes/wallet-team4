import { styled } from "styled-components";

// Оставил с целью сохранить исходную разметку
export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  /* overflow-x: hidden;
  overflow-y: scroll; */
  background-color: ${function ({ theme }) {
    return theme.primaryBackground;
  }};
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  /* overflow-x: hidden;
  overflow-y: scroll;
  background-color: #eaeef6; */
`;

export const Modal = styled.div`
  width: 100%;
  height: 100%;
  min-width: 320px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 375px) {
    background-color: ${function ({ theme }) {
      return theme.secondaryBackground;
    }};
  }
`;

export const ModalBlock = styled.div`
  display: block;
  margin: 0 auto;
  background-color: ${function ({ theme }) {
    return theme.secondaryBackground;
  }};
  max-width: 368px;
  width: 100%;
  padding: 50px 60px;
  border-radius: 10px;
  border: 0.7px solid ${function ({ theme }) {
      return theme.secondaryBackground;
    }};
  box-shadow: 0px 4px 67px -12px rgba(0, 0, 0, 0.13);

  @media screen and (max-width: 375px) {
    max-width: 368px;
    width: 100%;
    padding: 0 16px;
    border-radius: none;
    border: none;
    box-shadow: none;
  }
`;

export const ModalTitle = styled.div`
  h2 {
    display: block;
    margin: 0 auto;
    background-color: ${function ({ theme }) {
      return theme.secondaryBackground;
    }};
    max-width: 368px;
    width: 100%;

    /* padding: 50px 60px;
    border-radius: 10px;
    border: 0.7px solid #d4dbe5;
    box-shadow: 0px 4px 67px -12px rgba(0, 0, 0, 0.13); */

    margin-bottom: 20px;
  }
`;

export const ModalForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  /* input:first-child {
    margin-bottom: 7px;
  } */

  input:not(:last-child) {
    margin-bottom: 7px;
  }
`;

export const ModalInput = styled.input`
  width: 100%;
  min-width: 100%;
  border-radius: 8px;
  border: 0.7px solid;
  border-color: ${function ({ $error }) {
    return $error ? "#F84D4D" : "rgba(148, 166, 190, 0.4)";
  }};

  outline: none;
  padding: 10px 8px;
  color: ${function ({ theme }) {
    return theme.textColor;
  }};
  background-color: ${function ({ theme }) {
    return theme.secondaryBackground;
  }};

  &::placeholder {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    letter-spacing: -0.28px;
    color: #94a6be;
  }
`;

export const ErrorContainer = styled.div`
  border: none;
  background-color: ${function ({ theme }) {
    return theme.secondaryBackground;
  }};

  p {
    color: #f84d4d;
    font-family: Arial;
    font-weight: 400;
    font-size: 12px;
    line-height: 150%;
    text-align: center;
  }
`;

export const ModalButton = styled.button`
  width: 100%;
  height: 30px;
  background-color: #565eef;
  border-radius: 4px;
  margin-top: 20px;
  margin-bottom: 20px;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  line-height: 21px;
  font-weight: 500;
  letter-spacing: -0.14px;
  color: #ffffff;

  a {
    width: 100%;
    height: 100%;
    color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &:hover {
    background-color: #33399b;
  }

  @media screen and (max-width: 375px) {
    height: 40px;
  }
`;

export const ModalFormFooter = styled.div`
  text-align: center;

  p,
  a {
    color: rgba(148, 166, 190, 0.4);
    font-size: 14px;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: -0.14px;
  }

  a {
    text-decoration: underline;
  }
`;
