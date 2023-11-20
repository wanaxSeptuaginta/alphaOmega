import NavigationButton from "@/app/components/navigationButton";
import React from "react";

const Paragraph = ({ params }: { params: { paragraph: string } }) => {
  //hard coded data for tesping purposes
  const paragraph = ["Hello bible!"];

  return (
    <div>
      Paragraph {params.paragraph} {paragraph[0]}
      <NavigationButton
        href={'/'}
        text="Back to Landing Screen"
      />
    </div>
  );
};

export default Paragraph;
