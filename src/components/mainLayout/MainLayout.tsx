import { childrenProps } from "../models/models"
import Head from "next/head"
import {GrHomeRounded} from 'react-icons/gr'
import Categories from "../categories/Categories"
import Link from "next/link"

export default function MainLayout({ children, header, tags }:childrenProps) {
	return (
		<>
			<Head>
				<title>Create Next App</title>
				<meta name="description" content="Generated by create next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<nav className="bg-slate-200 mb-16">
				<div className="mx-auto max-w-6xl py-5 flex gap-28 items-center">
					<Link href='/'><h1 className="text-2xl">Quotes library</h1></Link>
					<div className="flex gap-2 items-center text-xl homeLink">
						<GrHomeRounded/>
						<Link href='/'>Home</Link>
					</div>
				</div>
			</nav>
			<main className='w-full h-screen'>
				<div className="mx-auto max-w-6xl">
					<div className="flex gap-20">
						<div className="max-w-ty3">
							<div className="h-14 max-w-ty border-b-2 border-black mb-5">
								<h2 className="text-2xl">{header}</h2>
							</div>
							{children}
						</div>
						<div className="max-w-ty4 mt-9">
							<div className="border-b-2 border-black w-360  mb-4">
								<h2 className="text-2xl mb-5">Categories</h2>
							</div>
							<div className="bg-slate-200 py-5 px-9 flex gap-20">
								<Categories tags={tags}/>
							</div>
						</div>
					</div>
				</div>
			</main>
		</>
	)
}