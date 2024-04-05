import { FC } from "react";
import { Button } from "./Button";

const AboutMe: FC = () => {
  return (
    <div className="container px-4 pb-5">
      <h1 className="font-bold text-[28px] md:text-[36px] lg:text-[42px] py-3">
        Yurina Deguchi
      </h1>
      <div className="text-lg font-semibold pb-5">
        <p>a wannabe pluriverse</p>
        <p>designer and thinker</p>
        <p>driven by curiosity</p>
      </div>

      <Button>...More details?</Button>
    </div>
  );
};

export default AboutMe;
