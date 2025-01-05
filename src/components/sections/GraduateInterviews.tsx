import React from "react";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import AnimatedSection from "@/components/AnimatedSection";

const videos = [
  { src: "/videos/Alice.mp4", name: "畢業生 Alice" },
  { src: "/videos/Camille.mp4", name: "畢業生 Camille" },
  { src: "/videos/Francis.mp4", name: "畢業生 Francis" },
  { src: "/videos/Joan.mp4", name: "畢業生 Joan" },
  { src: "/videos/Mandy.mp4", name: "畢業生 Mandy" },
  { src: "/videos/Suki.mp4", name: "畢業生 Suki" },
];

const VideoCard: React.FC<{ src: string; name: string }> = ({ src, name }) => (
  <div className="col-span-4 md:col-span-2 lg:col-span-4">
    <div className="prose md:prose-md dark:prose-invert mx-auto max-w-none">
      <div className="col-span-3 col-start-1">
        <div>
          <video controls playsInline>
            <source src={src} />
          </video>
        </div>
      </div>
      <p>{name}</p>
    </div>
  </div>
);

const GraduateInterviews: React.FC = () => (
  <AnimatedSection className="w-full" id="graduate-interviews">
    <MaxWidthWrapper className="flex flex-col items-center justify-center gap-12">
      <h1 className="flex flex-col items-center justify-center text-3xl font-semibold sm:flex-row sm:text-4xl lg:text-5xl">
        畢業生訪談
      </h1>
      <div className="grid grid-cols-4 gap-x-16 gap-y-8 lg:grid-cols-12">
        {videos.map((video, index) => (
          <VideoCard key={index} src={video.src} name={video.name} />
        ))}
      </div>
    </MaxWidthWrapper>
  </AnimatedSection>
);

export default GraduateInterviews;
