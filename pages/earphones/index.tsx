import { CategoryLayout, Title } from "../../components";
import { earphones } from "../../data";
import Image from "next/image";
import { useWindowSize } from "./../../hooks/use-Window-Size";
import { Product } from "../../model";

const Earphones = () => {
  const { width } = useWindowSize();
  return (
    <section>
      <CategoryLayout title="earphones">
        <section className="px-6 mt-[4rem] md:mt-[7.5rem] lg:mt-[10rem]">
          <div className="space-y-[7.5rem] pt-16 lg:max-w-[69.364rem] lg:mx-auto category overflow-hidden">
            {earphones.map((earphone: Product) => (
              <Title
                slug={earphone.slug}
                key={earphone.id}
                title={earphone.name}
                description={earphone.description}
                isNew={earphone.new}
                category={earphone.category}
              >
                {width !== undefined && (
                  <Image
                    src={
                      width <= 768
                        ? earphone.categoryImage.mobile
                        : width > 768 && width <= 1024
                        ? earphone.categoryImage.tablet
                        : earphone.categoryImage.desktop
                    }
                    fill
                    alt={earphone.name}
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

export default Earphones;
