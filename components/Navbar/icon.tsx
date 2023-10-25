import React from "react";
import { Spin } from "hamburger-react";
type IconProps = {
  // Define the props for your component here
  onClick?: () => void;
  opened?: boolean;
};

const icon = (props: IconProps) => {
  // Your component logic here

  return <Spin size={30} toggled={props.opened} onToggle={props.onClick} />;
};

export default icon;
