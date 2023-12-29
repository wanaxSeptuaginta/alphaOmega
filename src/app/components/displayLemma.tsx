"use client";

import React from "react";
import { RecoilRoot, useRecoilState } from "recoil";
import { lemmaState } from "../atoms/lemma";
import { Flex } from "@radix-ui/themes";

const DisplayLemma = () => {
  const [lemma, setLemma] = useRecoilState(lemmaState);

  return (
    <RecoilRoot>
      <Flex>Dictionary inforamation: {lemma}</Flex>
    </RecoilRoot>
  );
};

export default DisplayLemma;
