import Link from "next/link";
import React from "react";

interface NavigationButtonProps {
  href: string;
  text: string;
}

const NavigationButton = ({
  href,
  text,
}: NavigationButtonProps): React.JSX.Element => {
  return (
    <button>
      <Link href={href}>{text}</Link>
    </button>
  );
};

export default NavigationButton;
