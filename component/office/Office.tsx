import Image from "next/image";
import officeOne from "../../public/office-1.png";
import officeTwo from "../../public/office-2.png";
import { Section } from "../section/Section";

const photos = [
  { src: officeOne, alt: "Fisayo's desk setup" },
  { src: officeTwo, alt: "Another view of Fisayo's workspace" },
];

export const Office = () => {
  return (
    <Section id="office" title="office">
      <div className="grid gap-4 sm:grid-cols-2">
        {photos.map((photo) => (
          <div
            key={photo.alt}
            className="relative aspect-[16/9] overflow-hidden rounded-2xl ring-1 ring-fg/10"
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              layout="fill"
              objectFit="cover"
              placeholder="blur"
            />
          </div>
        ))}
      </div>
    </Section>
  );
};
