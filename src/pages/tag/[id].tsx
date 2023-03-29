import { DataQuetesTag, Query } from '@/components/models/models'
import TagQuote from '@/components/tagQuote/TagQuote'
import MainLayout from '@/components/mainLayout/MainLayout'

export default function Tag(data: DataQuetesTag) {
	let newStr = data.query[0].toUpperCase() + data.query.slice(1, data.query.length)
	return (
		<>
			<MainLayout header={newStr} tags={data.tags}>
				<TagQuote data={data.data} tags={data.tags} />
			</MainLayout>
		</>

	)
}

Tag.getInitialProps = async ({ query }: Query) => {
	const responseTags = await fetch('https://api.quotable.io/tags')
	const jsonTags: DataQuetesTag[] = await responseTags.json()

	const response = await fetch(`https://api.quotable.io/quotes/?tags=${query.id}`)
	const json: DataQuetesTag[] = await response.json()

	return {
		data: json,
		tags: jsonTags,
		query: query.id
	}
}
