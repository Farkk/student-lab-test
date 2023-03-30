import Link from 'next/link'

import { AllTags } from '@/models/models'
import { firstSymbolToUpperCase } from '@/utilities/textToUpperCase/firstSymbolToUpperCase'

export default function Categories({ tags }: AllTags) {
	const firstColumnOfCategories = () => {
		return (
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
		)
	}

	const secondColumnOfCategories = () => {
		return (
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
		)
	}

	return (
		<>
			<ul>
				{tags && firstColumnOfCategories()}
			</ul>
			<ul>
				{tags && secondColumnOfCategories()}
			</ul>
		</>
	)
}