"use client";
import Image from "next/image";
import NavigationButton from "./components/navigationButton";
import { Flex, Heading } from "@radix-ui/themes";
import data from "../../data/greek_text.json";
import LayoutComponent from "./components/layoutComponent";
import { RecoilRoot } from "recoil";

export default function Home() {
  const testaments: string[] = Object.keys(data);

  return (
      <LayoutComponent>
        {
          "Welcome to AlphaOmega, an application for the learning of the Greek language."
        }
        {testaments.map((t, i) => (
          <NavigationButton key={i} href={`/${t}`} text={t} />
        ))}
      </LayoutComponent>
  );
}
