import SectionTitle from "@/components/SectionTitle";
import React from "react";

interface Props {
  id: string;
  title?: string;
  background: "None" | "Middle" | "Bottom";
  children: React.JSX.Element | React.JSX.Element[];
}

const bgVariations = {
  None: {},
  Middle: {
    background:
      "linear-gradient(0deg, rgba(0,0,0,0) 0%, #0A1625 15%,#0A1625 85%, rgba(0,0,0,0) 100%)",
  },
  Bottom: {
    background:
      "linear-gradient(0deg,  #0A1625 0%,#0A1625 85%, rgba(0,0,0,0) 100%)",
  },
};

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
  const backgroundStyle = bgVariations[background];
  return (
    <section
      id={id}
      className=" p-4 mdl:p-8 w-full text-textLight "
      style={{
        minHeight: "calc(100vh - 5rem)",
        ...backgroundStyle,
      }}
    >
      {title && <SectionTitle title={title} />}
      {children}
    </section>
  );
};

export default SectionContainer;
