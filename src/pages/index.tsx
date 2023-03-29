import { DataQuotes } from '@/components/models/models'
import MainLayout from '@/components/mainLayout/MainLayout'
import Quote from '@/components/quote/Quote'
import { RequestAllTag } from '@/utilities/requests/RequestAllTags'
import { RequestPopularQuotes } from '@/utilities/requests/RequestPopularQuotes'

export default function Home({ data, tags }: DataQuotes) {
	return (
		<MainLayout header={'Popular quotes'} tags={tags}>
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

Home.getInitialProps = async () => {
	const jsonData = await RequestPopularQuotes()
	const jsonTags = await RequestAllTag()
	return {
		data: jsonData,
		tags: jsonTags
	}
}

