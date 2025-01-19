import SectionTitle from "@/components/SectionTitle";
import classes from "./style.module.css";
import React from "react";

interface Props {
  id: string;
  title?: string;
  background: "None" | "Middle" | "Bottom";
  children: React.JSX.Element | React.JSX.Element[];
}

/**
 * A container component for sections of a page.
 *
 * @param id - The ID of the section.
 * @param title - The title of the section.
 * @param background - The background color variation of the section.
 * @param children - The child components to render within the section.
 */
const SectionContainer: React.FC<Props> = ({
  id,
  title,
  background,
  children,
}) => {
  return (
    <section
      id={id}
      className={` p-4 mdl:p-8 w-full text-textLight ${classes[background]} `}
      style={{
        minHeight: "calc(100vh - 5rem)",
      }}
    >
      {title && <SectionTitle title={title} />}
      {children}
    </section>
  );
};

export default SectionContainer;
