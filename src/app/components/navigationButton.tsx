import { Button } from "@radix-ui/themes";
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
    <Button>
      <Link href={href}>{text}</Link>
    </Button>
  );
};

export default NavigationButton;
