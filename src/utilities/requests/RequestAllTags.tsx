import { DataQuotes } from "@/components/models/models"

export async function requestAllTags() {
	const responseTags = await fetch('https://api.quotable.io/tags')
	const json: DataQuotes[] = await responseTags.json()

	return json
}