import LayoutComponent from "@/app/components/layoutComponent";
import NavigationButton from "@/app/components/navigationButton";
import React from "react";
import data from "../../../../../../data/greek_text.json";

const Paragraph = ({
  params,
}: {
  params: {
    testament: string;
    book_author: string;
    chapter: string;
    paragraph: string;
  };
}) => {
  // type script error that does not affect the application
  const text_data: string =
    data[params.testament][params.book_author][params.chapter][
      params.paragraph
    ];
  console.log(text_data);

  return (
    <LayoutComponent>
      {`Paragraph ${params.paragraph} `}
      {
        <>
          {`
       ${JSON.stringify(text_data)}
       `}
          <NavigationButton href={"/"} text="Back to Landing Screen" />
        </>
      }
    </LayoutComponent>
  );
};

export default Paragraph;
