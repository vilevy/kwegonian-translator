const dictionary = {
  kil: 1,
  jin: 5,
  pol: 10,
  kilow: 50,
  jij: 100,
  jinjin: 500,
  polsx: 1000
}

const compareTwoNumbers = (arr) => {
  let total = 0
  for (let i = 0; i < arr.length; i += 1) {
    const number = arr[i]
    const nextNumber = arr[i + 1]

    if (!nextNumber) {
      total += number
    } else {
      if (number >= nextNumber) {
        total += number
      } else {
        const subtractionNumber = nextNumber - number
        total += subtractionNumber
        i++
      }
    }
  }
  return total
}

const kwegoniaTranslator = (input) => {
  const wordsArr = input.split(' ')
  const convertedArr = wordsArr.map((word) => dictionary[word])
  return compareTwoNumbers(convertedArr)
}

module.exports = { kwegoniaTranslator }
