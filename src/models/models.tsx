export interface childrenProps extends AllTags {
	children: React.ReactNode,
	header: string
}

export interface DataQuotes extends AllTags {
	data: {
		results: [
			quote: {
				_id: string,
				content: string,
				author: string,
				tags: string[]
			}
		]
	}
}

export interface DataQuotesTag extends DataQuotes {
	query: string
}

export interface AllTags {
	tags: [
		tagsObj: {
			name: string,
			_id: string,
			quoteCount: number
		}
	]
}

export interface QuoteProps {
	quote: {
		_id: string,
		content: string,
		author: string,
		tags: string[]
	}
}

export interface Query {
	query: {
		id: string
	}
}

export interface BtnProps {
	btnId: string,
}