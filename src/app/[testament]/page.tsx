import React from "react";
import NavigationButton from "../components/navigationButton";
import data from "../../../data/greek_text.json";
import LayoutComponent from "../components/layoutComponent";

const Testament = ({ params }: { params: { testament: string } }) => {
  // type script error that does not affect the application 
  const text_data: string[] = Object.keys(data[params.testament]);

  return (
    <LayoutComponent>
      {`Testament ${params.testament}`}
      {text_data.map((t, i) => (
        <NavigationButton
          key={i}
          href={`${params.testament}/${t}`}
          text={t}
        />
      ))}
    </LayoutComponent>
  );
};

export default Testament;
