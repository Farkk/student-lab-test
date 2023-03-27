import React from 'react'
import { TagsData } from '../models/models'
import Link from 'next/link'

export default function Categories({tags}: TagsData) {
	return (
		<div className='w-80 ml-2 bg-red-400 h-1/6'>
		<h2>categories of aphorisms</h2>
		<div className='flex justify-between px-5'>
			<ul>
				{
					tags.map((tag, i) => {
						if (i < 23) {
							return (
								<li key={tag._id}><Link href={`/tag/${tag.name}`}>{tag.name}</Link></li>
							)
						}

					})
				}
			</ul>
			<ul>
				{
					tags.map((tag, i) => {
						if (i > 23) {
							return (
								<li key={i}>{tag.name}</li>
							)
						}

					})
				}
			</ul>
			</div>
		</div>
	)
}

