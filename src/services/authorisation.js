import axios from "axios";

const url = "https://wedev-api.sky.pro/api/user";

export async function signIn({ login, password }) {
  try {
    const { data } = await axios.post(
      url + "/login",
      { login, password },
      {
        headers: {
          "Content-Type": "",
        },
      }
    );

    return data.user;
  } catch (error) {
    return error;
  }
}

export async function signUp(inputData) {
  try {
    const { data } = await axios.post(url, inputData, {
      headers: {
        "Content-Type": "",
      },
    });

    return data.user;
  } catch (error) {
    return error;
  }
}
