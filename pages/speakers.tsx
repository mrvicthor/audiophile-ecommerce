import { CategoryLayout, Title } from "../components";
// import { speakers } from "../speaker";
import { speakers } from "../data";
import Link from "next/link";
import Image from "next/image";

const Speakers = () => {
  console.log(speakers);

  return (
    <CategoryLayout title="speakers">
      <section className="px-6 mt-[4rem] md:mt-[7.5rem] lg:mt-[10rem]">
        <div className="space-y-[7.5rem] pt-16 lg:max-w-[69.364rem] lg:mx-auto category overflow-hidden">
          {speakers.map((speaker) => (
            <Title
              key={speaker.id}
              title={speaker.name}
              description={speaker.description}
              isNew={speaker.new}
            >
              <Image
                src={speaker.categoryImage.mobile}
                alt={speaker.name}
                fill
                className="md:hidden object-cover"
              />
              <Image
                src={speaker.categoryImage.tablet}
                alt={speaker.name}
                fill
                className="hidden md:block lg:hidden object-cover"
              />
              <Image
                src={speaker.categoryImage.desktop}
                alt={speaker.name}
                fill
                className="hidden lg:block object-cover"
              />
            </Title>
          ))}
        </div>
      </section>
    </CategoryLayout>
  );
};

export default Speakers;
