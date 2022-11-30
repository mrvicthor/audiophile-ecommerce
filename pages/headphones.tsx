import { CategoryLayout, Title } from ".././components";
import Image from "next/image";
import { headphones } from "../data";

const Headphone = () => {
  console.log(headphones);
  return (
    <section>
      <CategoryLayout title="headphones">
        <section className="px-6 mt-[4rem] md:mt-[7.5rem] lg:mt-[10rem]">
          <div className="space-y-[7.5rem] pt-16 lg:max-w-[69.364rem] lg:mx-auto category overflow-hidden">
            {headphones.map((headphone) => (
              <Title
                key={headphone.id}
                title={headphone.name}
                description={headphone.description}
                isNew={headphone.new}
              >
                <Image
                  src={headphone.categoryImage.mobile}
                  alt={headphone.name}
                  fill
                  className="md:hidden object-cover"
                />
                <Image
                  src={headphone.categoryImage.tablet}
                  alt={headphone.name}
                  fill
                  className="hidden md:block lg:hidden object-cover"
                />
                <Image
                  src={headphone.categoryImage.desktop}
                  alt={headphone.name}
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

export default Headphone;
