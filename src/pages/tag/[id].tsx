import { DataQuotesTag, Query } from '@/components/models/models'
import MainLayout from '@/components/mainLayout/MainLayout'
import { FirstSymbolToUpperCase } from '@/utilities/textToUpperCase/FirstSymbolToUpperCase'
import Quote from '@/components/quote/Quote'
import { RequestAllTag } from '@/utilities/requests/RequestAllTags'
import { RequestByTag } from '@/utilities/requests/RequestByTag'

export default function Tag({ data, tags, query }: DataQuotesTag) {
	const newStr = FirstSymbolToUpperCase(query)
	return (
		<MainLayout header={newStr} tags={tags}>
			{
				data.results.map(quote => {
					return (
						<Quote key={quote._id} quote={quote} />
					)
				})
			}
		</MainLayout>
	)
}

Tag.getInitialProps = async ({ query }: Query) => {
	const jsonData = await RequestByTag(query.id)
	const jsonTags = await RequestAllTag()
	
	return {
		data: jsonData,
		tags: jsonTags,
		query: query.id
	}
}
