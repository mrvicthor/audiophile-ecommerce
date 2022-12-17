import { CategoryLayout, Title } from "../../components";
import Image from "next/image";
import { headphones } from "../../data";
import { useWindowSize } from "./../../hooks/use-Window-Size";

const Headphone = () => {
  const { width } = useWindowSize();

  return (
    <section>
      <CategoryLayout title="headphones">
        <section className="px-6 mt-[4rem] md:mt-[7.5rem] lg:mt-[10rem]">
          <div className="space-y-[7.5rem] pt-16 lg:max-w-[69.364rem] lg:mx-auto category overflow-hidden">
            {headphones.map((headphone) => (
              <Title
                slug={headphone.slug}
                key={headphone.id}
                title={headphone.name}
                description={headphone.description}
                isNew={headphone.new}
                category={headphone.category}
              >
                {width !== undefined && (
                  <Image
                    src={
                      width <= 640
                        ? headphone.categoryImage.mobile
                        : width > 640 && width <= 768
                        ? headphone.categoryImage.tablet
                        : headphone.categoryImage.desktop
                    }
                    fill
                    alt={headphone.name}
                    className="object-cover rounded-md"
                  />
                )}
              </Title>
            ))}
          </div>
        </section>
      </CategoryLayout>
    </section>
  );
};

export default Headphone;
