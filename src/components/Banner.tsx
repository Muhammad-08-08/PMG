"use client";

import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import { BannerType } from "./types";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

function Banner() {
  const [banner, setBanner] = useState<BannerType>();

  useEffect(() => {
    axios.get("https://nt.softly.uz/api/front/banners").then((response) => {
      setBanner(response.data);
    });
  }, []);

  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
      className="w-full max-w-6xl mx-auto my-6"
    >
      <CarouselContent>
        {banner?.map((item) => (
          <CarouselItem key={item.id} className="flex justify-center">
            <Image
              src={item.imageUrl}
              alt={item.title}
              width={0}
              height={0}
              className="w-full h-[500px] rounded-lg shadow-lg"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

export default Banner;
