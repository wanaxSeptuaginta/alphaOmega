import LayoutComponent from "@/app/components/layoutComponent";
import NavigationButton from "@/app/components/navigationButton";
import Link from "next/link";
import data from "../../../../data/greek_text.json";
import React from "react";
import {
  newTestamentAuthor,
  oldTestamentAuthor,
  testament,
} from "@/types/dataTypes";
import { Flex } from "@radix-ui/themes";
import ButtonGroup from "@/app/components/buttongroup";
import PageHeader from "@/app/components/pageheader";

const Book_Author = ({
  params,
}: {
  params: {
    testament: testament;
    book_author: newTestamentAuthor | oldTestamentAuthor;
  };
}) => {
  const text_data: string[] = Object.keys(
    data[params.testament][params.book_author]
  );

  return (
    <LayoutComponent>
      {<PageHeader text={params.book_author} />}
      {
        <Flex display={"flex"} gap={"2"} direction={"column"} width={"100%"}>
          {text_data.map((t, i) => (
            <ButtonGroup>
              <NavigationButton
                key={i}
                href={`${params.book_author}/${t}`}
                text={t}
              />
            </ButtonGroup>
          ))}
        </Flex>
      }
    </LayoutComponent>
  );
};

export default Book_Author;
