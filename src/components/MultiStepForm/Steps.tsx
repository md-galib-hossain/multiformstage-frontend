import Step from "./Step";
import Image from "next/image";
import sideimg from '@/assets/sidebar.jpg';

export type TStep = {
  number: number;
  title: string;
}

interface StepsProps {
  steps: TStep[];
}

const Steps: React.FC<StepsProps> = ({ steps }) => {
  return (
    <div className="relative rounded-lg col-span-full md:col-span-4 p-10 md:h-full">
      <Image
        src={sideimg}
        alt="Side Image"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        className="rounded-lg"
      />
      <div className="relative z-10 flex flex-row md:flex-col justify-center gap-6 flex-wrap md:h-full items-center lg:items-start">
        {steps.map((step, i) => (
          <Step key={i} step={step} />
        ))}
      </div>
      <div className="absolute inset-0 bg-black opacity-30 rounded-lg"></div> {/* Optional: Add an overlay */}
    </div>
  );
};

export default Steps;
