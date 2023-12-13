import React from "react";
import Link from "next/link";
import data from "../../../../../data/greek_text.json";
import NavigationButton from "@/app/components/navigationButton";
import LayoutComponent from "@/app/components/layoutComponent";
import { Flex } from "@radix-ui/themes";

const Chapter = ({
  params,
}: {
  params: { testament: string; book_author: string; chapter: string };
}) => {
  // type script error that does not affect the application
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
          {text_data_values.map((t, i) => (
            <Flex key={i}>{t}</Flex>
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
