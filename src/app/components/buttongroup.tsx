import { Flex } from "@radix-ui/themes";
import React, { Children } from "react";

interface ButtonGroupProps {
  children: React.ReactNode;
}

const ButtonGroup = ({ children }: ButtonGroupProps) => {
  return (
    <Flex justify={"center"} align={"center"} className=" basis-1/2">
      {children}
    </Flex>
  );
};

export default ButtonGroup;
