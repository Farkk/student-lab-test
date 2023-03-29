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
	const response = await fetch(`https://api.quotable.io/quotes/?tags=famous-quotes`)
	const json: DataQuotes[] = await response.json()

	const responsetags = await fetch('https://api.quotable.io/tags')
	const jsontags: DataQuotes[] = await responsetags.json()

	return {
		data: json,
		tags: jsontags
	}
}

