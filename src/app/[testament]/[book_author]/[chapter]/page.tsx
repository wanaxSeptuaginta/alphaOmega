"use client";

import React from "react";
import data from "../../../../../data/greek_text.json";
import NavigationButton from "@/app/components/navigationButton";
import LayoutComponent from "@/app/components/layoutComponent";
import { Box, Flex } from "@radix-ui/themes";
import {
  newTestamentAuthor,
  oldTestamentAuthor,
  testament,
} from "@/types/dataTypes";
import ClickableWords from "@/app/components/clickableWords";
import DisplayLemma from "@/app/components/displayLemma";
import PageHeader from "@/app/components/pageheader";
import ButtonGroup from "@/app/components/buttongroup";

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

  // const displayLemma = useRecoilValue(displayLemmaState)

  return (
    <LayoutComponent>
      {<PageHeader text={`Chapter ${params.chapter.replace(/\D/g, "")}`} />}
      {
        <Flex direction={"row"} width={"100%"} gap={"2"} display={"flex"}>
          <DisplayLemma />
          <Box className="basis-10/12 px-3">
            {text_data_values.map((t, i) => (
              <Flex
                display={"flex"}
                direction={"row"}
                align={"center"}
                justify={"center"}
                key={i}
                pb={"4"}
              >
                <Flex
                  className="w-full"
                  direction={"row"}
                  display={"flex"}
                  gap={"4"}
                >
                  <ClickableWords key={i} paragraph={t} />
                </Flex>
              </Flex>
            ))}
            <Flex display={"flex"} direction={"row"} width={"100%"} gap={"1"}>
              {text_data_keys.map((t, i) => (
                <ButtonGroup key={i}>
                  <NavigationButton
                    href={`${params.chapter}/${t}`}
                    text={i.toString()}
                  />
                </ButtonGroup>
              ))}
            </Flex>
          </Box>
        </Flex>
      }
    </LayoutComponent>
  );
};

export default Chapter;
