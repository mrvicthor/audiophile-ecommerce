const Gallery = () => {
  return (
    <section className="px-6 mb-[7.5rem] md:mb-[6rem] lg:mb-[12.5rem]">
      <div className="h-[43.625rem] md:h-[39.5625rem] lg:h-[36.75rem] lg:max-w-[69.364rem] lg:mx-auto lg:grid lg:grid-cols-2 lg:gap-[7.8125rem] overflow-hidden rounded">
        <div className="h-[18.75rem] w-full bg-[url('/images/image-best-gear-mobile.jpg')] bg-cover bg-no-repeat bg-center rounded md:bg-[url('/images/image-best-gear.jpg')] md:w-full lg:bg-[url('/images/image-best-gear-desktop.jpg')] lg:w-[33.75rem] lg:order-2 lg:h-full" />
        <div className="mt-[2.5rem] md:max-w-[35.8125rem] md:mx-auto lg:max-w-[27.8125rem] lg:self-center">
          <h4 className="font-bold text-[1.74rem] leading-[2.39rem] tracking-[1px] uppercase text-center md:leading-[2.75rem] md:text-[2.5rem] lg:text-left">
            Bringing you the <br className="md:hidden lg:block" />
            <span className="text-[#d87d4a]">best</span>{" "}
            <br className="hidden md:block lg:hidden" />
            audio gear
          </h4>
          <p className="mt-[2rem] text-[0.9375rem] leading-[1.5625rem] text-[#000000] font-medium opacity-50 text-center lg:text-left">
            {" "}
            Located at the heart of New York City, Audiophile is the premier
            store for high end headphones, earphones, speakers, and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio equipment.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
