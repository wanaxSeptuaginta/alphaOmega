"use client";

import React from "react";
import Link from "next/link";
import data from "../../../../../data/greek_text.json";
import NavigationButton from "@/app/components/navigationButton";
import LayoutComponent from "@/app/components/layoutComponent";
import { Flex } from "@radix-ui/themes";
import {
  newTestamentAuthor,
  oldTestamentAuthor,
  testament,
} from "@/types/dataTypes";
import ClickableWords from "@/app/components/clickableWords";
import { RecoilRoot, useRecoilState } from "recoil";
import { lemmaState } from "@/app/atoms/lemma";
import DisplayLemma from "@/app/components/displayLemma";

const Chapter = ({
  params,
}: {
  params: {
    testament: testament;
    book_author: newTestamentAuthor | oldTestamentAuthor;
    chapter: string;
  };
}) => {
  const text_data_keys: string[] = Object.keys(
    data[params.testament][params.book_author][params.chapter]
  );
  const text_data_values: string[] = Object.values(
    data[params.testament][params.book_author][params.chapter]
  );

  return (
      <LayoutComponent>
        {`Chapter ${params.chapter}`}
        {
          <>
            <DisplayLemma />
            {text_data_values.map((t, i) => (
              // <Flex key={i}>{t}</Flex>
              <ClickableWords key={i} paragraph={t} />
            ))}
            {text_data_keys.map((t, i) => (
              <NavigationButton
                key={i}
                href={`${params.chapter}/${t}`}
                text={t}
              />
            ))}
          </>
        }
      </LayoutComponent>
  );
};

export default Chapter;
