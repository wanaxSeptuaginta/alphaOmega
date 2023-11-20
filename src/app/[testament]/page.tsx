import React from "react";
import Link from "next/link";
import NavigationButton from "../components/navigationButton";

const Testament = ({ params }: { params: { testament: string } }) => {
  // hard coded data for testing purposes
  const books: string[] = ["genesis", "matthew"];

  return (
    <div>
      Testament {params.testament}
      <NavigationButton
        href={`${params.testament}/${books[0]}`}
        text="Enter Book Route"
      />
    </div>
  );
};

export default Testament;
