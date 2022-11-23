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
            <div key={speaker.id}>
              <Item title={speaker.name} description={speaker.description}>
                <Image
                  src={speaker.image.mobile}
                  alt={speaker.name}
                  fill
                  objectFit="cover"
                  className="md:hidden"
                />
                <Image
                  src={speaker.image.mobile}
                  alt={speaker.name}
                  fill
                  className="hidden md:block lg:hidden"
                />
                <Image
                  src={speaker.image.desktop}
                  alt={speaker.name}
                  fill
                  objectFit="cover"
                  className="hidden lg:block"
                />
              </Item>
            </div>
          ))}
        </div>
      </section>
    </CategoryLayout>
  );
};

export default Speakers;
