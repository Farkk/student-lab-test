export interface DataTagQuetes {
	data: {
		results: [
			quetes: {
				_id: string,
				content: string,
				author: string
			}
		]
	},
	tags: [
		tagsObj: {
			name: string,
			_id: string
		}
	]
	
}


export interface TagsData {
	tags: [
		tag: {
			name: string,
			_id: string,
		}
	]

}

export interface Query {
	query: {
		id: string
	}
}

export interface QuetesData {
	quetes: [
		quete: {
			_id: string,
			content: string,
			author: string,
		}
	],
	tags: [
		tag:{
			name: string,
			_id: string
		}
	]
	

}

export interface btnProps {
	btnId: string,
}
