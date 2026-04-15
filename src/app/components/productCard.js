"use client";
import { useState } from "react";
import Image from "next/image";

export default function Card3D({ image, title, description }) {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  function handleMouseMove(e) {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();

    const x = (e.clientY - top - height / 2) / 20;
    const y = (e.clientX - left - width / 2) / 20;

    setRotate({ x: -x, y });
  }

  function handleMouseLeave() {
    setRotate({ x: 0, y: 0 });
  }

  return (
    <div
      className="perspective-1000"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="relative w-full max-w-sm md:max-w-md lg:w-96 h-auto md:h-[480px] lg:h-[550px] rounded-2xl bg-white/80
        text-white shadow-2xl transition-transform duration-300"
        style={{
          transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
        }}
      >
        {/* Glow effect */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br 
        from-purple-500/20 to-blue-500/20 blur-xl opacity-50" />

        {/* Image */}
        <div className="relative overflow-hidden rounded-t-2xl h-48 md:h-64 lg:h-100 ">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transform hover:scale-110 transition duration-500"
          />
        </div>

        {/* Content */}
        <div className="p-4 flex flex-col gap-3">
          <h2 className="text-xl font-semibold">{title}</h2>
          <p className="text-sm text-black">{description}</p>
        </div>
      </div>
    </div>
  );
}