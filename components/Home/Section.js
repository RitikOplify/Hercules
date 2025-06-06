import React from "react";
import SectionCard from "./SectionCard";

function Section() {
  return (
    <>
      <SectionCard
        title="The Custom Collection"
        description="Built for those who know exactly what they want — or
are ready to discover it. The Custom Collection is a
celebration of individuality, where we explore the edges
of durability and elegance."
        description2="Crafted exclusively for each client, these watches blend
modern materials with timeless design cues to create
something that is both striking and enduring. With
Hercules, custom isn’t a finish — it’s a philosophy. And
every piece in this collection is a reflection of that belief."
        imageSrc="/Watch/i9.png"
        reverseLayout={false}
        url={"/custom"}
      />
      <SectionCard
        title="The Prestige Collection"
        description="It started with an idea — to take a classic steel and gold
Rolex and give it new life through bold design and
refined technique. After years of experimentation, our
signature Prestige Collection was born"
        description2={
          "From the DLC and Gold Submariner to the sleek Rose Gold Yachtmaster, this line captures timeless silhouettes reimagined through Hercules craftsmanship. Built for those who appreciate tradition but choose to stand apart, every watch in the Prestige Collection is one of one — elegant, elevated, and entirely original."
        }
        imageSrc="/Images/prestige.png"
        reverseLayout={true}
        url={"/prestige"}
      />

      <SectionCard
        title="The Concept  Collection"
        description="At Hercules, nothing excites us more than a blank
canvas. The Concept Collection is where imagination
meets craftsmanship, offering you the freedom to
create something truly one of a kind."
        description2={
          "We redesign everything — from dials and subdials to hands, bezels, date wheels, and even the case and bracelet — to align with your vision. Whether you have a fully formed idea or just a feeling you want captured in steel, this is where it happens. Bring us your concept, and we’ll turn it into a Hercules original that’s as unique as the person wearing it."
        }
        imageSrc="/Watch/Concept.png"
        reverseLayout={false}
        url={"/concept"}
      />
      <SectionCard
        title="The Engraved Collection"
        description="We don’t just engrave watches — we give them
meaning. The Engraved Collection is where heritage and
craftsmanship collide, with each piece hand carved by
our artisans to tell a story that lives far beyond the dial.
From mythical creatures to powerful motifs, every detail
is etched with intent. Designs like “King of Kings and
“Dragon Amongst Men are more than statements —
they’re legacies on your wrist. This is watchmaking at its
most personal."
        imageSrc="/Images/engraved_art.png"
        reverseLayout={true}
        url={"/engraved-art"}
      />
    </>
  );
}

export default Section;
