"use client";

import React, { useState } from "react";
import { scrapeData } from "../utils/scrapper";
import { useRecoilState } from "recoil";
import { lemmaState } from "../atoms/lemma";

type ClickableWordProps = {
  word: string;
};

const ClickableWord: React.FC<ClickableWordProps> = ({ word }) => {
  const [titles, setTitles] = useState([""]);
  const [lemma, setLemma] = useRecoilState(lemmaState);

  const handleScrapeClick = async () => {
    try {
      const scrapedTitles = await scrapeData(word);
      setTitles(scrapedTitles);
      setLemma(scrapedTitles);
      console.log(lemma);
    } catch (error: any) {
      console.error("Error fetching data:", error.message);
    }
  };

  return (
    <button
      onClick={
        handleScrapeClick
      }
    >
      {word}
    </button>
  );
};

export default ClickableWord;
