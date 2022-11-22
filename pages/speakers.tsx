import { Title, Item } from "../components";
import { speakers } from "../speaker";
import Link from "next/link";
import Image from "next/image";

const Speakers = () => {
  console.log(speakers);
  return (
    <section>
      <Title title="speakers" />
      <>
        <section className="px-6">
          <div className="space-y-[7.5rem] py-16">
            {speakers.map((speaker) => (
              <div className="h-[45.25rem] grid gap-8">
                <div className={`h-[22rem] w-full rounded overflow-hidden`}>
                  <Image
                    src={speaker.image.desktop}
                    alt={speaker.name}
                    height={352}
                    width={500}
                    layout="responsive"
                  />
                </div>
                <article className="flex flex-col gap-[1.5rem] items-center">
                  <h2 className="text-[#d87d4a] font-normal leading-[1.2rem] text-[0.875rem] tracking-[0.625rem] text-center uppercase">
                    New Product
                  </h2>
                  <p className="font-bold text-[1.75rem] leading-[2.39rem] tracking-[1px] text-center text-[#000000] uppercase w-[8.75rem]">
                    {speaker.name}
                  </p>
                  <p className="font-medium text-[0.9375rem] leading-[1.5625rem] text-center text-[#000000] opacity-50">
                    {speaker.description}
                  </p>
                  <Link
                    href="#"
                    className="h-[48px] text-white bg-[#d87d4a] w-[160px]  uppercase hover:bg-[#fbaf85] py-3 text-center"
                  >
                    See Product
                  </Link>
                </article>
              </div>
            ))}
          </div>
        </section>
      </>
    </section>
  );
};

export default Speakers;
