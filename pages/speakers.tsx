import { CategoryLayout, Item } from "../components";
import { speakers } from "../speaker";
import Link from "next/link";
import Image from "next/image";

const Speakers = () => {
  console.log(speakers);
  return (
    <CategoryLayout title="speakers">
      <section className="px-6">
        <div className="space-y-[7.5rem] pt-16 lg:max-w-[69.364rem] lg:mx-auto">
          {speakers.map((speaker) => (
            <Item title={speaker.name} description={speaker.description}>
              <Image
                src={speaker.image.mobile}
                alt={speaker.name}
                fill
                className="object-cover md:hidden"
              />
              <Image
                src={speaker.image.desktop}
                alt={speaker.name}
                fill
                className="object-cover object-center hidden md:block lg:hidden"
              />
              <Image
                src={speaker.image.desktop}
                alt={speaker.name}
                fill
                className="object-cover hidden lg:block"
              />
            </Item>
          ))}
        </div>
      </section>
    </CategoryLayout>
  );
};

export default Speakers;
