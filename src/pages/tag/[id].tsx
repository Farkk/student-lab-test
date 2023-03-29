import { DataQuotesTag, Query } from '@/components/models/models'
import TagQuote from '@/components/tagQuote/TagQuote'
import MainLayout from '@/components/mainLayout/MainLayout'
import { FirstSymbolToUpperCase } from '@/components/utilities/firstSymbolToUpperCase'

export default function Tag(data: DataQuotesTag) {
	const newStr = FirstSymbolToUpperCase(data.query)
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
	const jsonTags: DataQuotesTag[] = await responseTags.json()

	const response = await fetch(`https://api.quotable.io/quotes/?tags=${query.id}`)
	const json: DataQuotesTag[] = await response.json()

	return {
		data: json,
		tags: jsonTags,
		query: query.id
	}
}
