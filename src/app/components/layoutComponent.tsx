'use client'
import { Container, Flex, Heading } from "@radix-ui/themes";
import React from "react";
import NavigationButton from "./navigationButton";
import { RecoilRoot } from "recoil";

interface LayoutComponentProps {
  children: React.ReactNode[];
}

const LayoutComponent = ({
  children,
}: LayoutComponentProps): React.ReactElement => {
  return (
    <RecoilRoot>
      <Container size={"1"}>
        <Flex
          py={"4"}
          gap={"3"}
          display={"flex"}
          direction={"column"}
          align={"center"}
          justify={"center"}
        >
          <Heading>{children[0]}</Heading>
          <Flex
            gap={"2"}
            display={"flex"}
            justify={"center"}
            direction={"column"}
          >
            {children[1]}
          </Flex>
        </Flex>
      </Container>
    </RecoilRoot>
  );
};

export default LayoutComponent;
