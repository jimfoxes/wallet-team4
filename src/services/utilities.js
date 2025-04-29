export const LS_USER = "localUser";

export function formErrors(
  dataObject,
  errorsObject,
  errorsFunction,
  errorFunction,
  isSignUp
) {
  let isCorrect = true;

  if (isSignUp && !dataObject.name.trim()) {
    errorsObject.name = true;
    errorFunction("Заполните обязательные поля");
    isCorrect = false;
  }

  if (!dataObject.login.trim()) {
    errorsObject.login = true;
    errorFunction("Заполните обязательные поля");
    isCorrect = false;
  }

  if (!dataObject.password.trim()) {
    errorsObject.password = true;
    errorFunction("Заполните обязательные поля");
    isCorrect = false;
  }

  errorsFunction(errorsObject);
  return isCorrect;
}
