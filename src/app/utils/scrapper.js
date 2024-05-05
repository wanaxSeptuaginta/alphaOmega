// scraper.js
import axios from "axios";
import { load } from "cheerio";
import { removeUnwantedCharactersFromWords } from "./removeUnwantedCharactersFromWords";

export async function scrapeData(word) {
  try {
    const parsedWord = removeUnwantedCharactersFromWords(word);
    // const url = `http://www.perseus.tufts.edu/hopper/morph?l=${parsedWord}&la=greek&can=qeou%5Cs0&prior=`; // Replace with your target URL
    const url = `http://www.perseus.tufts.edu/hopper/morph?l=${parsedWord}&la=greek&can=${parsedWord}0&prior=e)nqumhqe/ntos&d=Perseus:text:1999.01.0155:book=Matthew:chapter=1&i=1`;
    const response = await axios.get(url);

    console.log(response);

    const $ = load(response.data);
    const elementWithWinnerClass = $(".winner").hasClass("winner");

    console.log(
      "This is the elementWithWinnerClass",
      elementWithWinnerClass,
      url
    );
    if (elementWithWinnerClass === true) {
      console.log(elementWithWinnerClass);
      const titles = ["Nothing", "Nothing", "", ""];
      return titles;
    } else {
      // greek stands for the dictionary entry of perseus, array entry 0
      const greek = $(".analysis .lemma .lemma_header .greek")
        .map((index, element) => $(element).text())
        .get();
      // definition is the english translation, array entry 1
      const definition = $(".analysis .lemma .lemma_header .lemma_definition")
        .map((index, element) => $(element).text())
        .get();
      // form is the specific form of the word found in text, array entry 2
      const form = $("td.greek")
        .map((index, element) => $(element).text())
        .get();
      // grammatical is the grammatical information of the paricular type found
      // in the text, such as case, tense etc..., array entry 3
      const grammatical = $("td")
        .eq(10)
        .map((index, element) => $(element).text())
        .get();

      // here goes the whole lemma in a single array.
      const titles = greek.concat(definition).concat(form).concat(grammatical);

      //console.log(titles[0])

      return titles;
    }
  } catch (error) {
    console.error("Error:", error.message);
    return ["Check your internet connection."];
  }
}
