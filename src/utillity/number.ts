export const twoDecimalsFormat = (number: number) => {
    if (!number) {
      return 0
    }
    const with2Decimals = number.toString().match(/^-?\d+(?:\.\d{0,2})?/)[0]
    return parseFloat(with2Decimals)
  }
  