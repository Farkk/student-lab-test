import { DataQuotes } from "@/models/models"

export async function requestPopularQuotes() {
	const url = `https://api.quotable.io/quotes/?tags=famous-quotes`

	const response = await fetch(url)
	const json: DataQuotes[] = await response.json()

	return json
}