"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import ProductCard from "@/components/product/product-card";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import books from "@/data/books";

export default function ProductGrid() {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={16}
      slidesPerView={4}
      navigation
      pagination={{
        clickable: true,
        dynamicBullets: true,
      }}
      className="relative w-full max-w-full overflow-x-auto"
    >
      {books.map((item) => (
        <SwiperSlide key={item.id} className="p-1">
          <ProductCard book={item} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
