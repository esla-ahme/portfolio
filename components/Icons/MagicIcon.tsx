import * as React from "react";
import { SVGProps } from "react";
const MagicIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22" {...props}>
    <path
      d="m4.5 3-.531.969L3 4.5l.969.531L4.5 6l.531-.969L6 4.5l-.969-.531L4.5 3Zm5 0-.531.969L8 4.5l.969.531L9.5 6l.531-.969L11 4.5l-.969-.531L9.5 3Zm6.672 0L3 16.172 5.828 19 19 5.828 16.172 3Zm-.068 1.482 1.414 1.414-3.098 3.1-1.416-1.416 3.1-3.098zM6.5 7l-.531.969L5 8.5l.969.531L6.5 10l.531-.969L8 8.5l-.969-.531L6.5 7Z"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
        stroke: "none",
      }}
    />
  </svg>
);
export default MagicIcon;
