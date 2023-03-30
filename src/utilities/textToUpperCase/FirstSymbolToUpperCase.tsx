export function firstSymbolToUpperCase(str: string) {
	let newStr = str[0].toUpperCase() + str.slice(1, str.length)
	return newStr
}

