import { Flex } from "@radix-ui/themes";
import React from "react";

const Nabvar = () => {
  return (
    <Flex
      width={"100%"}
      display={"flex"}
      direction={"row"}
    >
      <Flex className="basis-1/12" align={"center"} justify={"center"}>
        Here Goes the Home button
      </Flex>
      <Flex className="basis-9/12" align={"center"} justify={"center"}>
        Here goes some decoration
      </Flex>
      <Flex className="basis-2/12" align={"center"} justify={"center"}>
        Here goes the dropdown or side menu
      </Flex>
    </Flex>
  );
};

export default Nabvar;
