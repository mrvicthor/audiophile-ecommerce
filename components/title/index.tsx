import { Header } from "../index";

interface TitleProps {
  title: string;
}

const Title = ({ title }: TitleProps) => {
  return (
    <header className="h-[12rem] bg-[#000000] md:h-[21rem]">
      <Header style="bg-[#000000]" />

      <h1 className="text-[1.5625rem] text-white font-bold uppercase leading-[2.390rem] text-center mt-8 tracking-[2px] md:mt-[6.625rem] md:text-[2.5rem] md:leading-[2.75rem] md:tracking-[1.43px]">
        {title}
      </h1>
    </header>
  );
};

export default Title;
