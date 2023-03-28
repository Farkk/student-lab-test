import Button from "../button/Button"
import { QuoteProps } from "../models/models"

export default function Quote({quote}: any) {
	return (
		<div className="flex gap-30 max-w-ty3 max-h-44 mb-5">
			<div className="border-b-2 border-black w-630">
				<div className="mb-2">
					<div>
						<p>&nbsp;&nbsp;&nbsp;&nbsp;“{quote.content}”<br/><br/><span className="text-base mb-2">-{quote.author}</span></p>
					</div>
				</div>
				<div>
					<p className="text-xs mb-2">tags: {
						quote.tags.map((tag, i) => {
							const str = i === quote.tags.length - 1 ? `#${tag}` : `#${tag}, `
							return (
								str
							)
						})
					}</p>
				</div>
			</div>
			<Button btnId={quote._id}/>
		</div>
	)
}
