import { DataQuotesTag, Query } from '@/models/models'
import { firstSymbolToUpperCase } from '@/utilities/firstSymbolToUpperCase'
import { requestByTag } from '@/requests/requestByTag'
import { requestAllTags } from '@/requests/requestAllTags'
import MainLayout from '@/layouts/MainLayout'
import Quote from '@/components/quote/Quote'

export default function Tag({ data, tags, query }: DataQuotesTag) {
	const newStr = firstSymbolToUpperCase(query)
	return (
		<MainLayout header={newStr} tags={tags}>
			{
				data.results.map(quote => <Quote key={quote._id} quote={quote} />)
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