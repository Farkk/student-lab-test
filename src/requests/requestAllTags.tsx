import { DataQuotes } from "@/models/models";
import axios from "axios";

export async function requestAllTags() {
  const url: string = "https://api.quotable.io/tags";
  
  try {
    const responseTags: DataQuotes[] = await axios(url).then((res) => res.data);
    return responseTags;
  } catch (err) {
    console.log(err);
  }
}
