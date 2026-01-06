'use client';
import Image from 'next/image';
import portfolioImage from '../public/assets/portfolioImage.jpg';

const Photo = () => {
  return (
    <div className="w-full h-full relative  ">
      <div className="w-[260px]  rounded-full  h-[260px] xl:w-[498px] xl:h-[498px]">
        <Image
          src={portfolioImage}
          className="rounded-full h-full w-full object-cover object-center"
          priority
          quality={100}
          width={260}
          height={260}
          alt="portfolioImage"
        />
      </div>
    </div>
  );
};

export default Photo;
