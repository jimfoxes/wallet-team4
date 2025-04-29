import axios from "axios";

const url = "https://wedev-api.sky.pro/api/transactions";

export async function getTransactions(token) {
  try {
    const data = await axios.get(url, {
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "",
      },
    });

    return data;
  } catch (error) {
    return error;
  }
}
