import React from "react";
import Link from "next/link";
import NavigationButton from "@/app/components/navigationButton";
import LayoutComponent from "@/app/components/layoutComponent";

const Chapter = ({ params }: { params: { chapter: string } }) => {
  // hard coded data for testing purposes
  const chapters: string[] = ["1", "2"];

  return (
      <LayoutComponent>
        {`Chapter ${params.chapter}`}
        {
          <NavigationButton
            href={`${params.chapter}/${chapters[0]}`}
            text="Enter Book Route"
          />
        }
      </LayoutComponent>
  );
};

export default Chapter;
