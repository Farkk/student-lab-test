export const FirstSymbolToUpperCase = (str: string) => {
	let newStr = str[0].toUpperCase() + str.slice(1, str.length)
	return newStr
}

