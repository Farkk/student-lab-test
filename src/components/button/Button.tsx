import { useState, useEffect, use } from "react"
import {FcLike} from 'react-icons/fc'
import {FcLikePlaceholder} from 'react-icons/fc'
import { btnProps } from "../models/models"

export default function Button({btnId}: btnProps) {

	const [isBrowser, setIsBrowser] = useState(false)

	useEffect(() => {
		setIsBrowser(true)
	  }, [])
	
	const [isLike, setIsLike] = useState(false)
	
	useEffect(() => {
		setIsLike(JSON.parse(localStorage.getItem(`${btnId}`) || 'false'))
	}, [isBrowser])
	
	const onClickToLike = () => {
		const isNewLike = JSON.parse(localStorage.getItem(`${btnId}`) || 'false')

		if (isNewLike) {
			localStorage.setItem(`${btnId}`, JSON.stringify(false))
			setIsLike(false)
		}

		if (!isNewLike) {
			localStorage.setItem(`${btnId}`, JSON.stringify(true))
			setIsLike(true)
		}
	}
	return (
		<button onClick={onClickToLike} className='w-4 h-4'>
			{
				isLike ? <FcLike/> : <FcLikePlaceholder/>
			}
		</button>
	)
}


