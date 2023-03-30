import { DataQuotesTag, Query } from '@/components/models/models'
import MainLayout from '@/components/mainLayout/MainLayout'
import Quote from '@/components/quote/Quote'
import { firstSymbolToUpperCase } from '@/utilities/textToUpperCase/firstSymbolToUpperCase'


export default function Tag({ data, tags, query }: DataQuotesTag) {
	const newStr = firstSymbolToUpperCase(query)
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
	const jsonData = await requestByTag(query.id)
	const jsonTags = await requestAllTags()
	
	return {
		data: jsonData,
		tags: jsonTags,
		query: query.id
	}
}
