import { DataQuetes } from '@/components/models/models'
import MainLayout from '@/components/mainLayout/MainLayout'
import Quote from '@/components/quote/Quote'

export default function Home({data, tags}: DataQuetes) {

	return (	
  		<MainLayout header={'Popular quotes'} tags={tags}>
			{
				data.results.map(quote => {
					return (
						<Quote key={quote._id} quote={quote}/>
					)
				})
			}
		</MainLayout>
)
}


Home.getInitialProps = async () => {
	
	const response = await fetch(`https://api.quotable.io/quotes/?tags=famous-quotes`)
	const json: DataQuetes[] = await response.json()
	
	const responsetags = await fetch('https://api.quotable.io/tags')
	const jsontags: DataQuetes[] = await responsetags.json()

	return {
		data: json,
		tags: jsontags
	}
}

