import React from 'react'
import TagQuote from '@/components/tagQuote/TagQuote'
import { DataQuetesTag } from '@/components/models/models'
import MainLayout from '@/components/mainLayout/MainLayout'


export default function Tag(data: DataQuetesTag) {
	let newStr = data.query[0].toUpperCase() + data.query.slice(1, data.query.length)

  	return (
		<>
			<MainLayout header={newStr} tags={data.tags}>
				<TagQuote data={data.data} tags={data.tags}/>
			</MainLayout>
		</>
		
	)
}


Tag.getInitialProps = async ( {query, req}:any ) => {
	const responseTags = await fetch('https://api.quotable.io/tags')
	const jsonTags: DataQuetesTag[] = await responseTags.json()

	const response = await fetch(`https://api.quotable.io/quotes/?tags=${query.id}`)
	const json: DataQuetesTag[] = await response.json()
	
	return {	
		data: json,
		tags: jsonTags,
		query: query.id
	}

}
