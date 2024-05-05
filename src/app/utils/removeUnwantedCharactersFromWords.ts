export const removeUnwantedCharactersFromWords = (word: string) => {
    const parsedWord = word.replace(/“/g, "")
    console.log(parsedWord)
    return parsedWord
}