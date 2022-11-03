const Banner = () => {
  return (
    <section className="h-[31.875rem] bg-[#191919]">
      <div className="bg-[url('/images/image-header.jpg')] bg-no-repeat bg-cover bg-center h-screen relative">
        <div className=" w-[328px] px-6 flex flex-col justify-center items-center absolute top-[45%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
          <h1 className="tracking-[10px] text-lg uppercase text-white opacity-50 leading-[19px] font-[400]">
            New product
          </h1>
          <p className="text-white tracking-wider uppercase mt-4 text-4xl h-[80px]">
            XX99 Mark II <br /> Headphones
          </p>
          <p className="mt-[24px] text-center font-[500] text-white opacity-[0.75] text-[15px] leading-[25px]">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <button className="text-white mt-[28px]">see product</button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
