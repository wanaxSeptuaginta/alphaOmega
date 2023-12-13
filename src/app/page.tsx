import Image from "next/image";
import NavigationButton from "./components/navigationButton";
import { Flex, Heading } from "@radix-ui/themes";
import data from "../../data/greek_text.json";
import LayoutComponent from "./components/layoutComponent";

// just a comment to test permissions of MR
// just a comment to test permissions of MR2
export default function Home() {
  const testaments: string[] = Object.keys(data);

  return (
    <LayoutComponent>
      {
        "This is the main page. Navigation from this page to the old and new testament is possible."
      }
      {testaments.map((t, i) => (
        <NavigationButton key={i} href={`/${t}`} text={t} />
      ))}
    </LayoutComponent>
  );
}
