import React from 'react'
import { allTags } from '../models/models'
import Link from 'next/link'

export default function Categories({ tags }: allTags) {
	const firstSymbolToUpperCase = (str: string) => {
		let newStr = str[0].toUpperCase() + str.slice(1, str.length)
		return newStr
	}
	return (
		<>
			{
				<ul>
					{
						tags.map((tag, i) => {
							if (tag.quoteCount && tag.name != "famous-quotes") {
								const newName = firstSymbolToUpperCase(tag.name)
								if (i < 23) {
									return (
										<li className='text-sm' key={tag._id}><Link href={`/tag/${tag.name}`}>{newName}</Link></li>
									)
								}
							}
						})

					}
				</ul>
			}
			{
				<ul>
					{
						tags.map((tag, i) => {
							if (tag.quoteCount && tag.name != "famous-quotes") {
								const newName = firstSymbolToUpperCase(tag.name)
								if (i > 23) {
									return (
										<li className='text-sm' key={tag._id}><Link href={`/tag/${tag.name}`}>{newName}</Link></li>
									)
								}
							}
						})
					}
				</ul>
			}
		</>
	)
}



