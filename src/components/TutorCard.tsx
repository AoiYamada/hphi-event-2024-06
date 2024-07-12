import Image from "next/image";
import { FC } from "react";

export type TutorCardProps = {
  name: string;
  title: string;
  img: {
    src: string;
    width: number;
    height: number;
  };
  qualifications: string[];
  descriptions: string[];
};

const TutorCard: FC<TutorCardProps> = ({
  name,
  title,
  img,
  qualifications,
  descriptions,
}) => {
  return (
    <div className="flex flex-col-reverse justify-center gap-12 pb-16 text-left lg:flex-row">
      <div className="flex max-w-lg flex-col gap-4">
        <div className="flex flex-col gap-2">
          <h2 className="hidden text-3xl font-semibold text-primary lg:block">
            {name}
          </h2>
        </div>
        <div className="flex flex-col gap-2 text-justify">
          <h3 className="text-lg font-semibold lg:hidden">導師介紹</h3>
          {descriptions.map((description, index) => (
            <p key={index}>{description}</p>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <Image
          src={img.src}
          alt={`${title} ${name}`}
          width={img.width}
          height={img.height}
          className="mx-auto max-w-sm rounded-lg"
        />
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-semibold text-primary lg:hidden">
            {name}
          </h2>
          <div className="text-justify">
            <h3 className="text-lg font-semibold">專業資格</h3>
            <ul className="list-outside list-disc pl-4">
              {qualifications.map((qualification, index) => (
                <li key={index} className="pl-2">
                  {qualification}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TutorCard;
