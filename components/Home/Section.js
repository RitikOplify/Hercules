import React from "react";
import SectionCard from "./SectionCard";

function Section() {
  return (
    <>
      <SectionCard
        title="CUSTOM"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a felis fermentum, congue mi ut, sodales turpis... Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a felis fermentum, congue mi ut, sodales turpis"
        imageSrc="/Watch/i9.png"
        reverseLayout={true}
      />
      <SectionCard
        title="PRESTIGE"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a felis fermentum, congue mi ut, sodales turpis Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a felis fermentum, congue mi ut, sodales turpis..."
        imageSrc="/Images/prestige.png"
        reverseLayout={false}
      />

      <SectionCard
        title="CONCEPT"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a felis fermentum, congue mi ut, sodales turpis Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a felis fermentum, congue mi ut, sodales turpis..."
        imageSrc="/Watch/Concept.png"
        reverseLayout={true}
      />
      <SectionCard
        title="ENGRAVED ART"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a felis fermentum, congue mi ut, sodales turpis Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a felis fermentum, congue mi ut, sodales turpis..."
        imageSrc="/Images/engraved_art.png"
        reverseLayout={false}
      />
    </>
  );
}

export default Section;
