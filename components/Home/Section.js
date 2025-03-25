import React from "react";
import SectionCard from "./SectionCard";

function Section() {
  return (
    <>
      <SectionCard
        title="The Custom Collection"
        description="Built for those who know exactly what they want — or are ready to discover it. The Custom Collection is a celebration of individuality, where we explore the edges of durability and elegance. Crafted exclusively for each client, these watches blend modern materials with timeless design cues to create something that is both striking and enduring. With Hercules, custom isn’t a finish — it’s a philosophy. And every piece in this collection is a reflection of that belief."
        imageSrc="/Watch/i9.png"
        reverseLayout={true}
      />
      <SectionCard
        title="The Prestige Collection"
        description="It started with an idea — to take a classic steel and gold Rolex and give it new life through bold design and refined technique. After years of experimentation, our signature Prestige Collection was born. From the DLC and Gold Submariner to the sleek Rose Gold Yachtmaster, this line captures timeless silhouettes reimagined through Hercules craftsmanship. Built for those who appreciate tradition but choose to stand apart, every watch in the Prestige Collection is one of one — elegant, elevated, and entirely original."
        imageSrc="/Images/prestige.png"
        reverseLayout={false}
      />

      <SectionCard
        title="The Custom Collection"
        description="Built for those who know exactly what they want — or are ready to discover it. The Custom Collection is a celebration of individuality, where we explore the edges of durability and elegance. Crafted exclusively for each client, these watches blend modern materials with timeless design cues to create something that is both striking and enduring. With Hercules, custom isn’t a finish — it’s a philosophy. And every piece in this collection is a reflection of that belief."
        imageSrc="/Watch/Concept.png"
        reverseLayout={true}
      />
      <SectionCard
        title="The Engraved Collection"
        description="We don’t just engrave watches — we give them meaning. The Engraved Collection is where heritage and craftsmanship collide, with each piece hand-carved by our artisans to tell a story that lives far beyond the dial. From mythical creatures to powerful motifs, every detail is etched with intent. Designs like “King of Kings” and “Dragon Amongst Men” are more than statements — they’re legacies on your wrist. This is watchmaking at its most personal."
        imageSrc="/Images/engraved_art.png"
        reverseLayout={false}
      />
    </>
  );
}

export default Section;
