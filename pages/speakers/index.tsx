import { CategoryLayout, Title } from "../../components";
import { speakers } from "../../data";
import Image from "next/image";
import { useWindowSize } from "./../../hooks/use-Window-Size";

const Speakers = () => {
  const { width } = useWindowSize();

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
              {width !== undefined && (
                <Image
                  src={
                    width <= 768
                      ? speaker.categoryImage.mobile
                      : width > 768 && width <= 1024
                      ? speaker.categoryImage.tablet
                      : speaker.categoryImage.desktop
                  }
                  fill
                  alt={speaker.name}
                  className="object-cover rounded-md"
                />
              )}
            </Title>
          ))}
        </div>
      </section>
    </CategoryLayout>
  );
};

export default Speakers;
