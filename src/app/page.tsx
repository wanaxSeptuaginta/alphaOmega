"use client";
import Image from "next/image";
import NavigationButton from "./components/navigationButton";
import { Box, Flex, Heading } from "@radix-ui/themes";
import data from "../../data/greek_text.json";
import LayoutComponent from "./components/layoutComponent";
import { RecoilRoot } from "recoil";
import Nabvar from "./components/navbar";
import PageHeader from "./components/pageheader";
import ButtonGroup from "./components/buttongroup";

export default function Home() {
  const testaments: string[] = Object.keys(data);

  return (
    <LayoutComponent>
      {
        <PageHeader
          text="Welcome to AlphaOmega, an application for the learning of the
              Greek language."
        />
      }
      {
        <Flex className="border-2 border-red " width={"100%"} gap={"4"}>
          {testaments.map((t, i) => (
            <ButtonGroup>
              <NavigationButton href={`/${t}`} text={t} />
            </ButtonGroup>
          ))}
        </Flex>
      }
    </LayoutComponent>
  );
}
