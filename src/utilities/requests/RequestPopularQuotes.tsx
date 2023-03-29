import { DataQuotes } from "@/components/models/models"

export const RequestPopularQuotes = async () => {
	const url = `https://api.quotable.io/quotes/?tags=famous-quotes`

	const response = await fetch(url)
	const json: DataQuotes[] = await response.json()

	return json
}