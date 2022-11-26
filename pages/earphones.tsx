import { CategoryLayout, Title } from "../components";
import { earphones } from "../earphone";
import Image from "next/image";

const Earphones = () => {
  return (
    <section>
      <CategoryLayout title="earphones">
        <section className="px-6 mt-[4rem] md:mt-[7.5rem] lg:mt-[10rem]">
          <div className="space-y-[7.5rem] pt-16 lg:max-w-[69.364rem] lg:mx-auto category overflow-hidden">
            {earphones.map((earphone) => (
              <Title
                key={earphone.id}
                title={earphone.name}
                description={earphone.description}
                isNew={earphone.new}
              >
                <Image
                  src={earphone.categoryImage.mobile}
                  alt={earphone.name}
                  fill
                  className="md:hidden object-cover"
                />
                <Image
                  src={earphone.categoryImage.tablet}
                  alt={earphone.name}
                  fill
                  className="hidden md:block lg:hidden object-cover"
                />
                <Image
                  src={earphone.categoryImage.desktop}
                  alt={earphone.name}
                  fill
                  className="hidden lg:block object-cover"
                />
              </Title>
            ))}
          </div>
        </section>
      </CategoryLayout>
    </section>
  );
};

export default Earphones;
