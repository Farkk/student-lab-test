import { DataQuotes } from "@/components/models/models"

export const RequestAllTag = async () => {
	const responseTags = await fetch('https://api.quotable.io/tags')
	const json: DataQuotes[] = await responseTags.json()

	return json
}