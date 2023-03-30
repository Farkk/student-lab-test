import { DataQuotes } from '@/components/models/models'
import MainLayout from '@/components/mainLayout/MainLayout'
import Quote from '@/components/quote/Quote'
	
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
	const jsonData = await requestPopularQuotes()
	const jsonTags = await requestAllTags()
	return {
		data: jsonData,
		tags: jsonTags
	}
}

