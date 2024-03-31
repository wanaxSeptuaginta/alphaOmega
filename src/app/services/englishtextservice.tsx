import axios from "axios";

const baseURLBooks = "https://bolls.life/get-books/KJV/"
const baseURLText = "https://bolls.life/get-text/KJV/"

const fetchAllBooks = async (chapter: string) => {
    const books = await axios.get(baseURLBooks) 
    return books.data
}

const fetchChapterText = async (books: string, chapter: string) => {
    const text = await axios.get(baseURLText)
    return text.data
}