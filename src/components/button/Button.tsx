import { useState, useEffect } from "react"
import { AiFillHeart } from 'react-icons/ai'
import { AiOutlineHeart } from 'react-icons/ai'

import { BtnProps } from "@/models/models"

export default function Button({ btnId }: BtnProps) {
  const [isBrowser, setIsBrowser] = useState(false)
  const [isLike, setIsLike] = useState(false)

  useEffect(() => {
    setIsBrowser(true)
  }, [])

  useEffect(() => {
    setIsLike(JSON.parse(localStorage.getItem(`${btnId}`) || 'false'))
  }, [btnId, isBrowser])

  const onClickToLike = () => {
    const isNewLike = JSON.parse(localStorage.getItem(`${btnId}`) || 'false')

    if (isNewLike) {
      localStorage.setItem(`${btnId}`, JSON.stringify(false))
      setIsLike(false)
    } else {
      localStorage.setItem(`${btnId}`, JSON.stringify(true))
      setIsLike(true)
    }
  }

  return (
    <button onClick={onClickToLike} className='w-7 h-7'>
      {
        isLike ? <AiFillHeart className='w-7 h-7' /> : <AiOutlineHeart className='w-7 h-7' />
      }
    </button>
  )
}