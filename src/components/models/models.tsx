export interface childrenProps extends allTags {
	children: React.ReactNode,
	header: string
}

export interface DataQuetes extends allTags {
	data: {
		results: [
			quete: {
				_id: string,
				content: string,
				author: string,
				tags: string[]
			}
		]
	}

}


export interface DataQuetesTag extends DataQuetes {
	query: string
}

export interface allTags {
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

export interface btnProps {
	btnId: string,
}
