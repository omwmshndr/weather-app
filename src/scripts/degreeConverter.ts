export const degreeConverter = (
  tempUnits: 'celsius' | 'fahrenheit',
  temp: number,
) => {
  switch (tempUnits) {
    case 'celsius':
      return (temp - 273.15).toFixed() + `\u00B0C`
    case 'fahrenheit':
      return (((temp - 273.15) * 9) / 5 + 32).toFixed() + `\u00B0F`

    default:
      break
  }
}
