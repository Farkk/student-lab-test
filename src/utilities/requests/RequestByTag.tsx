import { DataQuotes } from "@/components/models/models"

export async function requestByTag(tag: string) {
	const url = `https://api.quotable.io/quotes/?tags=${tag}`

	const response = await fetch(url)
	const json: DataQuotes[] = await response.json()

	return json
}