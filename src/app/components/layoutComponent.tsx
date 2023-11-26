import { Container, Flex, Heading } from "@radix-ui/themes";
import React from "react";
import NavigationButton from "./navigationButton";

interface LayoutComponentProps {
  children: React.ReactNode[];
}

const LayoutComponent = ({
  children,
}: LayoutComponentProps): React.ReactElement => {
  return (
    <Container size={"1"}>
      <Flex py={"4"} gap={"3"} display={"flex"} direction={"column"} align={"center"} justify={"center"}>
        <Heading>{children[0]}</Heading>
        <Flex gap={"2"} display={"flex"} justify={"center"}>
          {children[1]}
        </Flex>
      </Flex>
    </Container>
  );
};

export default LayoutComponent;
