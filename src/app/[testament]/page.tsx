import React from "react";
import NavigationButton from "../components/navigationButton";
import data from "../../../data/greek_text.json";
import LayoutComponent from "../components/layoutComponent";
import { testament } from "@/types/dataTypes";
import { Flex } from "@radix-ui/themes";
import PageHeader from "../components/pageheader";
import ButtonGroup from "../components/buttongroup";

const Testament = ({ params }: { params: { testament: testament } }) => {
  const text_data: string[] = Object.keys(data[params.testament]);

  return (
    <LayoutComponent>
      {<PageHeader text={params.testament} />}
      {
        <Flex
          gap={"2"}
          width={"100%"}
          direction={"column"}
        >
          {text_data.map((t, i) => (
            <ButtonGroup>
              <NavigationButton
                key={i}
                href={`${params.testament}/${t}`}
                text={t}
              />
            </ButtonGroup>
          ))}
        </Flex>
      }
    </LayoutComponent>
  );
};

export default Testament;
