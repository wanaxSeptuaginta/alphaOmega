import React from "react";
import Link from "next/link";
import NavigationButton from "../components/navigationButton";
import { Flex, Heading } from "@radix-ui/themes";
import LayoutComponent from "../components/layoutComponent";

const Testament = ({ params }: { params: { testament: string } }) => {
  // hard coded data for testing purposes
  const books: string[] = ["genesis", "matthew"];

  return (
      <LayoutComponent>
        {`Testament ${params.testament}`}
                {
          <NavigationButton
            href={`${params.testament}/${books[0]}`}
            text="Enter Book Route"
          />
        }
      </LayoutComponent>
  );
};

export default Testament;
