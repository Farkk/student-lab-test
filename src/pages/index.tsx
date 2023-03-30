import { DataQuotes } from '@/models/models'
import { requestPopularQuotes } from '@/requests/requestPopularQuotes'
import { requestAllTags } from '@/requests/requestAllTags'
import MainLayout from '@/layouts/MainLayout'
import Quote from '@/components/quote/Quote'

export default function Home({ data, tags }: DataQuotes) {
	return (
		<MainLayout header={'Popular quotes'} tags={tags}>
			{
				data.results.map(quote => <Quote key={quote._id} quote={quote} />)
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