import { text } from "./inputUsers"

const convertAsciiToText = (text) => {
  const maxAscii = 122
  const minAscii = 97
  let letter = ""
  let decryptedWord = ""
  for (let i = 0; i < text.length; i++) {
    if (text[i] === " ") {
      decryptedWord += " "
    };
    letter = letter + text[i]
    const number = parseInt(letter)
    if (number >= minAscii && number <= maxAscii) {
      decryptedWord += String.fromCharCode(number)
      letter = ""
    }
  }
  return decryptedWord
}

convertAsciiToText(text)
