import { useState } from "react"
import { useRouter } from "next/router"
import { BiMenu } from 'react-icons/bi'
import { RxCross2 } from 'react-icons/rx'

import { AllTags } from "@/models/models"
import Categories from "../categories/Categories"

export default function Burger({ tags }: AllTags) {
  const query: any = useRouter().query.id
  const [close, setClose] = useState('hidden')
  const [queryId, setQueryId] = useState('')

  const onCloseBurger = () => {
    setClose('hidden')
  }
  const onOpenBurger = () => {
    setClose('')
  }

  if (query !== queryId) {
    setQueryId(query)
    onCloseBurger();
  }

  return (
    <>
      <button className="" onClick={onOpenBurger}>
        <BiMenu className="w-7 h-6" />
      </button>
      <div className={`${close} fixed top-0 left-0 w-full h-screen bg-slate-400`}>
        <button onClick={onCloseBurger} className="fixed right-4 top-5 block">
          <RxCross2 className=" w-7 h-7 fill-white" />
        </button>
        <h2 className="text-center mt-14 text-2xl">Categories</h2>
        <div className="mt-3 w-360 mx-auto flex justify-evenly">
          <Categories tags={tags} />
        </div>
      </div>
    </>
  )
}