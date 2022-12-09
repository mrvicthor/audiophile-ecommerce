import { CategoryLayout, Title } from "../../components";
import { speakers } from "../../data";
import Image from "next/image";

const Speakers = () => {
  return (
    <CategoryLayout title="speakers">
      <section className="px-6 mt-[4rem] md:mt-[7.5rem] lg:mt-[10rem]">
        <div className="space-y-[7.5rem] pt-16 lg:max-w-[69.364rem] lg:mx-auto category overflow-hidden">
          {speakers.map((speaker) => (
            <Title
              slug={speaker.slug}
              key={speaker.id}
              title={speaker.name}
              description={speaker.description}
              isNew={speaker.new}
              category={speaker.category}
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
