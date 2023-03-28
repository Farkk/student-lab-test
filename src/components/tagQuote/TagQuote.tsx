import { DataQuetes } from '@/components/models/models'
import Quote from '../quote/Quote'


export default function TagQuote({data}: DataQuetes) {
	return (
		<>
			{
				data.results.map(quote => {
					return (
						<Quote key={quote._id} quote={quote}/>
					)
				})
			}
			
		</>
	)	
}

