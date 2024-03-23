export const unixDateToTime = (unixTime:number) => {
	const date = new Date(unixTime*1000)

	return `${date.getHours()}:${date.getMinutes().toString().length == 1 ? '0' + date.getMinutes():date.getMinutes() }`
}