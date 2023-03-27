import React from 'react'
import TagQuote from '@/components/tagQuote/TagQuote'
import { DataTagQuetes } from '@/components/models/models'

export default function Tag(data: DataTagQuetes) {

  	return (
		<>
			<TagQuote quetes={data.data.results} tags={data.tags}/>
		</>
	)
}


Tag.getInitialProps = async ( {query}:any ) => {
	console.log(query.id)
	const responseTags = await fetch('https://api.quotable.io/tags')
	const jsonTags: DataTagQuetes[] = await responseTags.json()
	const response = await fetch(`https://api.quotable.io/quotes/?tags=${query.id}`)
	const json: DataTagQuetes[] = await response.json()
	

	return {	
		data: json,
		tags: jsonTags
	}

}
