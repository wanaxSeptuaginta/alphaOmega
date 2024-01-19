"use client";
import { Box, Container, Flex, Heading } from "@radix-ui/themes";
import React from "react";
import NavigationButton from "./navigationButton";
import { RecoilRoot } from "recoil";
import Nabvar from "./navbar";
import Footer from "./footer";

interface LayoutComponentProps {
  children: React.ReactNode[];
}

const LayoutComponent = ({
  children,
}: LayoutComponentProps): React.ReactElement => {
  return (
    <RecoilRoot>
      <Flex
        className="h-dvh"
        px={"3"}
        gap={"3"}
        display={"flex"}
        direction={"column"}
      >
        <Flex display={"flex"} className="basis-2/12">
          <Nabvar />
        </Flex>
        <Flex display={"flex"} className="basis-3/12 ">
          {children[0]}
        </Flex>
        <Flex display={"flex"} className="basis-6/12">
          {children[1]}
        </Flex>
        <Flex display={"flex"} className="basis-1/12">
          <Flex
            display={"flex"}
            direction={"row"}
            width={"100%"}
            justify={"center"}
            align={"center"}
          >
            <Footer />
          </Flex>
        </Flex>
      </Flex>
    </RecoilRoot>
  );
};

export default LayoutComponent;
