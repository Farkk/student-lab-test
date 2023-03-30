import Link from 'next/link'

import { AllTags } from '@/models/models'
import { firstSymbolToUpperCase } from './firstSymbolToUpperCase'

export const firstColumnOfCategories = ({ tags }: AllTags) => {
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

export const secondColumnOfCategories = ({ tags }: AllTags) => {
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