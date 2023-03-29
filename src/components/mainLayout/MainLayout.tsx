import { childrenProps } from "../models/models"
import Head from "next/head"
import { GrHomeRounded } from 'react-icons/gr'
import Categories from "../categories/Categories"
import Link from "next/link"
import Burger from "../burger/Burger"

export default function MainLayout({ children, header, tags }: childrenProps) {
	return (
		<>
			<Head>
				<title>Quotes library</title>
				<meta name="description" content="it is a web application for reading aphorisms" />
				<meta name="keywords" content="aphorism, phrases, popular quotes" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta charSet="utf-8" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<header className="bg-slate-200 mb-16">
				<nav className="
					items-center justify-between
					md:justify-start gap-7 px-3 md:px-8
					lg:px-5 mx-auto max-w-6xl py-5 flex md:gap-28">
					<Link href='/'><h1 className="text-2xl hover:opacity-70">Quotes library</h1></Link>
					<Link className="hover:opacity-70 flex gap-2 items-center text-xl homeLink" href='/'>
						<GrHomeRounded />
						Home
					</Link>
					<div className="md:hidden flex">
						<Burger tags={tags}></Burger>
					</div>
				</nav>
			</header>
			<main className='w-full h-screen'>
				<div className="mx-auto lg:px-5 lg:max-w-5xl xl:max-w-6xl">
					<aside className="hidden md:block md:mb-6 md:mx-auto max-w-ty4 lg:float-right">
						<div className="border-b-2 border-black w-360  mb-4">
							<h2 className="md:text-center text-2xl mb-5">Categories</h2>
						</div>
						<div className="bg-slate-200 py-5 px-9 flex gap-20">
							<Categories tags={tags} />
						</div>
					</aside>
					<div className="md:max-w-ty4 md:mx-auto lg:max-w-ty2 xl:max-w-ty3 lg:float-left">
						<div className="w-full text-center  lg:text-left h-14 border-b-2 border-black mb-5">
							<h2 className="text-2xl">{header}</h2>
						</div>
						{children}
					</div>
				</div>
			</main>
		</>
	)
}