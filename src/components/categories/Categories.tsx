import React from 'react'
import { allTags } from '../models/models'
import Link from 'next/link'
import { FirstSymbolToUpperCase } from '../utilities/firstSymbolToUpperCase'

export default function Categories({ tags }: allTags) {
	return (
		<>
			{
				<ul>
					{tags &&
						tags.map((tag, i) => {
							if (tag.quoteCount && tag.name != "famous-quotes") {
								const newName = FirstSymbolToUpperCase(tag.name)
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
					{tags &&
						tags.map((tag, i) => {
							if (tag.quoteCount && tag.name != "famous-quotes") {
								const newName = FirstSymbolToUpperCase(tag.name)
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



