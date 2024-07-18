import Step from "./Step";
import sideimg from '@/assets/sideimgnew.jpg';

export type TStep = {
number : number;
title : string
}

const Steps = ({ steps }: {steps : TStep[]}) => {
  return (
    <div
      style={{
        backgroundImage: `url(${sideimg.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      className="
        rounded-lg col-span-full md:col-span-4 p-10
        flex flex-row md:flex-col
        justify-center md:justify-center gap-6 flex-wrap md:h-full items-center lg:items-start
      "
    >
      {steps.map((step: any, i: number) => (
        <Step key={i} step={step} />
      ))}
    </div>
  );
};

export default Steps;
