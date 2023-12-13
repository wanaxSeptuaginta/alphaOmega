import LayoutComponent from "@/app/components/layoutComponent";
import NavigationButton from "@/app/components/navigationButton";
import Link from "next/link";
import data from "../../../../data/greek_text.json";
import React from "react";

const Book_Author = ({
  params,
}: {
  params: { testament: string; book_author: string };
}) => {
  // type script error that does not affect the application 
  const text_data: string[] = Object.keys(
    data[params.testament][params.book_author]
  );

  return (
    <LayoutComponent>
      {`Book_Author ${params.book_author}`}
      {text_data.map((t, i) => (
        <NavigationButton
          key={i}
          href={`${params.book_author}/${t}`}
          text={t}
        />
      ))}
    </LayoutComponent>
  );
};

export default Book_Author;
