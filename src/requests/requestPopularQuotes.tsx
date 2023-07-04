import { DataQuotes } from "@/models/models";
import axios from "axios";

export async function requestPopularQuotes() {
  const url = `https://api.quotable.io/quotes/?tags=famous-quotes`;

  try {
    const response: DataQuotes[] = await axios(url).then((res) => res.data);
    return response;
  } catch (err) {
    console.log(err);
  }
}
