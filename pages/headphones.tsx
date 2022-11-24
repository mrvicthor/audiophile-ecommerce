import { CategoryLayout, Title } from ".././components";
import Image from "next/image";
import { headphones } from "../headphones";

const Headphone = () => {
  return (
    <section>
      <CategoryLayout title="headphones">
        <section className="px-6">
          <div className="space-y-[7.5rem] pt-16 lg:max-w-[69.364rem] lg:mx-auto">
            {headphones.map((headphone) => (
              <div key={headphone.id}>
                <Title
                  title={headphone.name}
                  description={headphone.description}
                  isNew={headphone.new}
                >
                  <Image
                    src={headphone.categoryImage.mobile}
                    alt={headphone.name}
                    fill
                    objectFit="cover"
                    className="md:hidden"
                  />
                  <Image
                    src={headphone.categoryImage.tablet}
                    alt={headphone.name}
                    fill
                    objectFit="cover"
                    className="hidden md:block lg:hidden"
                  />
                  <Image
                    src={headphone.categoryImage.desktop}
                    alt={headphone.name}
                    fill
                    objectFit="cover"
                    className="hidden lg:block"
                  />
                </Title>
              </div>
            ))}
          </div>
        </section>
      </CategoryLayout>
    </section>
  );
};

export default Headphone;
