"use client";
import { useState } from "react";
import Image from "next/image";

export default function Card3D({ image, title, description }) {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  function handleMouseMove(e) {
    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();

    const x = (e.clientY - top - height / 2) / 20;
    const y = (e.clientX - left - width / 2) / 20;

    setRotate({ x: -x, y });
  }

  function handleMouseLeave() {
    setRotate({ x: 0, y: 0 });
  }

  return (
    <div className="perspective-1000 w-full flex justify-center">
      <div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="
          relative w-full min-w-[260px] max-w-sm md:max-w-md lg:max-w-md
          h-[440px] md:h-[480px] lg:h-[520px]
          rounded-2xl bg-white shadow-2xl
          transition-transform duration-300 ease-out
          will-change-transform
        "
        style={{
          transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
        }}
      >
        {/* Glow */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/10 to-blue-500/10 blur-2xl opacity-60 pointer-events-none" />

        {/* Image */}
        <div className="relative overflow-hidden rounded-t-2xl h-52 md:h-60 lg:h-64">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 hover:scale-110"
          />
        </div>

        {/* Content */}
        <div className="p-4 flex flex-col items-center gap-3 text-center">
          <h2 className="text-lg md:text-xl font-semibold text-black">
            {title}
          </h2>

          <p className="text-sm text-gray-600 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}