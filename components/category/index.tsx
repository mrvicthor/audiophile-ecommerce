import { Speaker, SpeakerProduct, Earphone } from "../index";
const Category = () => {
  return (
    <section
      className="my-[7.5rem] md:my-[6rem] lg:mt-[10.5rem] lg:mb-[12.5rem]"
      role="menu"
    >
      <Speaker />
      <SpeakerProduct />
      <Earphone />
    </section>
  );
};

export default Category;
