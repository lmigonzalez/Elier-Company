import React, { type FC, useState } from "react";
import Image, { type ImageProps } from "next/image";
import Link from "next/link";

/** image h-320 w-1280*/
const Carousel: FC<{ images: ImageProps[] }> = ({ images }) => {
  const [pos, setPos] = useState(0);

  const max = images.length - 1;

  return (
    <div className="relative flex  w-full items-center max-w-none">
      <div className="absolute  flex h-full w-full items-center justify-between">
        <Link
          href={`#slide${pos <= 0 ? max : pos - 1}`}
          className="btn-ghost btn min-h-full w-[100px] rounded-2xl"
          onClick={() => setPos(pos <= 0 ? max : pos - 1)}
        >
          ❮
        </Link>
        <Link
          href={`#slide${pos >= max ? 0 : pos + 1}`}
          className="btn-ghost btn min-h-full w-[100px] rounded-2xl"
          onClick={() => setPos(pos >= max ? 0 : pos + 1)}
        >
          ❯
        </Link>
      </div>
      <div className={`carousel-start carousel rounded-box`}>
        {images.map((image, indx) => (
          <Image
            key={`carousel-${indx}`}
            id={`slide${indx}`}
            src={image.src}
            alt={image.alt}
            width={image?.width || 1280}
            height={image?.height || 320}
            priority={true}
            className="carousel-item"
          />
        ))}
      </div>
    </div>
  );
};
export default Carousel;
