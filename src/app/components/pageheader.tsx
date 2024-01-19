import { Flex, Heading } from "@radix-ui/themes";
import React from "react";

interface PageHeaderProps {
  text: string;
}

const PageHeader = ({ text }: PageHeaderProps) => {
  return (
    <Flex
      width={"100%"}
      justify={"center"}
      align={"center"}
      direction={"row"}
      display={"flex"}
    >
      <Flex>
        <Heading>{text}</Heading>
      </Flex>
    </Flex>
  );
};

export default PageHeader;
