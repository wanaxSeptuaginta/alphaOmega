// scraper.js
import axios from "axios";
import { load } from "cheerio";

export async function scrapeData(word) {
  try {
    const url = `http://www.perseus.tufts.edu/hopper/morph?l=${word}%5Cs&la=greek&can=qeou%5Cs0&prior=*fu/lac`; // Replace with your target URL
    const response = await axios.get(url);

    const $ = load(response.data);

    // Add your scraping logic here using Cheerio
    const titles = $(".greek").map((index, element) => $(element).text()).get();

  console.log(titles[0])

    return titles;
  } catch (error) {
    console.error("Error:", error.message);
    throw error;
  }
}
