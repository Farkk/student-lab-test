import { useState, useEffect, use } from "react"
import {FcLike} from 'react-icons/fc'
import {FcLikePlaceholder} from 'react-icons/fc'
import { btnProps } from "../models/models"
import { btnObj } from "../models/models"
import { useLocalStorage } from "../useStorage/useLocalStorage"

export default function Button({btnId, arrIdQuote}: any) {

	const [isBrowser, setIsBrowser] = useState(false)

	useEffect(() => {
		setIsBrowser(true)
	}, [])

	const [isLike, setIsLike] = useState(isBrowser? JSON.parse(localStorage.getItem('isLike') || '{}') : false)

	useEffect(() => {
		if (isBrowser) {
			setIsLike(JSON.parse(localStorage.getItem('isLike') || '{}'))
		}
		console.log(localStorage.getItem('isLike'))
	}, [isBrowser])

	const onClickLike = (id:string) => {
		setIsLike(prev => !prev)
	}
	
	useEffect(() => {
		localStorage.setItem('isLike', JSON.stringify(isLike))
	},[isLike])

	return (
		<button onClick={() => onClickLike(btnId)} className='w-4 h-4'>
			{
				isLike ? <FcLike/> : <FcLikePlaceholder/>
			}
		</button>
	)
}


