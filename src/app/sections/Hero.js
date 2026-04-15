'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import ChatForm from '../components/ChatForm';

export default function Hero({ onOpenModal }) {
  return (
    <section id="hero" className="relative min-h-[70vh] flex items-center pt-28 pb-12 overflow-hidden bg-black/70">
      {/* Background Section */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <Image
          src="/bg-hero.webp"
          alt="Conexões pneumáticas industriais"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[80%_center] opacity-25 scale-105"
        />
      </div>

      {/* Content Section */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 lg:px-16 text-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1 mb-6 text-[10px] font-black tracking-[0.4em] uppercase bg-yellow-400 text-black rounded-sm">
              NORLESS · PARKER
            </span>

            <h1 className="text-4xl md:text-5xl
            lg:text-[46px] font-black
            leading-[1.08] mb-6
            tracking-tighter uppercase text-white">
              Soluções em{' '}
              <span className="text-yellow-400">Conexões Pneumáticas </span>
              <span className="text-orange-400">Parker</span>
            </h1>

            <p className="text-base md:text-lg text-yellow-400 font-semibold mb-4 max-w-xl leading-snug">
              Eficiência, confiabilidade e desempenho que conectam sua automação.
            </p>

            <p className="text-sm md:text-[15px] text-white/85 mb-10 leading-relaxed max-w-xl font-medium">
              Na <span className="text-orange-400 font-semibold">Norless</span>, você encontra a linha completa de conexões pneumáticas <span className="text-yellow-400 font-semibold">Parker</span>, referência global em tecnologia de conexão para sistemas industriais. Projetadas para oferecer máxima confiabilidade, durabilidade e segurança em aplicações exigentes, nossas conexões garantem vedação superior, instalação rápida e compatibilidade com diversos sistemas pneumáticos e fluidos industriais.
            </p>

            <motion.button
              onClick={onOpenModal}
              className="inline-flex items-center gap-3 px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm uppercase tracking-wide rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>👉 SOLICITE SUA COTAÇÃO</span>
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <ChatForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}