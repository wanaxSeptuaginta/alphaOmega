// scraper.js
import axios from "axios";
import { load } from "cheerio";

export async function scrapeData(word) {
  try {
    const url = `http://www.perseus.tufts.edu/hopper/morph?l=${word}&la=greek&can=qeou%5Cs0&prior=*fu/lac`; // Replace with your target URL
    const response = await axios.get(url);

    const $ = load(response.data);

    // Add your scraping logic here using Cheerio
    // const titles = $(".greek").map((index, element) => $(element).text()).get();
    const titles = $("td.greek").map((index, element) => $(element).text()).get();
    const html = $(".html").map((index, element) => $(element).html()).get();

  console.log(titles[0])
  console.log(html)

    return titles;
  } catch (error) {
    console.error("Error:", error.message);
    throw error;
  }
}
