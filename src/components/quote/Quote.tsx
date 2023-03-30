import { QuoteProps } from "@/models/models"
import Button from "../button/Button"

export default function Quote({ quote }: QuoteProps) {
	return (
		<div className="border-b-2 border-black px-2 mb-5">
			<div className="max-h-56 gap-1 md:max-h-56 md:max-w-ty3 flex justify-between lg:gap-30 max-w-ty3">
				<div className=" w-full">
					<div className="mb-2">
						<div className="text-center lg:text-left">
							<p>&nbsp;&nbsp;&nbsp;&nbsp;“{quote.content}”
								<br /><br />
								<span className="text-base mb-2">-{quote.author}</span></p>
						</div>
					</div>
					<div>
						<p className="text-xs mb-2">tags:
							{
								quote.tags.map((tag, i) => {
									const str = (i === quote.tags.length - 1) ? `#${tag}` : `#${tag}, `
									return (
										str
									)
								})
							}
						</p>
					</div>
				</div>
				<Button btnId={quote._id} />
			</div>
		</div>
	)
}