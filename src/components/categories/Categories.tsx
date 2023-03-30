import { AllTags } from '@/models/models'
import { firstColumnOfCategories, secondColumnOfCategories } from '@/utilities/generateColumnOfCategories'

export default function Categories(tags: AllTags) {
  return (
    <>
      <ul>
        {tags && firstColumnOfCategories(tags)}
      </ul>
      <ul>
        {tags && secondColumnOfCategories(tags)}
      </ul>
    </>
  )
}