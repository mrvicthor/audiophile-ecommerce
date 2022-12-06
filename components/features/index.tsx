interface FeaturesProps {
  features: string;
  featuresCont: string;
  includes: any[];
}

const Features = ({ features, featuresCont, includes }: FeaturesProps) => {
  return (
    <section className="mt-[5.5rem] md:mt-[7.5rem] lg:mt-[10rem] lg:flex lg:gap-[7.8125rem]">
      <div className="lg:w-[39.6875rem]">
        <h2 className="font-bold text-[#000000] leading-[2.25rem] tracking-[0.86px] text-[1.5rem] uppercase md:text-[2rem] md:tracking-[1.14px]">
          features
        </h2>
        <p className="font-medium leading-[1.5rem] text-[0.9375rem] text-[#000000] opacity-50 mt-6 md:mt-8">
          {features}
        </p>
        <p className="font-medium leading-[1.5rem] text-[0.9375rem] text-[#000000] opacity-50 mt-6">
          {featuresCont}
        </p>
      </div>
      <div className="mt-[5.5rem] h-[13.5625rem] md:grid md:grid-cols-2 lg:grid-cols-1 lg:mt-0">
        <h3 className="text-[#000000] leading-[2.25rem] font-bold tracking-[0.86px] text-[1.5rem] md:text-[2rem] uppercase">
          in the box
        </h3>
        <ul className="grid gap-2 mt-[1.4375rem] md:mt-0 lg:mt-8">
          {includes.map((item: any, index: number) => (
            <li
              key={index}
              className="leading-[1.5625rem] text-[#000000] font-medium capitalize"
            >
              <span className="text-[#d87d4a] text-[0.9375rem]  font-bold mr-6">
                {item.quantity}x
              </span>{" "}
              <span className="opacity-50">{item.item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
export default Features;
