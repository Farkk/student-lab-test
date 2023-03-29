import { DataQuotes } from '@/components/models/models'
import Quote from '../quote/Quote'

export default function TagQuote({ data }: DataQuotes) {
	return (
		<>
			{
				data.results.map(quote => {
					return (
						<Quote key={quote._id} quote={quote} />
					)
				})
			}
		</>
	)
}

