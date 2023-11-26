import LayoutComponent from "@/app/components/layoutComponent";
import NavigationButton from "@/app/components/navigationButton";
import Link from "next/link";
import React from "react";

const Book_Author = ({ params }: { params: { book_author: string } }) => {
  // hard coded data for testing purposes
  const chapters: string[] = ["1", "2"];

  return (
      <LayoutComponent>
        {`Book_Author ${params.book_author}`}
        {
          <NavigationButton
            href={`${params.book_author}/${chapters[0]}`}
            text="Enter Book Route"
          />
        }
      </LayoutComponent>
  );
};

export default Book_Author;
