"use client";

import React from "react";
import { RecoilRoot, useRecoilState } from "recoil";
import { lemmaState } from "../atoms/lemma";
import { Flex } from "@radix-ui/themes";
import parse from "html-react-parser"

const DisplayLemma = () => {
  const [lemma, setLemma] = useRecoilState(lemmaState);

  console.log(lemma)

  if (lemma.find(l => l === "")) 
  return null 

  if (lemma)
  return (
    <RecoilRoot>
      { lemma.find((l) => l !== "") && <Flex>Dictionary inforamation: {lemma.map((l) => l)}</Flex>}
    </RecoilRoot>
  );
};

export default DisplayLemma;
