// scraper.js
import axios from "axios";
import { load } from "cheerio";

export async function scrapeData(word) {
  try {
    const url = `http://www.perseus.tufts.edu/hopper/morph?l=${word}&la=greek&can=qeou%5Cs0&prior=*fu/lac`; // Replace with your target URL
    const response = await axios.get(url);

    console.log(response)

    const $ = load(response.data);

    // Add your scraping logic here using Cheerio
    const greek = $(".analysis .lemma .lemma_header .greek").map((index, element) => $(element).text()).get();
    const definition = $(".analysis .lemma .lemma_header .lemma_definition").map((index, element) => $(element).text()).get();
    const form = $("td.greek").map((index, element) => $(element).text()).get();
    const grammatical = $("td").eq(10).map((index, element) => $(element).text()).get();

    const titles = greek.concat(definition).concat(form).concat(grammatical)

  console.log(titles[0])

    return titles;
  } catch (error) {
    console.error("Error:", error.message); 
    return ["Check your internet connection."] ;
  }
}
